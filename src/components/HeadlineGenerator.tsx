"use client";

import { generateHeadline, type GenerateHeadlineInput } from "@/ai/flows/generate-headline";
import { useState, useEffect } from "react";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const bioContent = "Sayeed Joy is a skilled Android Developer with a passion for Open Source Intelligence (OSINT) and research. He excels at building robust mobile applications and uncovering valuable insights through meticulous investigation.";

export default function HeadlineGenerator() {
  const [headline, setHeadline] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHeadline() {
      try {
        setIsLoading(true);
        setError(null);
        const input: GenerateHeadlineInput = { bio: bioContent };
        const result = await generateHeadline(input);
        setHeadline(result.headline);
      } catch (e) {
        console.error("Failed to generate headline:", e);
        setError("Failed to load headline. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchHeadline();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2 py-4 h-16">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <p className="text-muted-foreground">Generating dynamic headline...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="my-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-4 text-center md:text-left">
      {headline || "Android Developer & OSINT Specialist"}
    </h2>
  );
}
