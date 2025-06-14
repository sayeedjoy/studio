'use server';

/**
 * @fileOverview Generates a dynamic headline summarizing Sayeed Joy's expertise.
 *
 * - generateHeadline - A function that generates a headline.
 * - GenerateHeadlineInput - The input type for the generateHeadline function.
 * - GenerateHeadlineOutput - The return type for the generateHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeadlineInputSchema = z.object({
  bio: z.string().describe('A brief bio of Sayeed Joy.'),
});
export type GenerateHeadlineInput = z.infer<typeof GenerateHeadlineInputSchema>;

const GenerateHeadlineOutputSchema = z.object({
  headline: z.string().describe('A dynamic headline summarizing Sayeed Joy\'s key expertise.'),
});
export type GenerateHeadlineOutput = z.infer<typeof GenerateHeadlineOutputSchema>;

export async function generateHeadline(input: GenerateHeadlineInput): Promise<GenerateHeadlineOutput> {
  return generateHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeadlinePrompt',
  input: {schema: GenerateHeadlineInputSchema},
  output: {schema: GenerateHeadlineOutputSchema},
  prompt: `You are an expert at writing professional headlines. Given the following bio, generate a dynamic headline that summarizes Sayeed Joy's key expertise, which is primarily Android development and OSINT/research.\n\nBio: {{{bio}}}`,
});

const generateHeadlineFlow = ai.defineFlow(
  {
    name: 'generateHeadlineFlow',
    inputSchema: GenerateHeadlineInputSchema,
    outputSchema: GenerateHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
