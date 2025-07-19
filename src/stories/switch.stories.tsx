import { Label } from "@/shared/ui/shadcn/label/label";
import { Switch } from "@/shared/ui/shadcn/switch/switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: 'UI/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: { type: 'boolean' },
        },
        value: {
            control: { type: 'text' },
        },
        onCheckedChange: {
            action: 'checked changed',
        },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: false,
    },
    render: args => (
        <div className="flex items-center gap-2">
            <Switch {...args} />
            <Label htmlFor="switch">Switch</Label>
        </div>
    )
}

export const Checked: Story = {
    args: {
        checked: true,
    },
    render: args => (
        <div className="flex items-center gap-2">
            <Switch {...args} />
            <Label htmlFor="switch">Switch</Label>
        </div>
    )
}

export const Disabled: Story = {
    args: {
        disabled: true
    },
    render: args => (
        <div className="flex items-center gap-2">
            <Switch {...args} />
            <Label htmlFor="switch">Switch</Label>
        </div>
    )
}

export const DisabledChecked: Story = {
    args: {
        checked: true,
        disabled: true
    },
    render: args => (
        <div className="flex items-center gap-2">
            <Switch {...args} />
            <Label htmlFor="switch">Switch</Label>
        </div>
    )
}

export const MultipleSwitches: Story = {
    render: () => (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Settings</h3>
            <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                    <Label>Wi-Fi</Label>
                    <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <Label>Bluetooth</Label>
                    <Switch />
                </div>
                <div className="flex items-center justify-between">
                    <Label>Mobile data</Label>
                    <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <Label>Airplane mode</Label>
                    <Switch />
                </div>
                <div className="flex items-center justify-between">
                    <Label>Do not disturb</Label>
                    <Switch />
                </div>
            </div>
        </div>
    )
}

export const CustomStyling: Story = {
    render: () => (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Custom Styled Switches</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                    <Label className="font-medium">Premium features</Label>
                    <Switch className="data-[state=checked]:bg-green-600" />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg bg-accent/50">
                    <Label className="font-medium">Beta features</Label>
                    <Switch className="data-[state=checked]:bg-blue-600" />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                    <Label className="font-medium">Experimental mode</Label>
                    <Switch className="data-[state=checked]:bg-orange-600" />
                </div>
            </div>
        </div>
    )
}