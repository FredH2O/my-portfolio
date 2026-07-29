import { NextRequest, NextResponse } from "next/server";
import portfolioKnowlodge from "@/app/data/portfolioKnowledge.json";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const portfolioContext = JSON.stringify(portfolioKnowlodge, null, 2);

  const systemPrompt = `
You are "Fred's Assistant".

Use this portfolio information to answer questions:

${portfolioContext}

Rules:
- Speak about Fred in third person.
- Do not invent information.
- If something is not provided, say you don't know.
`;

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
