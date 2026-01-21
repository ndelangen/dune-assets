import { Fragment } from 'react';
import { Text } from './Text';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Text,
  args: {
    children: (
      <Fragment>
        <p>A long long text</p>
        <p>A long long text</p>
      </Fragment>
    ),
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Columns1 = {
  args: { columns: 1 },
} satisfies Story;

export const Columns2 = {
  args: { columns: 2 },
} satisfies Story;

export const RichContent = {
  args: {
    children: (
      <Fragment>
        <p>A short paragraph</p>
        <p>A second short paragraph</p>
        <ul>
          <li>A first list item</li>
          <li>A second list item</li>
        </ul>
        <p>An intermediate paragraph</p>
        <ol>
          <li>ordered list item</li>
          <li>ordered list item</li>
        </ol>
      </Fragment>
    ),
  },
} satisfies Story;

export const HeadingsContent = {
  args: {
    children: (
      <Fragment>
        <h1>A short paragraph</h1>
        <p>A second short paragraph</p>
        <h2>A short paragraph</h2>
        <p>A second short paragraph</p>
        <h3>A short paragraph</h3>
        <p>A second short paragraph</p>
      </Fragment>
    ),
  },
} satisfies Story;

export const Table = {
  args: {
    children: (
      <table>
        <thead>
          <tr>
            <th>a</th>
            <th>b</th>
            <th>c</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr>
            <td>21</td>
            <td>22</td>
            <td>22</td>
          </tr>
          <tr>
            <td>31</td>
            <td>32</td>
            <td>33</td>
          </tr>
        </tbody>
      </table>
    ),
  },
} satisfies Story;
