import type { Meta, StoryObj } from "@storybook/react";
import SearchBox from "./SearchBox";

const meta = {
  title: "components/SearchBox",
  component: SearchBox,
  tags: ["docsPage"],
  argTypes: {
    placeHolder: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof SearchBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    // placeHolder: "search box placeholder",
  },
};
