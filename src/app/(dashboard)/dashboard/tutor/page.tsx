"use client"

import { useState, useRef, useEffect } from "react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  MessageSquare,
  Send,
  Loader2,
  Sparkles,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Bot,
  User,
} from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

// Quick prompt suggestions
const quickPrompts = [
  {
    icon: HelpCircle,
    text: "Explain supervised vs unsupervised learning",
    prompt: "Can you explain the difference between supervised and unsupervised learning with examples?",
  },
  {
    icon: Lightbulb,
    text: "What are neural networks?",
    prompt: "What are neural networks and how do they work?",
  },
  {
    icon: BookOpen,
    text: "Help with Python syntax",
    prompt: "I'm having trouble understanding Python list comprehensions. Can you explain?",
  },
  {
    icon: Sparkles,
    text: "Real-world AI applications",
    prompt: "What are some real-world applications of AI and machine learning?",
  },
]

// Mock AI responses - will be replaced with actual OpenAI API calls
const mockResponses = [
  "Great question! Let me help you understand that concept better. In machine learning, we distinguish between different types of learning approaches based on how the model learns from data...",
  "I'd be happy to explain that! This is a fundamental concept in AI development. Let's break it down step by step...",
  "That's an excellent topic to explore. Based on the course material you've been studying, here's a comprehensive explanation...",
  "Let me clarify that for you. This concept is crucial for understanding how AI systems work...",
]

export default function AITutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I'm your AI Course Tutor. I'm here to help you understand course concepts, answer questions, and guide you through your learning journey. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content?: string) => {
    const messageContent = content || input
    if (!messageContent.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)] + "\n\n" +
          "Would you like me to elaborate on any specific part of this explanation?",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)

    // TODO: Replace with actual OpenAI API call
    // const response = await fetch('/api/tutor/chat', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message: messageContent, history: messages })
    // })
    // const data = await response.json()
  }

  const handleQuickPrompt = (prompt: string) => {
    handleSendMessage(prompt)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-[calc(100vh-4rem)] p-4 lg:p-8 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Bot className="h-8 w-8 text-primary" />
          AI Course Tutor
        </h1>
        <p className="text-muted-foreground mt-1">
          Ask questions about your courses, get explanations, and receive personalized guidance
        </p>
      </div>

      <div className="flex-1 grid lg:grid-cols-4 gap-6 min-h-0">
        {/* Chat area */}
        <div className="lg:col-span-3 flex flex-col min-h-0">
          <Card className="flex-1 flex flex-col min-h-0">
            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {message.role === "user" && (
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <User className="h-5 w-5 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input area */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question about your course..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Press Enter to send, Shift + Enter for new line
              </p>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick prompts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Quick Prompts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickPrompt(prompt.prompt)}
                  disabled={isLoading}
                  className="w-full text-left p-3 rounded-lg border hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-start gap-2">
                    <prompt.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{prompt.text}</span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Tips card */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Tips for Better Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>Be specific about what you're confused about</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>Share your current understanding</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>Ask for examples when concepts are unclear</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>Request step-by-step explanations</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tutor Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal" />
                <span>24/7 availability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal" />
                <span>Course-specific knowledge</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal" />
                <span>Personalized explanations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground">Voice chat (coming soon)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
