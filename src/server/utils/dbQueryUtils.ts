import _ from 'lodash'
export const extractWhereClauseForTransaction = (filterParams: any) => {
  let where: any = {
    // currency: {
    //   code: {
    //     in: [],
    //   },
    // },
    // categoryId: {
    //   in: [],
    // },
  }

  const PERIOD_FILTER: any = {
    TODAY: {
      gt: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    YESTERDAY: {
      gt: new Date(new Date().setDate(new Date().getDate() - 2)),
      lt: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    LAST_3_DAYS: {
      gte: new Date(new Date().setDate(new Date().getDate() - 3)),
    },
    LAST_7_DAYS: {
      gte: new Date(new Date().setDate(new Date().getDate() - 7)),
    },
    LAST_15_DAYS: {
      gte: new Date(new Date().setDate(new Date().getDate() - 15)),
    },
    LAST_30_DAYS: {
      gte: new Date(new Date().setDate(new Date().getDate() - 30)),
    },
    LAST_90_DAYS: {
      gte: new Date(new Date().setDate(new Date().getDate() - 90)),
    },
    THIS_MONTH: {
      gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    },
    LAST_MONTH: {
      gte: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    },
    THIS_YEAR: {
      gte: new Date(new Date().getFullYear(), 0, 1),
    },
    LAST_YEAR: {
      gte: new Date(new Date().getFullYear() - 1, 0, 1),
      lt: new Date(new Date().getFullYear(), 0, 1),
    },
  }

  filterParams.period &&
    PERIOD_FILTER[filterParams.period.toString()] &&
    (where.date = PERIOD_FILTER[filterParams.period.toString()])

  filterParams.currencyCodes &&
    (where.currency = {
      code: {
        in: filterParams.currencyCodes,
      },
    })

  filterParams.categoryIds &&
    (where.categoryId = {
      in: filterParams.categoryIds?.map((item: any) => item),
    })

  filterParams.descriptionContains &&
    (where.description = {
      contains: filterParams.descriptionContains,
    })

  return where
}
