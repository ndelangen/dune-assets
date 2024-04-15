import { Meta, StoryObj } from '@storybook/react';
import { Outline } from './Outline';
import { Text } from './Text';

const meta = {
  component: Outline,
  args: {
    variant: 'normal',
    children: (
      <Text>
        <h1>A title</h1>
        <p>A long long text</p>
      </Text>
    ),
  },
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Outline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Generic = {
  args: { variant: 'normal' },
} satisfies Story;
export const Example = {
  args: { variant: 'example' },
} satisfies Story;
