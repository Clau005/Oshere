import { PrismaClient } from "@prisma/client";
import { initialize } from '../../generated/factories'
import seedAccessData from "./access";
import seedPublicData from "./public";


const seedData = async (prismaClient : PrismaClient) => {
    console.log('Seeding data for schemas : public, access...');

    console.log('Initialising prisma factories...')
    initialize({ prisma : prismaClient });

    await seedAccessData(prismaClient);
    await seedPublicData()
}

export default seedData;