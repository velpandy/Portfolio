"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  BriefcaseIcon,
  MailIcon,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About", href: "/about", icon: UserIcon },
  { name: "Projects", href: "/projects", icon: FolderIcon },
  { name: "Experience", href: "/experience", icon: BriefcaseIcon },
  { name: "Contact", href: "/contact", icon: MailIcon },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background sticky top-0 z-50 shadow-md">
      <div className="flex h-16 items-center px-6 max-w-7xl mx-auto justify-between">
        {/* Left Navigation Links */}
        <div className="flex items-center space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-all duration-300",
                  isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    className="h-[2px] w-full bg-primary"
                    layoutId="underline"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side - Resume & Mode Toggle */}
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline">
            <Link href="/resume.pdf" target="_blank">
              Download Resume
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
