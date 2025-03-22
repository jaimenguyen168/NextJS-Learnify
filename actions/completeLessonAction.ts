"use server";

import { completeLessonById } from "@/sanity/lib/lessons/completeLessonById";

export const completeLessonAction = async (
  lessonId: string,
  clerkId: string,
) => {
  try {
    return await completeLessonById({ lessonId, clerkId });
  } catch (error) {
    console.error("Error completing lesson:", error);
    return { success: false, error: "Fail to complete lesson" };
  }
};
