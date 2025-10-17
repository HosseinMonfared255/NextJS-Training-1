"use server";

import { z } from "zod";
import {
  projectFeasibilityAssessment,
  type ProjectFeasibilityAssessmentOutput,
} from "@/ai/flows/project-feasibility-assessment";

export const projectSchema = z.object({
  projectDescription: z.string().min(50, "Please provide a detailed project description (min. 50 characters)."),
  projectTimeline: z.string().min(10, "Please provide a timeline estimate (min. 10 characters)."),
  budgetEstimate: z.string().min(3, "Please provide a budget estimate."),
  requiredResources: z.string().min(20, "Please list some required resources (min. 20 characters)."),
  potentialRisks: z.string().min(20, "Please identify potential risks (min. 20 characters)."),
  successCriteria: z.string().min(20, "Please define success criteria (min. 20 characters)."),
});

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
