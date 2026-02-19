-- CreateEnum
CREATE TYPE "ProductionStatus" AS ENUM ('ORDERED', 'MEASUREMENTS_VERIFIED', 'CUTTING_LEATHER', 'STITCHING', 'LASTING', 'QUALITY_CONTROL', 'SHIPPED', 'DELIVERED');

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'NGN',
    "paymentStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "reference" TEXT NOT NULL,
    "status" "ProductionStatus" NOT NULL DEFAULT 'ORDERED',
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL DEFAULT 'Lagos',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "size" TEXT NOT NULL,
    "measurements" JSONB,
    "customNotes" TEXT,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_reference_key" ON "Order"("reference");

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
