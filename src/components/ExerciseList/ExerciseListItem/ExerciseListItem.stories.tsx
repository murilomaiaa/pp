import type { Meta, StoryObj } from '@storybook/react';

import { ExerciseListItem } from './ExerciseListItem';
import { AppProvider } from '@/hooks/AppProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/ExerciseList/ExerciseListItem',
  component: ExerciseListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof ExerciseListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "Remada",
    sets: [
      {
        "numberOfSets": 3,
        "numberOfReps": 12,
        "weight": 8
      },
      {
        "numberOfSets": 2,
        "numberOfReps": 12,
        "weight": 10
      },
      {
        "numberOfSets": 1,
        "numberOfReps": 8,
        "weight": 12
      },
    ],
    restTimeInSeconds: 90
  },
};
