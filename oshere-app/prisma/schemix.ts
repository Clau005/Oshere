import * as dotenv from "dotenv";
import {createSchema} from "schemix";

dotenv.config();

const DATABASE_SCHEMAS = (process.env.NEXT_PUBLIC_DATABASE_SCHEMAS ?? 'public').split(',');
console.log('DATABASE_SSCHEMAS', DATABASE_SCHEMAS);
createSchema({
//base path should be a path to the folder containing models/, enums/ and mixins/.

    basePath: __dirname,
    datasource : {
        provider: 'postgresql',
        url: { env: 'DATABASE_URL'},
        schemas: DATABASE_SCHEMAS
    },
    generator : [
        {
            name: 'client',
            provider: 'prisma-client-js',
            previewFeatures: ['multiSchema']
        },
        {
            name: 'fabrica',
            provider: 'prisma-fabrica',
            output: '/generated/factories'
        },
    ]
}).export(__dirname, 'schema')
