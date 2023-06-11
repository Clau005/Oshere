import { PrismaClient } from "@prisma/client";


 export const enableRowLevelSecurity = async (prismaClient: PrismaClient, schemaName: string, tableName: string) => {
    
    const sql = `ALTER TABLE "${schemaName}"."${tableName}" ENABLE ROW LEVEL SECURITY;`;
    console.log(sql)

    const enableRLSResult = await prismaClient.$executeRawUnsafe(sql);
    console.log(`...result was ${enableRLSResult}`);
};