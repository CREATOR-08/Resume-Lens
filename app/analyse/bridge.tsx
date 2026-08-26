"use client";
import { useAnalysisStore } from "@/store/useAnalysisStore";

const bridge = async (
  resume: File,
  jd: File | null,
  role: string,
  jobDescription: string,

) => {

  const formData = new FormData();

  formData.append("resume", resume);

  if (jd) {
    formData.append("jd", jd);
  }

  formData.append("role", role);
  formData.append("jobDescription", jobDescription);

  const aiServiceUrl = process.env.NEXT_PUBLIC_AI_SERVICES?.replace(/\/$/, "");

  if (!aiServiceUrl) {
    throw new Error("AI service URL is not configured");
  }

  const response = await fetch(`${aiServiceUrl}/analyse`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to analyze resume");
  }

  const result = await response.json();

  useAnalysisStore.getState().setResult(result.report);
  console.log("Analysis Result:", result.status);

  return result;

};

export default bridge;
