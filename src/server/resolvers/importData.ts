import { Context } from '@apollo/client'
import { parse } from 'csv-parse'
import fs from 'fs'

export const importDataResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  const { fileCategory } = args
  const fileLocation = `tmp-data/${fileCategory.toLowerCase()}.csv`

  let rows: any = []

  fs.createReadStream(fileLocation)
    .pipe(parse({ delimiter: ',', fromLine: 2, skipEmptyLines: true }))
    .on('data', (row) => {
      rows.push(row)
    })
    .on('end', async () => {
      console.log('parsed')

      const allCategories = await ctx.prisma.category.findMany({})
      const allCurrencies = await ctx.prisma.currency.findMany({})
      const allCategoriesMap = allCategories.reduce((acc: any, c: any) => {
        if (c?.name) acc[c.name] = c
        return acc
      }, {} as any)
      const allCurrenciesMap = allCurrencies.reduce((acc: any, c: any) => {
        if (c?.code) acc[c.code] = c
        return acc
      }, {} as any)
      console.log('started processing')
      for (let row of rows) {
        await handleAddOrUpdateTransaction(
          ctx,
          row,
          allCategoriesMap,
          allCurrenciesMap
        )
      }
      console.log('finished processing')
    })
    .on('close', () => {
      console.log('closed')
    })

  return 'Processing'
}

const handleAddOrUpdateTransaction = async (
  ctx: Context,
  row: any,
  allCategoriesMap: any,
  allCurrenciesMap: any
) => {
  const date = row[0]
  const category = row[1]
  const description = row[2]
  const account = row[3]
  const amountEtb = row[4]
  const amountUsd = row[5]
  const currency = amountEtb ? 'ETB' : amountUsd ? 'USD' : null

  const dateObj = new Date(date)
  const categoryObj = allCategoriesMap[category]
  const currencyObj = currency ? allCurrenciesMap[currency] : null

  if (category == 'exchange') {
    console.log('passing exchange')
    return
  }

  if (!categoryObj) {
    // throw new Error(`Category not found: ${category}`)
    console.log(`Category not found: ${category}`)
    return
  }

  if (!currencyObj) {
    // throw new Error(`Currency not found: ${currency}`)
    console.log(`Currency not found: ${currency}`)
    return
  }

  const transaction = await ctx.prisma.transaction.findFirst({
    where: {
      date: dateObj,
      description,
      amount: parseFloat(currency == 'ETB' ? amountEtb : amountUsd),
      category: {
        id: categoryObj.id,
      },
      currency: {
        id: currencyObj.id,
      },
      user: {
        id: ctx.user.id,
      },
    },
  })

  if (!transaction) {
    await ctx.prisma.transaction.create({
      data: {
        date: dateObj,
        description,
        amount: parseFloat( currency == 'ETB' ? amountEtb : amountUsd),
        category: {
          connect: {
            id: categoryObj.id,
          },
        },
        currency: {
          connect: {
            id: currencyObj.id,
          },
        },
        user: {
          connect: {
            id: ctx.user.id,
          },
        },
      },
    })
  } else {
    console.log('transaction already exists')
  }
}
