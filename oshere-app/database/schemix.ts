import * as  dotenv from 'dotenv';
import {createSchema} from 'schemix';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const DATABASE_SCHEMAS = (process.env.NEXT_PUBLIC_DATABASE_SCHEMAS ?? 'public').split(',');
console.log('DATABASE_SCHEMAS', DATABASE_SCHEMAS);
console.log(dirname, 'dirname')
createSchema({
//base path should be a path to the folder containing models/, enums/ and mixins/.

    basePath: dirname,
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
            provider: 'prisma-fabbrica',
            output: '/generated/factories',
            nonTranspile: true
        },
    ]
}).export(dirname, 'schema')
