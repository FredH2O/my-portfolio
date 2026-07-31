"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = { role: "user" | "assistant"; text: string };

const markdownComponent: Components = {
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
    >
      {children}
    </a>
  ),

  p: ({ children }) => (
    <p className="mb-3 leading-7 text-slate-200 last:mb-0">{children}</p>
  ),

  h1: ({ children }) => (
    <h1 className="mb-4 text-2xl font-bold tracking-tight text-white">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="mb-3 mt-5 text-xl font-semibold tracking-tight text-white">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mb-2 mt-4 text-lg font-semibold text-white">{children}</h3>
  ),

  ul: ({ children }) => (
    <ul className="mb-3 list-disc space-y-1 pl-5 text-slate-200">{children}</ul>
  ),

  ol: ({ children }) => (
    <ol className="mb-3 list-decimal space-y-1 pl-5 text-slate-200">
      {children}
    </ol>
  ),

  li: ({ children }) => <li className="leading-7">{children}</li>,

  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),

  code: ({ children }) => (
    <code className="rounded bg-slate-900 px-1.5 py-0.5 font-mono text-sm text-sky-300">
      {children}
    </code>
  ),
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `👋 Hi! I'm Fred's AI assistant.

I can answer questions about his projects, skills, and experience.

What would you like to know?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", text: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            text: m.text,
          })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex h-160 w-96 lg:w-120 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl"
          >
            <div className="border-b border-slate-800 p-4">
              <h3 className="text-sm font-semibold text-white">
                Ask about my work
              </h3>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl bg-sky-500 text-white"
                        : "rounded-tr-2xl rounded-tl-2xl rounded-br-2xl bg-slate-800 text-slate-200"
                    }`}
                  >
                    <article className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponent}
                      >
                        {m.text}
                      </ReactMarkdown>
                    </article>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="w-fit rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-400">
                  Thinking...
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="flex gap-2 border-t border-slate-800 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask something..."
                className="flex-1 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                onClick={sendMessage}
                className="rounded-lg bg-sky-500 p-2 text-white hover:bg-sky-400"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-400"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
};

export default ChatWidget;
