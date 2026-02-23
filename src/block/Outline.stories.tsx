import preview from '../../.storybook/preview';
import { Outline } from './Outline';
import { Text } from './Text';

const meta = preview.meta({
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
});

export const Generic = meta.story({
  args: { variant: 'normal' },
});
export const Example = meta.story({
  args: { variant: 'example' },
});
