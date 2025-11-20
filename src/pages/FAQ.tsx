import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is this site?',
    answer: 'This is an imageboard where you can post anonymously and discuss various topics.',
  },
  {
    question: 'How do I post?',
    answer: 'Fill in the form with your name (optional, defaults to "Anonymous"), comment, and optionally attach an image. Click "Post" to submit.',
  },
  {
    question: 'How do I reply to a post?',
    answer: 'Click the "Reply" button on any post to quote it in your response.',
  },
  {
    question: 'What file types can I upload?',
    answer: 'You can upload common image formats (JPG, PNG, GIF). Maximum file size is 4MB.',
  },
  {
    question: 'How long do threads stay up?',
    answer: 'Threads are archived after falling off the board. Archived threads can be viewed in the Archive section.',
  },
  {
    question: 'What are the rules?',
    answer: 'Be respectful, no illegal content, no spam. Board-specific rules may apply. Check the Moderation page for details.',
  },
];

export default function FAQ() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-2 border-b-2 border-border">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-primary-foreground hover:bg-primary/80"
            >
              <Icon name="ArrowLeft" size={16} className="mr-1" />
              Back
            </Button>
            <h1 className="text-xl font-bold">FAQ</h1>
          </div>
          <nav className="flex gap-4 text-sm">
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate('/')}
              className="text-primary-foreground"
            >
              Home
            </Button>
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate('/archive')}
              className="text-primary-foreground"
            >
              Archive
            </Button>
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate('/moderation')}
              className="text-primary-foreground"
            >
              Moderation
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl p-4">
        <Card className="border-2 border-border bg-muted p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-sm text-muted-foreground">
            Find answers to common questions about using this imageboard.
          </p>
        </Card>

        <Card className="border border-border bg-card p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </main>

      <footer className="bg-muted border-t-2 border-border p-4 text-center text-xs text-muted-foreground mt-8">
        <p>Still have questions? Contact the moderation team.</p>
      </footer>
    </div>
  );
}
