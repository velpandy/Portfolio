import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Globe } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "TailwindCSS"],
    liveDemo: "https://ecommerce-demo.johndoe.dev",
    github: "https://github.com/johndoe/ecommerce-platform",
    challenges: "Implemented real-time inventory sync across multiple warehouses while maintaining consistency and handling race conditions.",
  },
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize and categorize tasks, with natural language processing for task creation.",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Express", "JWT"],
    liveDemo: "https://taskmanager.johndoe.dev",
    github: "https://github.com/johndoe/ai-task-manager",
    challenges: "Optimized API calls to the AI service while maintaining a responsive user interface and managing rate limits.",
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A collaborative workspace application supporting real-time document editing, video conferencing, and team chat functionality.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    techStack: ["React", "WebRTC", "Socket.io", "Redis", "Docker", "AWS"],
    liveDemo: "https://collab.johndoe.dev",
    github: "https://github.com/johndoe/collab-tool",
    challenges: "Implemented custom CRDT algorithm for conflict-free real-time document editing across multiple users.",
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16 fade-in">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-200"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Challenges</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.challenges}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href={project.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.liveDemo} target="_blank">
                  <Globe className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}