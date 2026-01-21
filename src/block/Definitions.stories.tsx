import { Fragment } from 'react';
import { Definitions } from './Definitions';
import { Text } from './Text';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Definitions,
  args: {
    children: (
      <Fragment>
        <dt>Beast of Bodmin</dt>
        <dd>A large feline inhabiting Bodmin Moor.</dd>

        <dt>Morgawr</dt>
        <dd>A sea serpent.</dd>

        <dt>Owlman</dt>
        <dd>
          <p>A giant owl-like creature.</p>
          <p>A giant owl-like creature.</p>
          <p>A giant owl-like creature.</p>
        </dd>
      </Fragment>
    ),
  },
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (StoryFn) => (
      <Text>
        <StoryFn />
      </Text>
    ),
  ],
} satisfies Meta<typeof Definitions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
