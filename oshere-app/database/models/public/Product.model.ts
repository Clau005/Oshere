import { createModel } from "schemix";
import UUIDMixins from "../../mixins/UUID.mixins";
import { SCHEMA_NAME } from "./schemaName";


export default createModel((ProductModel) => {
    ProductModel.mixin(UUIDMixins)
        .int('price')
        .string('name')
        .string('description')
        .raw(`@@schema("${SCHEMA_NAME}")`);
})