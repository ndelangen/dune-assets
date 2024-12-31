export const parameters = {
  layout: 'centered',
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
