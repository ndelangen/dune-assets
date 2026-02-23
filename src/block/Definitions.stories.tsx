import preview from '../../.storybook/preview';
import { Fragment } from 'react';
import { Definitions } from './Definitions';
import { Text } from './Text';

const meta = preview.meta({
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
});

export const Default = meta.story({
  args: {},
});
