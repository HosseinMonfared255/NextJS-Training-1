import { z } from "zod";

export const projectSchema = z.object({
  projectDescription: z.string().min(50, "Please provide a detailed project description (min. 50 characters)."),
  projectTimeline: z.string().min(10, "Please provide a timeline estimate (min. 10 characters)."),
  budgetEstimate: z.string().min(3, "Please provide a budget estimate."),
  requiredResources: z.string().min(20, "Please list some required resources (min. 20 characters)."),
  potentialRisks: z.string().min(20, "Please identify potential risks (min. 20 characters)."),
  successCriteria: z.string().min(20, "Please define success criteria (min. 20 characters)."),
});
