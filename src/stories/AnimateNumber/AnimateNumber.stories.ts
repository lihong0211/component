import { Templates } from '@/interface'
import AnimateNumber from '../../../packages/AnimateNumber/index.vue'

import thousandImg from '../../assets/AnimateNumber/thousand.jpeg'
import bgNum from '../../assets/AnimateNumber/bg-nums.png'
import num0 from '../../assets/AnimateNumber/0.png'
import num1 from '../../assets/AnimateNumber/1.png'
import num2 from '../../assets/AnimateNumber/2.png'
import num3 from '../../assets/AnimateNumber/3.png'
import num4 from '../../assets/AnimateNumber/4.png'
import num5 from '../../assets/AnimateNumber/5.png'
import num6 from '../../assets/AnimateNumber/6.png'
import num7 from '../../assets/AnimateNumber/7.png'
import num8 from '../../assets/AnimateNumber/8.png'
import num9 from '../../assets/AnimateNumber/9.png'

const numImg = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9]

export default {
  title: 'Components/动态数字',
  component: AnimateNumber
}

const Template: Templates = (args: object, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { AnimateNumber },
  template: '<AnimateNumber v-bind="$props" />'
})

export const 动态数字: Templates = Template.bind({})
动态数字.args = {
  val: 12516,
  digits: 9,
  numImg,
  thousandImg,
  bgNum,
  type: 'pc',
  mockData: true
}
