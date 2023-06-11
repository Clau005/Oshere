import { PrismaClient } from "@prisma/client"
import { enableRowLevelSecurity } from "../shared/enableRLS";
import { dropAndCreateUpdatePolicy } from "../shared/defaultPolicies/dropAndCreateUpdatePolicy";
import { dropAndCreateInsertPolicy } from "../shared/defaultPolicies/dropAndCreateInsertPolicy";
import { dropAndCreateSelectPolicy } from "../shared/defaultPolicies/dropAndCreateSelectPolicy";
import { dropAndCreateDeletePolicy } from "../shared/defaultPolicies/dropAndCreateDeletePolicy";



const tables = [
    'User'
]


export const seedAccessSecurity = async (prismaClient : PrismaClient) => {
    console.log('Seeding security policies for schema -Access-... ')

    for (const table of tables) {
        await enableRowLevelSecurity(prismaClient, 'access', table);
        await dropAndCreateSelectPolicy(prismaClient, 'access', table);
        await dropAndCreateInsertPolicy(prismaClient, 'access', table);
        await dropAndCreateUpdatePolicy(prismaClient, 'access', table);
        await dropAndCreateDeletePolicy(prismaClient, 'access', table);
    }
}