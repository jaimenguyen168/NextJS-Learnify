import { type SchemaTypeDefinition } from "sanity";
import { studentType } from "@/sanity/schemaTypes/studentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [studentType],
};
