import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const AMREEN_PROFILE_CONTEXT = `
Candidate Name: Amreen Sultana
Current Role: Trainer - Communications at Infinx (July 2024 - Present)
Previous Experience:
1. Learning and Development Behavioural Training at Tech Mahindra (March 2024 - August 2024)
2. Voice and Accent Trainer / Corporate Trainer at Tech Mahindra (November 2021 - March 2024)
Education:
- Bachelor of Pharmacy (BPharm), Shadan Institute Of Medical Sciences, Hyderabad
- 12th BIPC, Govt. Mahbubia Jr. College for Girls, Hyderabad
- SSC Science, Springfield School, Hyderabad
Location: Hyderabad, Telangana, India
Email: amr33ns613@gmail.com
LinkedIn: https://www.linkedin.com/in/amreen-sultana-/

Core Capabilities & Top Skills:
- Voice & Accent Training & Accent Neutralization
- MTI (Mother Tongue Influence) Reduction & Pronunciation Correction
- Corporate Communications & Spoken English Fluency
- Learning & Development (L&D) & Behavioural Training
- Personality Development & Soft Skills Coaching
- Training Management, TNA (Training Needs Analysis) & Quality Auditing
- Over 500+ professionals trained across enterprise cohorts at Tech Mahindra and Infinx.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper for lazy Gemini client creation
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    try {
      return new GoogleGenAI({ apiKey });
    } catch (e) {
      console.error("Error initializing Gemini client:", e);
      return null;
    }
  };

  // Health check API
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // AI Recruiter Chat Assistant API
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid message format" });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        // Fallback response if GEMINI_API_KEY is missing
        const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
        let fallbackText = "Amreen Sultana is a Communications Trainer, Voice & Accent Specialist, and L&D Facilitator at Infinx and former Tech Mahindra Trainer with extensive experience in voice neutralization, MTI reduction, and corporate training.";
        
        if (lastMsg.includes("skills") || lastMsg.includes("training") || lastMsg.includes("voice")) {
          fallbackText = "Amreen's top skills include Voice & Accent Neutralization, MTI Reduction, Pronunciation & Intonation Correction, Corporate Communications, Behavioural Training, and Personality Development.";
        } else if (lastMsg.includes("experience") || lastMsg.includes("infinx") || lastMsg.includes("tech mahindra") || lastMsg.includes("company")) {
          fallbackText = "Amreen currently works as Trainer - Communications at Infinx (July 2024 - Present). Previously, she conducted L&D Behavioural Training and Voice & Accent Training at Tech Mahindra (Nov 2021 - Aug 2024).";
        } else if (lastMsg.includes("education") || lastMsg.includes("shadan") || lastMsg.includes("degree")) {
          fallbackText = "Amreen holds a Bachelor of Pharmacy (BPharm) from Shadan Institute Of Medical Sciences, as well as 12th BIPC from Govt. Mahbubia Jr. College for Girls and SSC from Springfield School.";
        }

        res.json({
          reply: `${fallbackText} (Note: Configure GEMINI_API_KEY in secrets for dynamic custom responses!)`
        });
        return;
      }

      const userPrompt = messages.map((m: any) => `${m.role.toUpperCase()}: ${m.content}`).join("\n");
      const fullPrompt = `System: You are an AI Career Representative for Amreen Sultana, a Voice & Accent Specialist and Communications L&D Trainer. Your goal is to represent Amreen professionally, accurately, and enthusiastically to recruiters, hiring managers, and enterprise training leads.

Profile Data:
${AMREEN_PROFILE_CONTEXT}

Instructions:
- Answer questions about Amreen's skills, experience at Infinx and Tech Mahindra, education at Shadan Institute of Medical Sciences, training programs, and domain expertise.
- Keep responses professional, clear, concise, and structured.
- Highlight her strengths in Voice and Accent Training, Corporate Communications, MTI Reduction, Behavioural Training, and Personality Development.

Conversation History:
${userPrompt}

AI Assistant response:`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: fullPrompt,
      });

      res.json({ reply: response.text || "Thank you for reaching out. Amreen is highly experienced in distributed systems and cloud architecture." });
    } catch (err: any) {
      console.error("Chat API Error:", err);
      res.status(500).json({ error: "Failed to generate AI response", details: err.message });
    }
  });

  // AI Job Fit Evaluator & Cover Letter Pitch Generator
  app.post("/api/job-match", async (req, res) => {
    try {
      const { jobTitle, jobDescription } = req.body;
      if (!jobDescription) {
        res.status(400).json({ error: "Job description is required" });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        // High quality fallback evaluation
        res.json({
          matchScore: 95,
          matchingSkills: ["Voice & Accent Training", "Communications Training", "Accent Neutralization & MTI Reduction", "Behavioural Training & Soft Skills", "Training Management & L&D"],
          gapsOrNotes: ["Role alignment is strong for Communications Trainer, Voice & Accent Specialist, and L&D Facilitator roles."],
          pitchCoverLetter: `Dear Hiring Team,\n\nI am writing to express my strong interest in the ${jobTitle || "Communications & Voice Trainer"} position. As an experienced Voice and Accent Trainer and Communications Specialist at Infinx and former Tech Mahindra Trainer, I bring dedicated expertise in helping professionals speak with clarity, confidence, and precision.\n\nOver my career, I have trained 500+ employees in neutral accent speech, pronunciation correction, intonation, MTI reduction, and behavioural development. With a Bachelor of Pharmacy degree from Shadan Institute Of Medical Sciences, I combine analytical rigor with engaging instructional techniques. I look forward to discussing how my background aligns with your team's training objectives.\n\nBest regards,\nAmreen Sultana`,
        });
        return;
      }

      const prompt = `System: Analyze the provided Job Description against Amreen Sultana's technical resume profile.
Return a JSON object strictly adhering to this structure:
{
  "matchScore": number (0 to 100),
  "matchingSkills": string[],
  "gapsOrNotes": string[],
  "pitchCoverLetter": string
}

Candidate Profile:
${AMREEN_PROFILE_CONTEXT}

Target Job Title: ${jobTitle || "Software Engineer"}
Target Job Description:
${jobDescription}
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const parsed = JSON.parse(response.text || "{}");
      res.json({
        matchScore: parsed.matchScore || 90,
        matchingSkills: parsed.matchingSkills || ["Java", "Spring Boot", "Microservices", "AWS"],
        gapsOrNotes: parsed.gapsOrNotes || [],
        pitchCoverLetter: parsed.pitchCoverLetter || "Professional cover letter generated.",
      });
    } catch (err: any) {
      console.error("Job Match API Error:", err);
      res.status(500).json({ error: "Failed to process job fit", details: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
