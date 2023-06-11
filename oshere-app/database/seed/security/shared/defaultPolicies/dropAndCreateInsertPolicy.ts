import { PrismaClient } from "@prisma/client"

export const dropAndCreateInsertPolicy = async (prismaClient : PrismaClient, schemaName : string, tableName: string) => {
    console.log(`Dropping insert policy for ${schemaName}.${tableName};`);
    const dropInsertQuerySQL = `DROP POLICY IF EXISTS "DEFAULT_INSERT_POLICY" ON "${schemaName}"."${tableName}";`;
    const dropInsertPolicyResult = await prismaClient.$executeRawUnsafe(dropInsertQuerySQL)
    console.log(`REsult was ${dropInsertPolicyResult}`);


    console.log(`Creating insert Policy for ${schemaName}.${tableName};`);
    const createInsertQuerySQL = `
        CREATE POLICY "DEFAULT_INSERT_POLICY"
            ON "${schemaName}"."${tableName}"
            FOR INSERT WITH CHECK (
                true
            );
    `;

    const createInsertPolicyResult = await prismaClient.$executeRawUnsafe(createInsertQuerySQL);
    console.log(`Result was ... ${createInsertPolicyResult}`)
} 