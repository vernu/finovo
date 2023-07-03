import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const seedCurrencies = async () => {
  const currencies = [
    {
      name: 'US Dollar',
      code: 'USD',
      symbol: '$',
    },
    {
      name: 'Birr',
      code: 'ETB',
      symbol: 'Br',
    },
    {
      name: 'Euro',
      code: 'EUR',
      symbol: '€',
    },
    {
      name: 'GB Pound',
      code: 'GBP',
      symbol: '£',
    },
    {
      name: 'Canadian Dollar',
      code: 'CAD',
      symbol: 'C$',
    },
    {
      name: 'Cryptocurrency (USD Equivalent)',
      code: 'Crypto',
      symbol: '₿',
    },
  ]

  for (let currency of currencies) {
    await prisma.currency.upsert({
      where: { code: currency.code },
      update: {
        name: currency.name,
        symbol: currency.symbol,
      },
      create: {
        name: currency.name,
        code: currency.code,
        symbol: currency.symbol,
      },
    })
  }
}

async function main() {
  await seedCurrencies()
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
