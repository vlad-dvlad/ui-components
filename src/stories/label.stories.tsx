import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '@/shared/ui/shadcn/label/label';

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email address',
  },
};

export const WithInput: Story = {
  args: {
    children: 'Email address',
  },
  render: args => (
    <div className='space-y-2'>
      <Label htmlFor='email' {...args} />
      <input
        id='email'
        type='email'
        placeholder='Enter your email'
        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      />
    </div>
  ),
};

export const WithCheckbox: Story = {
  args: {
    children: 'Accept terms and conditions',
  },
  render: args => (
    <div className='flex items-center space-x-2'>
      <input
        id='terms'
        type='checkbox'
        className='h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      />
      <Label htmlFor='terms' {...args} />
    </div>
  ),
};

export const WithRadio: Story = {
  args: {
    children: 'Option 1',
  },
  render: args => (
    <div className='flex items-center space-x-2'>
      <input
        id='option1'
        name='options'
        type='radio'
        className='h-4 w-4 border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      />
      <Label htmlFor='option1' {...args} />
    </div>
  ),
};

export const MultipleOptions: Story = {
  render: () => (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Select your preferences</h3>
      <div className='space-y-3'>
        <div className='flex items-center space-x-2'>
          <input
            id='newsletter'
            type='checkbox'
            className='h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
          <Label htmlFor='newsletter'>Subscribe to newsletter</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <input
            id='notifications'
            type='checkbox'
            className='h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
          <Label htmlFor='notifications'>Enable push notifications</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <input
            id='marketing'
            type='checkbox'
            className='h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
          <Label htmlFor='marketing'>Receive marketing emails</Label>
        </div>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className='space-y-4 w-full max-w-md'>
      <h3 className='text-lg font-semibold'>Contact Form</h3>
      <div className='space-y-3'>
        <div className='space-y-2'>
          <Label htmlFor='name'>Full Name</Label>
          <input
            id='name'
            type='text'
            placeholder='Enter your full name'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email Address</Label>
          <input
            id='email'
            type='email'
            placeholder='Enter your email'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='message'>Message</Label>
          <textarea
            id='message'
            placeholder='Enter your message'
            rows={4}
            className='flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
        <div className='flex items-center space-x-2'>
          <input
            id='agreement'
            type='checkbox'
            className='h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
          <Label htmlFor='agreement'>I agree to the terms and conditions</Label>
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled label',
  },
  render: args => (
    <div className='space-y-2'>
      <Label htmlFor='disabled-input' {...args} />
      <input
        id='disabled-input'
        type='text'
        disabled
        placeholder='This input is disabled'
        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      />
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    children: 'Custom styled label',
    className: 'text-lg font-bold text-primary',
  },
  render: args => (
    <div className='space-y-2'>
      <Label htmlFor='custom-input' {...args} />
      <input
        id='custom-input'
        type='text'
        placeholder='Custom styled input'
        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      />
    </div>
  ),
};
