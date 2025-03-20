import { defineQuery } from "groq";
import { sanityFetch } from "../live";

export async function getStudentByClerkId(clerkId: string) {
  const getStudentByClerkIdQuery = defineQuery(
    `*[_type == "student" && clerkId == $clerkId][0]`,
  );

  const result = await sanityFetch({
    query: getStudentByClerkIdQuery,
    params: { clerkId },
  });

  return result.data;
}
