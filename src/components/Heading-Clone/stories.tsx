import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, headingMeProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

export const Template: Story<headingMeProps> = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};
