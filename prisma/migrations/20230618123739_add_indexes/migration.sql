-- CreateIndex
CREATE INDEX "Currency_code_idx" ON "Currency"("code");

-- CreateIndex
CREATE INDEX "Transaction_currencyId_userId_categoryId_date_description_idx" ON "Transaction"("currencyId", "userId", "categoryId", "date", "description");
