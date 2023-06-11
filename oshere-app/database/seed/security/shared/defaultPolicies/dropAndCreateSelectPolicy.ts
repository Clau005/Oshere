import { PrismaClient } from "@prisma/client";


export const dropAndCreateSelectPolicy = async (prismaClient : PrismaClient, schemaName : string, tableName: string) => {
    console.log(`Dropping select policy for ${schemaName}.${tableName};`);
    const dropSelectQuerySQL = `DROP POLICY IF EXISTS "DEFAULT_SELECT_POLICY" ON "${schemaName}"."${tableName}";`;
    const dropSelectPOlicyResult = await prismaClient.$executeRawUnsafe(dropSelectQuerySQL)
    console.log(`REsult was ${dropSelectPOlicyResult}`);


    console.log(`Creating select Policy for ${schemaName}.${tableName};`);
    const createSelectQuerySQL = `
        CREATE POLICY "DEFAULT_SELECT_POLICY"
            ON "${schemaName}"."${tableName}"
            FOR SELECT USING (
                true
            );
    `;

    const createSelectPolicyResult = await prismaClient.$executeRawUnsafe(createSelectQuerySQL);
    console.log(`Result was ... ${createSelectPolicyResult}`)
} 