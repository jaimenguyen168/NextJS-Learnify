import { type SchemaTypeDefinition } from "sanity";
import { studentType } from "@/sanity/schemaTypes/studentType";
import { courseType } from "@/sanity/schemaTypes/courseType";
import { instructorType } from "@/sanity/schemaTypes/instructorType";
import { categoryType } from "@/sanity/schemaTypes/categoryType";
import { moduleType } from "@/sanity/schemaTypes/moduleType";
import { lessonType } from "@/sanity/schemaTypes/lessonType";
import { enrollmentType } from "@/sanity/schemaTypes/enrollmentType";
import { lessonCompletionType } from "@/sanity/schemaTypes/lessonCompletionType";
import { blockContent } from "@/sanity/schemaTypes/blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    studentType,
    courseType,
    instructorType,
    categoryType,
    moduleType,
    lessonType,
    enrollmentType,
    lessonCompletionType,
    blockContent,
  ],
};
