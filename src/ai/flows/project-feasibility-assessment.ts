'use server';

/**
 * @fileOverview Assesses the feasibility of a submitted project and estimates resource requirements.
 *
 * - projectFeasibilityAssessment - A function that assesses project feasibility.
 * - ProjectFeasibilityAssessmentInput - The input type for the projectFeasibilityAssessment function.
 * - ProjectFeasibilityAssessmentOutput - The return type for the projectFeasibilityAssessment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectFeasibilityAssessmentInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('Detailed description of the project including objectives, scope, and desired outcomes.'),
  projectTimeline: z
    .string()
    .describe('Estimated project timeline including start and end dates, and key milestones.'),
  budgetEstimate: z
    .string()
    .describe('Initial budget estimate for the project.'),
  requiredResources: z
    .string()
    .describe('List of required resources including manpower, equipment, and materials.'),
  potentialRisks: z
    .string()
    .describe('Identified potential risks and challenges associated with the project.'),
  successCriteria: z
    .string()
    .describe('Clearly defined success criteria and metrics for the project.'),
});

export type ProjectFeasibilityAssessmentInput = z.infer<
  typeof ProjectFeasibilityAssessmentInputSchema
>;

const ProjectFeasibilityAssessmentOutputSchema = z.object({
  feasibilityScore: z
    .number()
    .describe('A score indicating the feasibility of the project (0-100).'),
  resourceEstimate: z
    .string()
    .describe('Estimated resource requirements including manpower, equipment, and materials.'),
  riskAssessment: z
    .string()
    .describe('Assessment of potential risks and challenges associated with the project.'),
  recommendations: z
    .string()
    .describe('Recommendations for improving project feasibility and success.'),
});

export type ProjectFeasibilityAssessmentOutput = z.infer<
  typeof ProjectFeasibilityAssessmentOutputSchema
>;

export async function projectFeasibilityAssessment(
  input: ProjectFeasibilityAssessmentInput
): Promise<ProjectFeasibilityAssessmentOutput> {
  return projectFeasibilityAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectFeasibilityAssessmentPrompt',
  input: {schema: ProjectFeasibilityAssessmentInputSchema},
  output: {schema: ProjectFeasibilityAssessmentOutputSchema},
  prompt: `You are an experienced project manager. Assess the feasibility of a construction project based on the provided details and estimate the required resources.

Project Description: {{{projectDescription}}}
Project Timeline: {{{projectTimeline}}}
Budget Estimate: {{{budgetEstimate}}}
Required Resources: {{{requiredResources}}}
Potential Risks: {{{potentialRisks}}}
Success Criteria: {{{successCriteria}}}

Provide a feasibility score (0-100), estimate resource requirements, assess potential risks, and give recommendations for improving project feasibility and success.  Format the output as a JSON object.
`,
});

const projectFeasibilityAssessmentFlow = ai.defineFlow(
  {
    name: 'projectFeasibilityAssessmentFlow',
    inputSchema: ProjectFeasibilityAssessmentInputSchema,
    outputSchema: ProjectFeasibilityAssessmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

