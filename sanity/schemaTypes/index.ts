import { type SchemaTypeDefinition } from "sanity";
import { studentType } from "./studentType";
import { courseType } from "./courseType";
import { instructorType } from "./instructorType";
import { categoryType } from "./categoryType";
import { moduleType } from "./moduleType";
import { lessonType } from "./lessonType";
import { enrollmentType } from "./enrollmentType";
import { lessonCompletionType } from "./lessonCompletionType";
import { blockContent } from "./blockContent";

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
