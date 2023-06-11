import { PrismaClient } from "@prisma/client";


export const dropAndCreateDeletePolicy = async (prismaClient : PrismaClient, schemaName : string, tableName: string) => {
    console.log(`Dropping delete policy for ${schemaName}.${tableName};`);
    const dropDeleteQuerySQL = `DROP POLICY IF EXISTS "DEFAULT_DELETE_POLICY" ON "${schemaName}"."${tableName}";`;
    const dropDeletePOlicyResult = await prismaClient.$executeRawUnsafe(dropDeleteQuerySQL)
    console.log(`REsult was ${dropDeletePOlicyResult}`);


    console.log(`Creating delete Policy for ${schemaName}.${tableName};`);
    const createDeleteQuerySQL = `
        CREATE POLICY "DEFAULT_DELETE_POLICY"
            ON "${schemaName}"."${tableName}"
            FOR DELETE USING (
                true
            );
    `;

    const createDeletePolicyResult = await prismaClient.$executeRawUnsafe(createDeleteQuerySQL);
    console.log(`Result was ... ${createDeletePolicyResult}`)
} 