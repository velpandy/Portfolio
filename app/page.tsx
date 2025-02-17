"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Code} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "./image.jpg";
import "./globals.css";

// TypingEffect Component using setInterval with slice
interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

export default function Home() {
  // Hardcode the emoji so it never becomes undefined
  const emoji = "👋";

  return (
    <div className="container mx-auto px-36 py-16 fade-in">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold mb-6">
            {/* Wrap the typing effect in a span with gradient text */}
            <span className="bg-gradient-to-r dark:from-purple-400 dark:to-pink-500 from-blue-400 to-teal-500 text-transparent bg-clip-text">
              <TypingEffect text="Hi, I'm Velpandy " speed={100} />
            </span>
            {/* Emoji is in its own span with explicit text color */}
            <span className="inline-block ml-2 animate-waving-hand text-black dark:text-white">
              {emoji}
            </span>
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
          <br />
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
            <Link href="https://leetcode.com/u/velpandyc" target="_blank">
              <Button variant="ghost" size="icon">
                <Code className="h-5 w-5" />
              </Button>
              </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Card className="w-96 h-96 relative overflow-hidden rounded-full border-4 bg-gradient-to-r dark:border-pink-500 border-teal-500 shadow-lg">
            <div className="relative w-full h-full">
              <Image
                src={ProfileImage}
                alt="Velpandy"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
