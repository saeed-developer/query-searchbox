import type { Meta, StoryObj } from "@storybook/react";
import QuerySearchBox from "./QuerySearchBox";
const meta = {
  title: "Pages/main",
  component: QuerySearchBox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof QuerySearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
    label: "QuerySearchBox",
  },
};
