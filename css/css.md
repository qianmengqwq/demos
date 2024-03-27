## flex

### flex 简写

分别是 flex-grow flex-shrink flex-basis

### 单值

flex:1 => flex-grow、flex-shrink 都为 1。即 flex:1 1 0

flex:30px => flex-basis

### 多值

按照顺序来，纯数值则为比例，带单位则为 flex-basis

## aspect-ratio

为盒子规定了首选纵横比（width/height）

## 避免样式冲突

1. BEM Block Element Modifier
2. CSS Scoped
   对当前组件下所有元素生成唯一的属性或类名。vue：加一个当前组件的 data 属性选择器
3. CSS Module
   对类名 hash 化。（加入了局部作用域和模块依赖）需要构建工具如 css-loader

## css 变量实现暗黑模式

```css
@media (prefers-color-scheme: dark) {
  :root {
  }
}

html[theme='dark-model'] {
  /* invert 将所有色值反转，hue-rotate 将黑白以外的其它主色调再反转回来 */
  filter: invert(1) hue-rotate(180); /*用filter的一些配置来让色相好一些 */
  transition: color 300ms, background-color 300ms; /*过渡动画*/
}
```

## bfc

Block Formatting Context
https://segmentfault.com/a/1190000013647777

## 粘性定位原理

https://segmentfault.com/a/1190000043860910