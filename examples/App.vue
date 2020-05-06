<template>
  <div id="app">
    <kaz-button type="info" plain round icon="el-icon-check" @click="handel"
      >新按钮</kaz-button
    >
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handel () {
      console.log('牛')
    }
  }
}
</script>

<style lang="scss"></style>
