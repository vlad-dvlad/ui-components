import { RadioGroup, RadioGroupItem } from './shared/ui/shadcn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './shared/ui/shadcn';
import { Label } from './shared/ui/shadcn/label/label';

const App = () => {
  return (
    <div className='min-h-screen bg-background text-foreground p-8'>
      <div className='max-w-4xl mx-auto space-y-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          UI Components Demo
        </h1>

        {/* Default Theme */}
        <div className='space-y-4'>
          <h2 className='text-xl font-semibold'>Default Theme</h2>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>What is React?</AccordionTrigger>
              <AccordionContent>
                React is a JavaScript library for building user interfaces. It
                lets you create reusable UI components and manage the state of
                your application efficiently.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>What are React hooks?</AccordionTrigger>
              <AccordionContent>
                React hooks are functions that allow you to use state and other
                React features in functional components. They were introduced in
                React 16.8 and include useState, useEffect, useContext, and
                more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Multiple Accordion */}
        <div className='space-y-4'>
          <h2 className='text-xl font-semibold'>Multiple Accordion</h2>
          <Accordion type='multiple'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Getting Started</AccordionTrigger>
              <AccordionContent>
                <div className='space-y-2'>
                  <p>Follow these steps to get started:</p>
                  <ol className='list-decimal list-inside space-y-1'>
                    <li>Create an account</li>
                    <li>Verify your email</li>
                    <li>Complete your profile</li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent>
                <div className='space-y-2'>
                  <p>Our platform offers:</p>
                  <ul className='list-disc list-inside space-y-1'>
                    <li>Real-time collaboration</li>
                    <li>Advanced analytics</li>
                    <li>Custom integrations</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Theme Switcher */}
        <div className='space-y-4'>
          <h2 className='text-xl font-semibold'>Theme Switcher</h2>
          <div className='flex flex-wrap gap-2'>
            {[
              '',
              'gray-light',
              'gray-dark',
              'red-light',
              'red-dark',
              'rose-light',
              'rose-dark',
              'orange-light',
              'orange-dark',
              'green-light',
              'green-dark',
              'yellow-light',
              'yellow-dark',
              'violet-light',
              'violet-dark',
            ].map(theme => (
              <button
                key={theme}
                onClick={() => {
                  document.documentElement.className = theme;
                }}
                className='px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
              >
                {theme || 'Default'}
              </button>
            ))}
          </div>
        </div>
        <RadioGroup>
          <div className='flex items-center gap-2'>
            <RadioGroupItem
              value='option-1'
              id='option-1'
              className='text-primary'
            />
            <Label htmlFor='option-1'>Option 1</Label>
          </div>
          <div className='flex items-center gap-2'>
            <RadioGroupItem
              value='option-2'
              id='option-2'
              className='text-primary'
            />
            <Label htmlFor='option-2'>Option 2</Label>
          </div>
          <div className='flex items-center gap-2'>
            <RadioGroupItem
              value='option-3'
              id='option-3'
              className='text-primary'
            />
            <Label htmlFor='option-3'>Option 3</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default App;
