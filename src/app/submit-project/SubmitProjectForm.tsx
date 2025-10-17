"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Loader2, Zap, Scaling, GanttChart, ShieldCheck, Trophy, AlertTriangle } from "lucide-react";

import { assessProject } from "./actions";
import { projectSchema } from "./schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

type FormData = z.infer<typeof projectSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Assessing Project...
        </>
      ) : (
        <>
          <Zap className="mr-2 h-4 w-4" />
          Get AI Assessment
        </>
      )}
    </Button>
  );
}

export default function SubmitProjectForm() {
  const [state, formAction] = useFormState(assessProject, { message: "" });
  const form = useForm<FormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectDescription: "",
      projectTimeline: "",
      budgetEstimate: "",
      requiredResources: "",
      potentialRisks: "",
      successCriteria: "",
    },
  });

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">
          Project Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={formAction} className="space-y-8">
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the project's objectives, scope, and desired outcomes."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                control={form.control}
                name="projectTimeline"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Estimated Timeline</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., 6-8 months, Q3 2025 - Q1 2026" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="budgetEstimate"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Budget Estimate</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Approx. $2.5 Million" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
              control={form.control}
              name="requiredResources"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Required Resources</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List required manpower, equipment, and key materials."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="potentialRisks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Potential Risks</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Identify any potential risks, challenges, or dependencies."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="successCriteria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Success Criteria</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What does a successful project look like? Define key metrics."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <SubmitButton />
          </form>
        </Form>
        
        {(state.message && !state.data) && (
             <Alert variant="destructive" className="mt-8">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Assessment Error</AlertTitle>
                <AlertDescription>
                    {state.message}
                    {state.issues && (
                        <ul className="list-disc list-inside mt-2">
                            {state.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                        </ul>
                    )}
                </AlertDescription>
            </Alert>
        )}

        {state.data && (
          <div className="mt-12">
            <Separator />
            <div className="py-8 text-center">
                <h3 className="font-headline text-3xl font-semibold">
                    AI Feasibility Assessment
                </h3>
                <p className="text-muted-foreground mt-2">Here is the preliminary analysis of your project.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="col-span-1 lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="font-headline text-xl">
                            Feasibility Score
                        </CardTitle>
                        <span className="text-3xl font-bold text-primary">{state.data.feasibilityScore}/100</span>
                    </CardHeader>
                    <CardContent>
                        <Progress value={state.data.feasibilityScore} className="h-4"/>
                        <p className="text-sm text-muted-foreground mt-2">A score indicating the overall viability of the project based on the data provided.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <Scaling className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline text-xl">
                            Resource Estimate
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                       {state.data.resourceEstimate}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <ShieldCheck className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline text-xl">
                            Risk Assessment
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        {state.data.riskAssessment}
                    </CardContent>
                </Card>
                 <Card className="col-span-1 lg:col-span-2">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <Trophy className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline text-xl">
                            Recommendations
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        {state.data.recommendations}
                    </CardContent>
                </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
