import React from 'react';

import { card, disc, page, shield } from '../src/data/sizes';

export const parameters = {
  layout: 'centered',
  viewport: {
    options: {
      page: {
        name: 'Page',
        styles: {
          width: page.width + 'px',
          height: page.height + 'px',
        },
      },
      card: {
        name: 'Card',
        styles: {
          width: card.width + 'px',
          height: card.height + 'px',
        },
      },
      shield: {
        name: 'Shield',
        styles: {
          width: shield.width + 'px',
          height: shield.height + 'px',
        },
      },
      disc: {
        name: 'Disc',
        styles: {
          width: disc.width + 'px',
          height: disc.height + 'px',
        },
      },
    },
  },
};

export const globalTypes = {
  disc: {
    name: 'Shape',
    description: 'Show as a disc',
    defaultValue: false,
    toolbar: {
      icon: 'circlehollow',
      title: 'Shape',
      items: [
        { value: false, icon: 'stopalt', title: 'Normal' },
        { value: true, icon: 'circle', title: 'Circle' },
      ],
    },
  },
};

export const decorators = [
  (Story, { globals }) => {
    const { disc } = globals;
    return disc ? (
      <div style={{ overflow: 'hidden', borderRadius: '50%' }}>
        <Story />
      </div>
    ) : (
      <Story />
    );
  },
];

export const initialGlobals = {
  backgrounds: {
    value: '#333333',
    grid: true,
  },
};
