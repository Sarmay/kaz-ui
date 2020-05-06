# kaz-ui

### 引入组件

```
npm install kaz-ui
```

1. 使用组件
   1. 在 main.js 中使用
      导入组件库
      ```
      import kazUI from 'kaz-ui'
      ```
   2. 导入 css
      ```
      import 'kaz-button/lib/kaz-ui.css'
      ```
   3. 注册组件库
      ```
      Vue.use(kazUI)
      ```
2. 在想使用的页面使用

```
<kaz-button type="info" plain round icon="el-icon-check">新按钮</kaz-button>
```
