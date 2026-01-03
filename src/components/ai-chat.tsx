"use client";

import { useState, useRef, useEffect } from "react";
import { aiChatPersona } from "@/ai/flows/ai-chat-persona";
import { Bot, Send, User, Loader2, MessageSquare, X } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Alfred, an AI representative for XNet. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await aiChatPersona({ query: input });
      const assistantMessage: Message = {
        role: "assistant",
        content: response.answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error with AI chat:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "I'm sorry, I seem to be having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
        <Button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 rounded-full h-14 shadow-lg px-5"
        >
            <MessageSquare className="w-6 h-6 mr-2"/>
            <span className="font-headline text-base">Ask AI</span>
        </Button>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[70vh] flex flex-col shadow-2xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
    <CardHeader className="relative">
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            AI Q&A
        </CardTitle>
        <CardDescription>
            Ask me anything about XNet.
        </CardDescription>
        <Button 
            onClick={() => setIsOpen(false)}
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2"
        >
            <X className="w-5 h-5"/>
            <span className="sr-only">Close chat</span>
        </Button>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col gap-4 overflow-hidden">
        <div className="flex-grow overflow-y-auto pr-4 -mr-4 space-y-4">
            {messages.map((message, index) => (
            <div
                key={index}
                className={cn(
                "flex items-start gap-3",
                message.role === "user" ? "justify-end" : "justify-start"
                )}
            >
                {message.role === "assistant" && (
                <Avatar className="w-8 h-8 border-2 border-primary">
                    <AvatarFallback><Bot /></AvatarFallback>
                </Avatar>
                )}
                <div
                className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
                >
                <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                <Avatar className="w-8 h-8 border-2 border-muted-foreground/50">
                    <AvatarFallback><User /></AvatarFallback>
                </Avatar>
                )}
            </div>
            ))}
            {isLoading && (
            <div className="flex items-start gap-3 justify-start">
                <Avatar className="w-8 h-8 border-2 border-primary">
                    <AvatarFallback><Bot /></AvatarFallback>
                </Avatar>
                <div className="p-3 rounded-lg bg-muted flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin"/>
                <span className="text-sm text-muted-foreground">Thinking...</span>
                </div>
            </div>
            )}
            <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4 border-t">
        <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about our mission..."
            className="flex-grow"
            disabled={isLoading}
            autoFocus
        />
        <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="w-4 h-4" />
        </Button>
        </form>
    </CardContent>
    </Card>
  );
}
