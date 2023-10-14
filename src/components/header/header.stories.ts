import { Story, Meta } from '@storybook/angular';

import { HeaderComponent } from './header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
} as Meta;

const Template: Story<HeaderComponent> = (args) => ({
  component: HeaderComponent,
  props: args,
});

export const LightHeader = Template.bind({});
LightHeader.args = {
  slogan: 'Light Header',
  theme: 'light',
};

export const DarkHeader = Template.bind({});
DarkHeader.args = {
  slogan: 'Dark Header',
  theme: 'dark',
};
