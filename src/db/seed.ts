import { PrismaClient } from "@prisma/client";
import { productList } from "./data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: productList });

  console.log("Database seeded successfully");
}

main();