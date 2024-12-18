import prisma from "../src/prisma";
import { InitAdmin } from "./seeds/admin.seed";

async function main() {
  //Initialize admin
  await InitAdmin(prisma);
}

// Execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1); // Exit the process with a failure code
  })
  .finally(async () => {
    // Close the Prisma Client at the end
    await prisma.$disconnect();
  });
