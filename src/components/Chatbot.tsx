import React, { useState, useRef, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Bot, Send, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id: string;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getMockResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();
    if (lowerMsg.includes('hi') || lowerMsg.includes('hello')) {
      return `Hello! 👋 I'm your AI assistant. How can I help with your portfolio or anything else?`;
    } else if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
      return 'Great projects! You can showcase your work experience, certificates, and skills here. Need help with anything specific?';
    } else if (lowerMsg.includes('skill') || lowerMsg.includes('tech')) {
      return 'Your skills section looks impressive! React, Tailwind, and more. Want tips on new tech?';
    } else if (lowerMsg.includes('contact')) {
      return 'Scroll to the contact section or check the navbar! You can also email directly.';
    } else {
      return 'Interesting! Tell me more or ask about the portfolio. 😊';
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      id: Date.now().toString(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Mock delay
    setTimeout(() => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: getMockResponse(userMessage.content),
        id: (Date.now() + 1).toString(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className={cn(
            'fixed bottom-8 right-8 z-[60] h-16 w-16 rounded-2xl shadow-2xl border-0',
            'glass backdrop-blur-xl bg-gradient-to-br from-primary/90 to-accent/90',
            'hover:scale-110 hover:shadow-3xl hover:shadow-primary/25 transition-all duration-300',
            'animate-pulse-glow hover:animate-none border-transparent',
            'md:bottom-10 md:right-10'
          )}
        >
          <Bot className="h-7 w-7" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className={cn(
          'w-screen max-w-none max-h-[90vh] max-w-sm md:max-w-md lg:max-w-lg',
          'glass backdrop-blur-2xl border-0 md:border shadow-3xl md:shadow-4xl md:rounded-3xl',
          'border-transparent bg-background/70 data-[state=open]:slide-in-from-right'
        )}
      >
        <SheetHeader className="border-b border-border/50 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/api/placeholder/80/80" />
              <AvatarFallback className="bg-primary/20 text-primary border-primary/30">
                <Bot className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <SheetTitle className="text-xl font-display font-bold gradient-text">AI Assistant</SheetTitle>
              <p className="text-sm text-muted-foreground">Ask about portfolio or anything!</p>
            </div>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100%-140px)] flex-1 mb-4 pr-4">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Start a conversation!</p>
              </div>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className={cn(
                'flex gap-3',
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              )}>
                <div className={cn(
                  'max-w-[80%] p-4 rounded-2xl shadow-lg',
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground ml-auto' 
                    : 'glass backdrop-blur-xl bg-background/80 border'
                )}>
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass backdrop-blur-xl px-4 py-3 rounded-2xl animate-pulse">
                  <div className="h-4 bg-muted/50 rounded w-48" />
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>
        </ScrollArea>

        <div className="flex gap-2 p-1 glass backdrop-blur-md rounded-2xl border border-border/50">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border-none bg-transparent ring-0 focus-visible:ring-0 p-3"
            disabled={isLoading}
          />
          <Button
            size="sm"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="h-12 aspect-square p-0 glass hover:glass hover:shadow-lg"
          >
            <Send className={cn('h-5 w-5', isLoading && 'animate-spin')} />
          </Button>
        </div>

        <SheetClose className="absolute right-2 top-2 z-50 md:hidden" />
      </SheetContent>
    </Sheet>
  );
};

export default Chatbot;

