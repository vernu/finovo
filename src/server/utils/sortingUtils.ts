export const sortCategories = (categories: any) => {
  const sortOrder: any = {
    INCOME: 1,
    EXCHANGE: 2,
    EXPENSE: 3,
  }

  const sortedCategories = categories.sort((a: any, b: any) => {
    const aOrder = a.type != null ? sortOrder[a.type] : 4
    const bOrder = b.type != null ? sortOrder[b.type] : 4
    return aOrder - bOrder
  })

  return sortedCategories
}
