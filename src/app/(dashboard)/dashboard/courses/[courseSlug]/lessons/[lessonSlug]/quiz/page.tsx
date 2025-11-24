"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowLeft,
  RotateCcw,
} from "lucide-react"

interface Props {
  params: Promise<{ courseSlug: string; lessonSlug: string }>
}

// Mock quiz data - will be replaced with database queries
const quizData = {
  id: "quiz-1",
  lessonTitle: "Key Concepts and Terminology",
  lessonSlug: "key-concepts",
  courseSlug: "agentic-ai-ml",
  courseName: "Agentic AI Development & Machine Learning",
  passingScore: 80, // Percentage
  questions: [
    {
      id: "q1",
      question: "What is the primary difference between Machine Learning and traditional programming?",
      type: "multiple-choice" as const,
      options: [
        { id: "a", text: "Machine Learning requires more code" },
        { id: "b", text: "Machine Learning learns patterns from data instead of explicit instructions" },
        { id: "c", text: "Machine Learning is faster" },
        { id: "d", text: "Machine Learning doesn't use algorithms" },
      ],
      correctAnswer: "b",
      explanation: "Machine Learning enables computers to learn patterns from data without being explicitly programmed for every scenario, unlike traditional programming where all rules must be specified.",
    },
    {
      id: "q2",
      question: "Which type of machine learning uses labeled training data?",
      type: "multiple-choice" as const,
      options: [
        { id: "a", text: "Unsupervised Learning" },
        { id: "b", text: "Reinforcement Learning" },
        { id: "c", text: "Supervised Learning" },
        { id: "d", text: "Transfer Learning" },
      ],
      correctAnswer: "c",
      explanation: "Supervised Learning uses labeled training data where each example includes both input features and the correct output, allowing the model to learn the relationship between them.",
    },
    {
      id: "q3",
      question: "What is the role of data in machine learning?",
      type: "multiple-choice" as const,
      options: [
        { id: "a", text: "Data is optional for ML models" },
        { id: "b", text: "Data is the foundation that ML models learn patterns from" },
        { id: "c", text: "Data is only used for testing" },
        { id: "d", text: "Data slows down the learning process" },
      ],
      correctAnswer: "b",
      explanation: "Data is fundamental to machine learning. ML models learn patterns, relationships, and insights from data, making data quality and quantity crucial for model performance.",
    },
    {
      id: "q4",
      question: "Deep Learning is a subset of which field?",
      type: "multiple-choice" as const,
      options: [
        { id: "a", text: "Database Management" },
        { id: "b", text: "Web Development" },
        { id: "c", text: "Machine Learning" },
        { id: "d", text: "Network Security" },
      ],
      correctAnswer: "c",
      explanation: "Deep Learning is a specialized subset of Machine Learning that uses neural networks with multiple layers to learn hierarchical representations of data.",
    },
    {
      id: "q5",
      question: "Which of the following is an example of unsupervised learning?",
      type: "multiple-choice" as const,
      options: [
        { id: "a", text: "Image classification" },
        { id: "b", text: "Spam email detection" },
        { id: "c", text: "Customer segmentation/clustering" },
        { id: "d", text: "Predicting house prices" },
      ],
      correctAnswer: "c",
      explanation: "Customer segmentation/clustering is unsupervised learning because it finds patterns and groups in data without labeled examples, unlike classification tasks that require labeled training data.",
    },
  ],
}

export default function QuizPage({ params }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    if (!submitted) {
      setAnswers({ ...answers, [questionId]: answerId })
    }
  }

  const handleSubmit = () => {
    let correctCount = 0
    quizData.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++
      }
    })
    const percentage = (correctCount / quizData.questions.length) * 100
    setScore(percentage)
    setSubmitted(true)
    // TODO: Save quiz result to database
  }

  const handleRetake = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  const allQuestionsAnswered = quizData.questions.every((q) => answers[q.id])
  const passed = score >= quizData.passingScore

  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/dashboard/courses" className="hover:text-primary">
          My Courses
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/dashboard/courses/${quizData.courseSlug}`} className="hover:text-primary">
          {quizData.courseName}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href={`/dashboard/courses/${quizData.courseSlug}/lessons/${quizData.lessonSlug}`}
          className="hover:text-primary"
        >
          {quizData.lessonTitle}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Quiz</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Lesson Quiz</h1>
        <p className="text-muted-foreground">
          Test your knowledge of {quizData.lessonTitle}
        </p>
      </div>

      {/* Results card (shown after submission) */}
      {submitted && (
        <Card className="mb-6 border-2" style={{
          borderColor: passed ? "rgb(13 148 136)" : "rgb(239 68 68)"
        }}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className={`h-16 w-16 rounded-full flex items-center justify-center ${
                passed ? "bg-teal/10" : "bg-destructive/10"
              }`}>
                {passed ? (
                  <CheckCircle2 className="h-8 w-8 text-teal" />
                ) : (
                  <XCircle className="h-8 w-8 text-destructive" />
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">
                  {passed ? "Congratulations! You Passed!" : "Keep Trying!"}
                </h2>
                <p className="text-muted-foreground">
                  Your score: {score.toFixed(0)}% ({quizData.questions.filter(q => answers[q.id] === q.correctAnswer).length}/{quizData.questions.length} correct)
                </p>
                {!passed && (
                  <p className="text-sm text-muted-foreground mt-1">
                    You need {quizData.passingScore}% to pass. Review the lesson and try again.
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Questions */}
      <div className="space-y-6">
        {quizData.questions.map((question, index) => {
          const userAnswer = answers[question.id]
          const isCorrect = submitted && userAnswer === question.correctAnswer
          const isIncorrect = submitted && userAnswer && userAnswer !== question.correctAnswer

          return (
            <Card key={question.id} className={submitted ? (isCorrect ? "border-teal" : isIncorrect ? "border-destructive" : "") : ""}>
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-3">
                  <span className="text-primary shrink-0">Q{index + 1}.</span>
                  <span className="flex-1">{question.question}</span>
                  {submitted && (
                    isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0" />
                    ) : isIncorrect ? (
                      <XCircle className="h-5 w-5 text-destructive shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0" />
                    )
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Options */}
                <div className="space-y-2">
                  {question.options.map((option) => {
                    const isSelected = userAnswer === option.id
                    const isCorrectOption = option.id === question.correctAnswer
                    const showAsCorrect = submitted && isCorrectOption
                    const showAsIncorrect = submitted && isSelected && !isCorrectOption

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswerSelect(question.id, option.id)}
                        disabled={submitted}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          showAsCorrect
                            ? "border-teal bg-teal/10"
                            : showAsIncorrect
                            ? "border-destructive bg-destructive/10"
                            : isSelected
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50 hover:bg-secondary"
                        } ${submitted ? "cursor-default" : "cursor-pointer"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              showAsCorrect
                                ? "border-teal bg-teal"
                                : showAsIncorrect
                                ? "border-destructive bg-destructive"
                                : isSelected
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            }`}
                          >
                            {(isSelected || showAsCorrect) && (
                              <div className="h-2 w-2 rounded-full bg-white" />
                            )}
                          </div>
                          <span className="flex-1">{option.text}</span>
                          {showAsCorrect && <CheckCircle2 className="h-5 w-5 text-teal" />}
                          {showAsIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Explanation (shown after submission) */}
                {submitted && (
                  <div className="mt-4 p-4 bg-secondary rounded-lg">
                    <p className="text-sm font-semibold mb-1">Explanation:</p>
                    <p className="text-sm text-muted-foreground">{question.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href={`/dashboard/courses/${quizData.courseSlug}/lessons/${quizData.lessonSlug}`}
          className="flex-1"
        >
          <Button variant="outline" className="w-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lesson
          </Button>
        </Link>
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered}
            className="flex-1"
          >
            Submit Quiz
          </Button>
        ) : (
          <Button onClick={handleRetake} className="flex-1">
            <RotateCcw className="mr-2 h-4 w-4" />
            Retake Quiz
          </Button>
        )}
      </div>
    </div>
  )
}
