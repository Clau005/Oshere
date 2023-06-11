import { PrismaClient } from "@prisma/client";
import { dropAndCreateDeletePolicy } from "../shared/defaultPolicies/dropAndCreateDeletePolicy";
import { dropAndCreateInsertPolicy } from "../shared/defaultPolicies/dropAndCreateInsertPolicy";
import { dropAndCreateSelectPolicy } from "../shared/defaultPolicies/dropAndCreateSelectPolicy";
import { dropAndCreateUpdatePolicy } from "../shared/defaultPolicies/dropAndCreateUpdatePolicy";
import { enableRowLevelSecurity } from "../shared/enableRLS";

const tables = [
    'User'
]


export const seedPublicSecurity = async (prismaClient : PrismaClient) => {
    console.log('Seeding security policies for schema -PUBLIC-... ')

    for (const table of tables) {
        await enableRowLevelSecurity(prismaClient, 'public', table);
        await dropAndCreateSelectPolicy(prismaClient, 'public', table);
        await dropAndCreateInsertPolicy(prismaClient, 'public', table);
        await dropAndCreateUpdatePolicy(prismaClient, 'public', table);
        await dropAndCreateDeletePolicy(prismaClient, 'public', table);
    }
}