import { NextRequest, NextResponse } from "next/server";
import projects from "@/app/data/projects.json";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const projectContext = projects
    .map(
      (p: any) =>
        `Title: ${p.title}\nDescription: ${p.description}\nTech: ${p.keywords.join(", ")}\nDetails: ${p.details}`,
    )
    .join("\n\n---\n\n");

  const systemPrompt = `You are an assistant on Frederico Huertas's developer portfolio. Answer visitor questions about his projects using ONLY the context below. Be concise and friendly. If asked something unrelated to his work, politely redirect to his projects or skills.

PROJECTS:
${projectContext}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { text: `${systemPrompt}\n\nVisitor question: ${message}` },
              ],
            },
          ],
        }),
      },
    );

    const data = await response.json();
    // console.log("GEMINI RAW RESPONSE", JSON.stringify(data, null, 2));

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn't generate a response right now.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { reply: "Something went wrong. Try again in a moment." },
      { status: 500 },
    );
  }
}
