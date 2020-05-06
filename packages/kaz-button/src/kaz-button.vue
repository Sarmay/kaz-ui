<template>
  <button
    class="kaz-button"
    :disabled="disabled"
    :class="[
      `kaz-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled
      }
    ]"
    @click="handleClick"
  >
    <i :class="icon" v-if="icon"></i>
    <!-- 如果没有传入插槽的时候才显示 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'kazButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e) // 向父组件派发一个click事件，e表示携带的参数
    }
  }
}
</script>

<style lang="less" scoped>
.kaz-button {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  .mc-button [class*='mc-icon-'] + span {
    margin-left: 5px;
  }
}
</style>
