import { PrismaClient } from "@prisma/client";
import { grantSchemaPermissions } from "./schemas";
import { seedAccessSecurity } from "./access";
import { seedPublicSecurity } from "./public";



const seedSecurity = async (prismaClient: PrismaClient) => {
    console.log('Seeding security...');
    await grantSchemaPermissions(prismaClient);
    await seedAccessSecurity(prismaClient);
    await seedPublicSecurity(prismaClient);
};


export default seedSecurity;