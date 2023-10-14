import { moduleMetadata } from '@storybook/angular';
import { ThemeToggleComponent } from './theme-toggle.component';

export default {
  title: 'Theme Toggle',
  decorators: [
    moduleMetadata({
      declarations: [ThemeToggleComponent],
    }),
  ],
};

export const Default = () => ({
  component: ThemeToggleComponent,
});
