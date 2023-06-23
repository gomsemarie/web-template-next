import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputComponent, IInputComponentProps, InputType } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: InputComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Realization: Story = {
  args: {
    type: InputType.Text,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text: Story = (args: IInputComponentProps<string, undefined>) => (
  <Input />
);
Text.args = {};
Text.parameters = {
  docs: {
    source: {
      code: `<Input />`,
    },
  },
};

export const Number: Story = (
  args: IInputComponentProps<number, undefined>
) => <Input.Number />;
Number.args = {};
Number.parameters = {
  docs: {
    source: {
      code: `<Input.Number />`,
    },
  },
};

export const Email: Story = (args: IInputComponentProps<string, undefined>) => (
  <Input.Email />
);
Email.args = {};
Email.parameters = {
  docs: {
    source: {
      code: `<Input.Email />`,
    },
  },
};

export const Password: Story = (
  args: IInputComponentProps<string, undefined>
) => <Input.Password />;
Password.args = {};
Password.parameters = {
  docs: {
    source: {
      code: `<Input.Password />`,
    },
  },
};

export const Search: Story = (
  args: IInputComponentProps<string, undefined>
) => <Input.Search />;
Search.args = {};
Search.parameters = {
  docs: {
    source: {
      code: `<Input.Search />`,
    },
  },
};

export const Phone: Story = (args: IInputComponentProps<string, undefined>) => (
  <Input.Phone />
);
Phone.args = {};
Phone.parameters = {
  docs: {
    source: {
      code: `<Input.Phone />`,
    },
  },
};
