-- CreateTable
CREATE TABLE "Budget" (
    "id" UUID NOT NULL,
    "year" INTEGER NOT NULL,
    "budgetBasis" VARCHAR(10) DEFAULT 'MONTHLY',
    "monthlyBudget" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "yearlyBudget" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "currencyId" UUID,
    "categoryId" UUID,
    "userId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Budget_userId_idx" ON "Budget"("userId");

-- CreateIndex
CREATE INDEX "Budget_year_currencyId_categoryId_userId_idx" ON "Budget"("year", "currencyId", "categoryId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Budget_year_currencyId_categoryId_userId_key" ON "Budget"("year", "currencyId", "categoryId", "userId");

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
