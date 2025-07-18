import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/shared/ui/shadcn/radio-group/radio-group';
import { Label } from '@/shared/ui/shadcn/label/label';

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    onValueChange: {
      action: 'value changed',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'option-1',
  },
  render: args => (
    <RadioGroup {...args}>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-1' id='option-1' />
        <Label htmlFor='option-1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-2' id='option-2' />
        <Label htmlFor='option-2'>Option 2</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-3' id='option-3' />
        <Label htmlFor='option-3'>Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  args: {
    defaultValue: 'card',
  },
  render: args => (
    <RadioGroup {...args}>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='card' id='card' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='card'>Credit Card</Label>
          <p className='text-sm text-muted-foreground'>
            Pay with your credit card
          </p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='paypal' id='paypal' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='paypal'>PayPal</Label>
          <p className='text-sm text-muted-foreground'>
            Pay with your PayPal account
          </p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='apple' id='apple' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='apple'>Apple Pay</Label>
          <p className='text-sm text-muted-foreground'>
            Pay with your Apple device
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const ThemeSelection: Story = {
  args: {
    defaultValue: 'light',
  },
  render: args => (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Choose your theme</h3>
      <RadioGroup {...args}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='light' id='light' />
          <Label htmlFor='light'>Light Theme</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='dark' id='dark' />
          <Label htmlFor='dark'>Dark Theme</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='system' id='system' />
          <Label htmlFor='system'>System Default</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const NotificationPreferences: Story = {
  args: {
    defaultValue: 'all',
  },
  render: args => (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Notification Preferences</h3>
      <RadioGroup {...args}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='all' id='all' />
          <div className='grid gap-1.5 leading-none'>
            <Label htmlFor='all'>All notifications</Label>
            <p className='text-sm text-muted-foreground'>
              Receive all notifications including marketing
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='important' id='important' />
          <div className='grid gap-1.5 leading-none'>
            <Label htmlFor='important'>Important only</Label>
            <p className='text-sm text-muted-foreground'>
              Only receive important notifications
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='none' id='none' />
          <div className='grid gap-1.5 leading-none'>
            <Label htmlFor='none'>No notifications</Label>
            <p className='text-sm text-muted-foreground'>
              Don&apos;t receive any notifications
            </p>
          </div>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const SizeSelection: Story = {
  args: {
    defaultValue: 'medium',
  },
  render: args => (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Select Size</h3>
      <RadioGroup {...args}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='small' id='small' />
          <Label htmlFor='small'>Small</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='medium' id='medium' />
          <Label htmlFor='medium'>Medium</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='large' id='large' />
          <Label htmlFor='large'>Large</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='xlarge' id='xlarge' />
          <Label htmlFor='xlarge'>Extra Large</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 'option-1',
    disabled: true,
  },
  render: args => (
    <RadioGroup {...args}>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-1' id='disabled-1' />
        <Label htmlFor='disabled-1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-2' id='disabled-2' />
        <Label htmlFor='disabled-2'>Option 2</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-3' id='disabled-3' />
        <Label htmlFor='disabled-3'>Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const CustomStyling: Story = {
  args: {
    defaultValue: 'option-1',
    className: 'grid grid-cols-2 gap-4',
  },
  render: args => (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Custom Layout</h3>
      <RadioGroup {...args}>
        <div className='flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent'>
          <RadioGroupItem value='option-1' id='custom-1' />
          <Label htmlFor='custom-1' className='font-medium'>
            Option 1
          </Label>
        </div>
        <div className='flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent'>
          <RadioGroupItem value='option-2' id='custom-2' />
          <Label htmlFor='custom-2' className='font-medium'>
            Option 2
          </Label>
        </div>
        <div className='flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent'>
          <RadioGroupItem value='option-3' id='custom-3' />
          <Label htmlFor='custom-3' className='font-medium'>
            Option 3
          </Label>
        </div>
        <div className='flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent'>
          <RadioGroupItem value='option-4' id='custom-4' />
          <Label htmlFor='custom-4' className='font-medium'>
            Option 4
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const FormIntegration: Story = {
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      alert(JSON.stringify(Object.fromEntries(formData)));
    };

    return (
      <form onSubmit={handleSubmit} className='space-y-6 w-full max-w-md'>
        <h3 className='text-lg font-semibold'>User Preferences</h3>

        <div className='space-y-4'>
          <div>
            <Label className='text-base font-medium'>Gender</Label>
            <RadioGroup
              name='gender'
              defaultValue='prefer-not-to-say'
              className='mt-2'
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='male' id='male' />
                <Label htmlFor='male'>Male</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='female' id='female' />
                <Label htmlFor='female'>Female</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='other' id='other' />
                <Label htmlFor='other'>Other</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='prefer-not-to-say'
                  id='prefer-not-to-say'
                />
                <Label htmlFor='prefer-not-to-say'>Prefer not to say</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className='text-base font-medium'>Experience Level</Label>
            <RadioGroup
              name='experience'
              defaultValue='intermediate'
              className='mt-2'
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='beginner' id='beginner' />
                <Label htmlFor='beginner'>Beginner</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='intermediate' id='intermediate' />
                <Label htmlFor='intermediate'>Intermediate</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='advanced' id='advanced' />
                <Label htmlFor='advanced'>Advanced</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <button
          type='submit'
          className='w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors'
        >
          Save Preferences
        </button>
      </form>
    );
  },
};
