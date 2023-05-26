import type { Meta, StoryObj } from "@storybook/react";
import Button from "../src/components/Button";
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    buttonbackgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    buttonTitle: "Search",
  },
};
