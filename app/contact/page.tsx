"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail,Code } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import Link from "next/link"


export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto px-36 py-16 fade-in">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              Send me a message and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Sweet Name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link 
                href="mailto:velpandyc@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>velpandyc@gmail.com</span>
              </Link>
              
              <Link 
                href="https://github.com/velpandy"
                target="_blank"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/velpandy</span>
              </Link>
              
              <Link 
                href="https://linkedin.com/in/velpandy-c"
                target="_blank"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/velpandy-c</span>
              </Link>

              <Link 
                href="https://leetcode.com/u/velpandyc"
                target="_blank"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Code className="h-5 w-5" />
                <span>leetcode.com/u/velpandyc</span>
              </Link>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}