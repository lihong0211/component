import MyHeader from '../../../packages/Header/Header'
console.log(MyHeader)

export default {
  title: 'Example/Header',
  component: MyHeader
}

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { MyHeader },
  template:
    '<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />'
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {}
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
