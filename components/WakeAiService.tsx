"use client";

import { useEffect } from "react";

export default function WakeAiService() {
  useEffect(() => {
    const aiServiceUrl = process.env.NEXT_PUBLIC_AI_SERVICES;

    if (!aiServiceUrl) {
      return;
    }

    const wakeService = async () => {
      try {
        // The URL constructor automatically parses and normalizes the URL.
        // This safely prevents double-slashes and validates the URL structure.
        const targetUrl = new URL(aiServiceUrl);

        await fetch(targetUrl, {
          method: "GET",
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
      } catch (error) {
        console.warn("Failed to wake AI service:", error);
      }
    };

    void wakeService();
  }, []);

  return null;
}