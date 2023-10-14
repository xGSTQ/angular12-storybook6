import {Story, Meta, moduleMetadata} from '@storybook/angular';
import { HeaderComponent } from './header.component';
import {ThemeToggleModule} from "../theme-toggle/theme-toggle.module";

export default {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata( {
      imports: [
        ThemeToggleModule
      ]
    })
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args) => ({
  component: HeaderComponent,
  props: args,
});

export const LightHeader = Template.bind({});
LightHeader.args = {
  slogan: 'Light Header',
};

export const DarkHeader = Template.bind({});
DarkHeader.args = {
  slogan: 'Dark Header',
};
