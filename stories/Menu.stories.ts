import type { Meta, StoryObj } from "@storybook/react";

import Menu from "../src/components/Menu";
const meta = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    menuValues: ["row1", "row2"],
  },
};
