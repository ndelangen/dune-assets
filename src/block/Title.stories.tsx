import preview from '../../.storybook/preview';
import { Fragment } from 'react';
import { Title } from './Title';

const meta = preview.meta({
  component: Title,
  args: {
    color: 'rgba(255,0,0)',
    size: 'large',
  },
});

export const Simple = meta.story({
  args: {
    children: 'A short title',
  },
});

export const Contrast = meta.story({
  args: {
    color: 'rgba(80,100,15)',
    children: 'A short title',
  },
});

export const CustomColor = meta.story({
  args: {
    color: 'rgba(255,200,15)',
    children: 'A short title',
  },
});

export const ContrastCheck = meta.story({
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
});

export const Sizes = meta.story({
  args: {
    children: 'A short title',
  },
  render: ({ children }) => (
    <Fragment>
      <Title color='#000000' size='large'>
        {children}
      </Title>
      <hr />
      <Title color='#000000' size='medium'>
        {children}
      </Title>
      <hr />
      <Title color='#000000' size='small'>
        {children}
      </Title>
    </Fragment>
  ),
});
