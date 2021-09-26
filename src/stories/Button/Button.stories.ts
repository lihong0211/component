import MyButton from '../../../packages/Button/Button'

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'mini'] } },
    type: { control: { type: 'select', options: ['success', 'warning', 'danger', 'info', 'text'] } },
    loading: true,
    disabled: true,
    autofocus: true,
    round: true,
    circle: true
  }
}

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'success',
  size: 'small'
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'warning',
  size: 'mini'
}

export const Large = Template.bind({})
Large.args = {
  size: 'medium',
  type: 'info'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  type: 'danger'
}
