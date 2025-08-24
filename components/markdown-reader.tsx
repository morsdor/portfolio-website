"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText } from "lucide-react"

interface MarkdownReaderProps {
  title: string
  content: string
  buttonText?: string
}

export function MarkdownReader({ title, content, buttonText = "View Design Document" }: MarkdownReaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Simple markdown to HTML converter for basic formatting
  const formatMarkdown = (text: string) => {
    return text
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-6 mb-3 text-foreground">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-8 mb-4 text-foreground">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-6 text-foreground">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>')
      .replace(/^- (.*$)/gim, '<li class="ml-4 mb-1">• $1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-muted-foreground leading-relaxed">')
      .replace(/^\n/, '<p class="mb-4 text-muted-foreground leading-relaxed">')
      .replace(/\n$/, "</p>")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
          <FileText className="mr-2 h-5 w-5" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-playfair font-bold">{title}</DialogTitle>
          </div>
        </DialogHeader>
        <ScrollArea className="h-[60vh] p-6">
          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
