import { PrismaClient } from "@prisma/client"

export const dropAndCreateUpdatePolicy = async (prismaClient : PrismaClient, schemaName : string, tableName: string) => {
    console.log(`Dropping update policy for ${schemaName}.${tableName};`);
    const dropUpdateQuerySQL = `DROP POLICY IF EXISTS "DEFAULT_UPDATE_POLICY" ON "${schemaName}"."${tableName}";`;
    const dropUpdatePolicyResult = await prismaClient.$executeRawUnsafe(dropUpdateQuerySQL)
    console.log(`REsult was ${dropUpdatePolicyResult}`);


    console.log(`Creating Update Policy for ${schemaName}.${tableName};`);
    const createUpdateQuerySQL = `
        CREATE POLICY "DEFAULT_UPDATE_POLICY"
            ON "${schemaName}"."${tableName}"
            FOR UPDATE USING (
                true
            )
            WITH CHECK (
                true
            );
    `;

    const createUpdatePolicyResult = await prismaClient.$executeRawUnsafe(createUpdateQuerySQL);
    console.log(`Result was ... ${createUpdatePolicyResult}`)
} 