import { PrismaClient } from '@prisma/client'
import seedData from './data';
import seedSecurity from './security';

const prisma = new PrismaClient

async function main() {
    console.log('Start seeding...');
    await seedSecurity(prisma);
    await seedData(prisma);
    console.log('Finished seeding');
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);
    })