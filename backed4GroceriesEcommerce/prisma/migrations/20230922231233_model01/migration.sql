-- CreateTable
CREATE TABLE "Product" (
    "idProduct" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("idProduct")
);

-- CreateTable
CREATE TABLE "Category" (
    "idCategory" TEXT NOT NULL,
    "nameCategory" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("idCategory")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_idProduct_key" ON "Product"("idProduct");

-- CreateIndex
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_idCategory_key" ON "Category"("idCategory");

-- CreateIndex
CREATE UNIQUE INDEX "Category_nameCategory_key" ON "Category"("nameCategory");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("idCategory") ON DELETE RESTRICT ON UPDATE CASCADE;
