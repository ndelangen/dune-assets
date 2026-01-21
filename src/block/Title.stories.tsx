import { Fragment } from 'react';
import { Title } from './Title';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Title,
  args: {
    color: 'rgba(255,0,0)',
    size: 'large',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple = {
  args: {
    children: 'A short title',
  },
} satisfies Story;

export const Contrast = {
  args: {
    color: 'rgba(80,100,15)',
    children: 'A short title',
  },
} satisfies Story;

export const CustomColor = {
  args: {
    color: 'rgba(255,200,15)',
    children: 'A short title',
  },
} satisfies Story;

export const ContrastCheck = {
  args: {
    children: 'A short title',
  },
  render: ({ children }) => (
    <Fragment>
      <Title color={'#000000'}>{children}</Title>
      <Title color={'#ffffff'}>{children}</Title>
      <Title color={'rgba(100, 100, 100, 0.7)'}>{children}</Title>
      <Title color={'rgb(100, 100, 100)'}>{children}</Title>
      <Title color={'rgb(50, 200, 190)'}>{children}</Title>
      <Title color={'rgb(255, 0, 255)'}>{children}</Title>
    </Fragment>
  ),
} satisfies Story;

export const Sizes = {
  args: {
    children: 'A short title',
  },
  render: ({ children }) => (
    <Fragment>
      <Title color="#000000" size="large">
        {children}
      </Title>
      <hr />
      <Title color="#000000" size="medium">
        {children}
      </Title>
      <hr />
      <Title color="#000000" size="small">
        {children}
      </Title>
    </Fragment>
  ),
} satisfies Story;
