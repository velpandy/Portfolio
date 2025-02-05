import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import ProfileImage from "./image.jpg"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 fade-in">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r dark:from-purple-400 dark:to-pink-500 text-transparent bg-clip-text from-blue-400 to-teal-500">
            Hi, I'm Velpandy 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer passionate about building exceptional web experiences
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm a pre-final year Computer Science student at Kumaraguru College of Technology, 
            specializing in full-stack development. With a strong foundation in 
            modern web technologies and a keen eye for design, I create scalable 
            and user-friendly applications that solve real-world problems.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="https://github.com/velpandy" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/velpandy-c" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:velpandyc@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Card className="w-96 h-96 relative overflow-hidden rounded-full border-4 border-transparent bg-gradient-to-r dark:from-purple-400 dark:to-pink-500 from-blue-400 to-teal-500 shadow-lg">
            <Image
              src={ProfileImage}
              alt="Velpandy"
              className="object-cover w-full h-full rounded-full transform transition-all duration-500 ease-in-out hover:scale-105"
              priority
            />
          </Card>
        </div>
      </div>
    </div>
  )
}
