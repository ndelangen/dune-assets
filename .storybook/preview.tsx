export const parameters = {
  layout: 'centered',
};

export const globals = {
  backgrounds: {
    value: '#333333',
    grid: true,
  },
};

export const globalTypes = {
  disc: {
    name: 'Disc',
    description: 'Show as a disc',
    defaultValue: false,
    toolbar: {
      icon: 'circlehollow',
      title: 'Disc',
      items: [
        { value: false, icon: 'stopalt', title: 'Normal' },
        { value: true, icon: 'circle', title: 'Make circle' },
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
