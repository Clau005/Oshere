import { createModel } from "schemix";
import UUIDMixins from "../../mixins/UUID.mixins";
import { SCHEMA_NAME } from "./schemaName";


export default createModel((Usermodel) => {
    Usermodel.mixin(UUIDMixins)
        .string('email')
        .string('firstName')
        .string('lastName')
        .json('metadata', {optional:true})
        .raw(`@@schema("${SCHEMA_NAME}")`);
})