"use server";

import { uncompleteLessonById } from "@/sanity/lib/lessons/uncompleteLessonById";

export const uncompleteLessonAction = async (
  lessonId: string,
  clerkId: string,
) => {
  try {
    return await uncompleteLessonById({ lessonId, clerkId });
  } catch (error) {
    console.error("Error uncompleting lesson:", error);
    return { success: false, error: "Fail to uncomplete lesson" };
  }
};
