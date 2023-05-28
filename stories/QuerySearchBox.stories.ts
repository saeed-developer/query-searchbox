import type { Meta, StoryObj } from "@storybook/react";
import QuerySearchBox from "../src/components/index";
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
    operators: ["and", "or"],
    filters: ["severity", "site"],
    filterTypes: ["contains", "equals"],
    onClick: (e) => {
      console.log("button click ===>", e);
    },
    onStepChange: (e) => {
      console.log("step ===>", e);
    },
    filterValues: ["value1", "value2"],
    onCurrentChange: (e) => {
      console.log("currentValue ===>", e);
    },
    onInputChange(value) {
      console.log("inputValue ===>", value);
    },
  },
};
