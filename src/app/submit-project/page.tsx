import SubmitProjectForm from "./SubmitProjectForm";

export const metadata = {
  title: "Submit a Project - ApexBuild",
  description: "Submit your project details for an AI-powered feasibility assessment and resource estimation. Let's build your vision together.",
};

export default function SubmitProjectPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Submit Your Project
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Provide the details of your project below. Our advanced AI will
          conduct a preliminary feasibility assessment and estimate the
          necessary resources to bring your vision to life.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <SubmitProjectForm />
      </div>
    </div>
  );
}
