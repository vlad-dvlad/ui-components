import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/shadcn';

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    children: (
      <>
        <AccordionItem value='item-1'>
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            React is a JavaScript library for building user interfaces. It lets
            you create reusable UI components and manage the state of your
            application efficiently.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>What are React hooks?</AccordionTrigger>
          <AccordionContent>
            React hooks are functions that allow you to use state and other
            React features in functional components. They were introduced in
            React 16.8 and include useState, useEffect, useContext, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>What is JSX?</AccordionTrigger>
          <AccordionContent>
            JSX is a syntax extension for JavaScript that allows you to write
            HTML-like code in your JavaScript files. It makes it easier to
            create and manage React components.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    children: (
      <>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>
            <div className='space-y-2'>
              <p>Follow these steps to get started with our platform:</p>
              <ol className='list-decimal list-inside space-y-1'>
                <li>Create an account</li>
                <li>Verify your email</li>
                <li>Complete your profile</li>
                <li>Start exploring features</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <div className='space-y-2'>
              <p>Our platform offers the following features:</p>
              <ul className='list-disc list-inside space-y-1'>
                <li>Real-time collaboration</li>
                <li>Advanced analytics</li>
                <li>Custom integrations</li>
                <li>24/7 support</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Pricing</AccordionTrigger>
          <AccordionContent>
            <div className='space-y-2'>
              <p>Choose the plan that works best for you:</p>
              <div className='grid grid-cols-1 gap-2'>
                <div className='p-2 border rounded'>
                  <strong>Free:</strong> Basic features, 1 user
                </div>
                <div className='p-2 border rounded'>
                  <strong>Pro:</strong> Advanced features, up to 10 users
                </div>
                <div className='p-2 border rounded'>
                  <strong>Enterprise:</strong> All features, unlimited users
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const SingleItem: Story = {
  args: {
    type: 'single',
    collapsible: true,
    children: (
      <AccordionItem value='item-1'>
        <AccordionTrigger>Click to expand</AccordionTrigger>
        <AccordionContent>
          <p>
            This is a single accordion item that can be collapsed and expanded.
            It&apos;s perfect for showing additional information or details that
            users can choose to view or hide.
          </p>
        </AccordionContent>
      </AccordionItem>
    ),
  },
};

export const NonCollapsible: Story = {
  args: {
    type: 'single',
    collapsible: false,
    children: (
      <>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Always open when selected</AccordionTrigger>
          <AccordionContent>
            <p>
              This accordion item cannot be collapsed once opened. It will
              remain open until another item is selected.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Another item</AccordionTrigger>
          <AccordionContent>
            <p>
              When you click this item, the previous one will close
              automatically since collapsible is set to false.
            </p>
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};
