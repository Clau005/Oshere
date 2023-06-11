import { PrismaClient } from "@prisma/client";


export const grantSchemaPermissions = async (prismaClient: PrismaClient) => {
    const schemas = process.env.NEXT_PUBLIC_DATABASE_SCHEMAS?.split(',');

    if(schemas) {
        for(let i =0 ;i < schemas.length; i++) {

            const schema = schemas[i];
            
            console.log(`Granting schema permissions on schema ${schema}.......`);

            const grandCommands = [
                `GRANT USAGE ON SCHEMA ${schema} TO anon, authenticated, service_role`,
                `GRANT ALL ON ALL TABLE IN SCHEMA ${schema} TO anon, authenticated, service_role`,
                `GRANT ALL ON ALL ROUTINES IN SCHEMA ${schema} TO anon, authenticated, service_role`,
                `GRANT ALL ON ALL SEQUENCES IN SCHEMA ${schema} TO anon, authenticated, service_role`
            ];

            for (const sqlScript of grandCommands) {
                console.log('GRANT COMMAND RESPONSE', await prismaClient.$executeRawUnsafe(sqlScript))
            }
        }
    }
}