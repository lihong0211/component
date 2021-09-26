
<template lang="pug">
div.animate-number(:class="type")
  .item(
    v-for="item in clock"
    :style="itemBg"
  )
    .nums(v-if="!item.isThousand" :style="itemStyle(item)")
      .num(v-for="it in numImg" )
        img(:src="it")
    img.thousand(v-if="item.isThousand && showThousandImg" :src="thousandImg")
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Number extends Vue {
  /**
   * 模式
   */
  @Prop({
    type: String,
    default: 'h5'
  }) type

  /**
   * 当前数值
   */
  @Prop({
    type: Number,
    default: 0
  }) val

  /**
   * 数字总位数
   */
  @Prop({
    type: Number,
    default: 9
  }) digits

  /**
   * 数字图片数组
   */
  @Prop({
    type: Array,
    default () {
      return []
    }
  }) numImg

  /**
   * 是否展示千分位分隔图片
   */
  @Prop({
    type: Boolean,
    default: false
  }) showThousandImg

  /**
   * 千分位分隔图片
   */
  @Prop({
    type: String,
    default: ''
  }) thousandImg

  /**
   * 数字背景图
   */
  @Prop({
    type: String,
    default: ''
  }) bgNum

  /**
   * 是否使用mock数据
   */
  @Prop({
    type: Boolean,
    default: false
  }) mockData

  clock: any = []

  updateClock () {
    this.clock = []
    const arr = String(this.val).split('')
    for (let i = 0; i < this.digits - 1; i++) {
      this.clock.unshift({ val: arr.pop() || 0 })
      if (!((i + 1) % 3)) {
        this.showThousandImg && this.clock.unshift({ isThousand: true })
      }
    }
  }

  mounted () {
    for (let i = 0; i < this.digits - 1; i++) {
      this.clock.unshift({ val: 0 })
      if (!((i + 1) % 3)) {
        this.showThousandImg && this.clock.unshift({ isThousand: true })
      }
    }

    if (this.mockData) {
      this.val = Math.floor(Math.random() * 100000)
      setInterval(() => {
        this.val += Math.floor(Math.random() * 1000)
      }, 1000)
    }
  }

  @Watch('val')
  valChange () {
    this.updateClock()
  }

  itemStyle (item: any) {
    return item.isThousand ? '' : `
    transform: translateY(-${item.val}0%);
    `
  }

  get itemBg () {
    return `background: url('${this.bgNum}') center/cover no-repeat;`
  }
}
</script>
<style scoped lang="stylus">
.animate-number.h5
  display inline-block
  display flex
  align-items center
  justify-content center
  width 275px
  height 40px
  .item
    max-width 30px
    height 40px
    overflow hidden
    margin 0 1.5px
    .nums
      width 30px
      height auto
      transition: transform 0.5s ease-in-out;
      box-sizing border-box
      padding-top 2px
      .num
        width 100%
        height 40px
        display block
        margin 0 auto
        display flex
        align-items center
        justify-content center
        img
          width 75%
          height auto
    .thousand
      width 10px
      height 10px
      margin 0 2px
.animate-number.pc
  display inline-block
  display flex
  align-items center
  justify-content center
  width 550px
  height 80px
  .item
    max-width 60px
    height 80px
    overflow hidden
    margin 0 3px
    .nums
      width 60px
      height auto
      transition: transform 0.5s ease-in-out;
      box-sizing border-box
      padding-top 4px
      .num
        width 100%
        height 80px
        display block
        margin 0 auto
        display flex
        align-items center
        justify-content center
        img
          width 75%
          height auto
    .thousand
      width 10px
      height 10px
      margin 0 2px
</style>
