import { action } from '@storybook/addon-actions'
import CommandButton from '../../components/buttons/commandbutton.vue'

export default {
  title: 'CommandButton',
  component: CommandButton,
  argTypes: {
    name: { control: 'text' },
    className: {
      control: { type: 'select', options: ['primary', 'secondary', 'positive', 'negative']}
    },
    isLoading: { control: 'boolean' },
    useDiv: { control: 'boolean'}
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CommandButton },
  template: `<CommandButton :name="name" :className="className" :useDiv="useDiv" :isLoading="isLoading" @click="action" />`,
  methods: {
    action: action('button-clicked')
  }
});

export const Normal = Template.bind({});
Normal.args = {
  name: 'Label',
  className: 'primary',
  useDiv: false,
  isLoading: false,
};
