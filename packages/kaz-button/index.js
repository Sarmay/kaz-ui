// 导入组件，组件必须声明 name
import kazButton from './src/kaz-button.vue'

// 为组件提供 install 安装方法，供按需引入
kazButton.install = function (Vue) {
  Vue.component(kazButton.name, kazButton)
}

// 默认导出组件
export default kazButton
