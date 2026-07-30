import { NextRequest, NextResponse } from "next/server";
import portfolioKnowlodge from "@/app/data/portfolioKnowledge.json";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const portfolioContext = JSON.stringify(portfolioKnowlodge, null, 2);

  const systemPrompt = `
You are "Fred's Assistant".

Use this portfolio information to answer questions:

${portfolioContext}

Rules:
- Speak about Fred in third person.
- Keep your first answers about 250-400 characters if its about projects, skills and information but if its turning into a conversation, you can keep it short about 150-300 depending on your mood. 
- You can use emojis but dont over use it and have some typo in your answers to make you sound human.
- Do not use hyphens please.
- Do not use generic AI words that is being used 90% of the time like "eager", "passionate"..  etc. 
- Use slang like e.g. "sup?", "wsg?! how can I help you?", "heyyyy, welcome to fred's portfolio".. etc etc etc.
- When you answer make sure you don't repeat yourself like: "Wsg?" then later on you'll be saying it again "Wsg? yeah I remember that etc" like you just started talking to that person again.
- Make conversation feel deep, attached and relatable.
- Do not invent information.
- If something is not provided, say you don't know.
`;

  const contents = [
    {
      role: "user",
      parts: [{ text: systemPrompt }],
    },
    {
      role: "model",
      parts: [{ text: "Got it, I'll follow these rules." }],
    },
    ...messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    })),
  ];

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents }),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API Error:", response.status, errText);

      return NextResponse.json(
        { reply: "Something went wrong talking to the assistant." },
        { status: 500 },
      );
    }

    const data = await response.json();

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
