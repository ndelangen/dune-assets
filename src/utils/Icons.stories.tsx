import type { Meta, StoryObj } from '@storybook/react-vite';

import { GENERIC, ICON, TROOP, LOGO, DECAL } from '../data/generated';

const types = {
  icon: Object.keys(ICON.Values),
  troop: Object.keys(TROOP.Values),
  generic: Object.keys(GENERIC.Values),
  logo: Object.keys(LOGO.Values),
  decal: Object.keys(DECAL.Values),
};

const ListIcons = ({ pattern, type }: { pattern: string; type: keyof typeof types }) => {
  const all = types[type];
  const list = pattern === '*' ? all : all.filter((key) => key.includes(pattern));
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {list.map((item) => (
        <div
          style={{
            padding: '10px',
            border: '1px solid white',
            borderRadius: '5px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            color: 'white',
          }}
        >
          <img src={'/' + item} style={{ width: '100%', maxHeight: '200px', flex: '1' }} />
          <div style={{ textAlign: 'center' }}>/{item}</div>
        </div>
      ))}
    </div>
  );
};

const meta = {
  component: ListIcons,
  tags: ['no-screenshot'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ListIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  args: {
    pattern: '*',
    type: 'icon',
  },
};

export const Troops: Story = {
  args: {
    pattern: '*',
    type: 'troop',
  },
};

export const Generics: Story = {
  args: {
    pattern: '*',
    type: 'generic',
  },
};

export const Logos: Story = {
  args: {
    pattern: '*',
    type: 'logo',
  },
};

export const Decals: Story = {
  args: {
    pattern: '*',
    type: 'decal',
  },
};
