"use server";

import { z } from "zod";
import {
  projectFeasibilityAssessment,
  type ProjectFeasibilityAssessmentOutput,
} from "@/ai/flows/project-feasibility-assessment";
import { projectSchema } from "./schema";


export type FormState = {
  message: string;
  data?: ProjectFeasibilityAssessmentOutput;
  issues?: string[];
};

export async function assessProject(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = projectSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      issues: validatedFields.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const result = await projectFeasibilityAssessment(validatedFields.data);
    return {
      message: "Assessment successful.",
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        "An error occurred during the assessment. Please try again later.",
    };
  }
}
