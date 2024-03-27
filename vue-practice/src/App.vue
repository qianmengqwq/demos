<!-- <script setup lang="ts">
import { customRef } from 'vue'

/**
 * Implement the composable function
 * Make the function work fine
 */
function useLocalStorage(key: string, initialValue: any) {
  const value = customRef((track, trigger) => {
    return {
      get() {
        track()
        return localStorage.getItem(key) ?? initialValue
      },
      set(newVal) {
        trigger()
        localStorage.setItem(key, newVal)
      },
    }
  })
  return value
}

const counter = useLocalStorage('counter', 0)

// We can get localStorage via triggered the getter:
console.log(counter.value)

// And We also can set localStorage via triggered the setter:
const update = () => counter.value++
</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="update">Update</button>
</template> -->
<!-- <script setup lang="ts">
import { ref } from 'vue'

const state = ref(false)

/**
 * Implement the custom directive
 * Make sure the input element focuses/blurs when the 'state' is toggled
 *
 */

const VFocus = {
  updated(el, binding) {
    console.log(el)
    console.log('binding', binding)
    if (binding.value) {
      el.focus()
    } else {
      el.blur()
    }
  },
}

setInterval(() => {
  state.value = !state.value
}, 2000)
</script>

<template>
  <input v-focus="state" type="text" />
</template> -->
<!-- <script setup lang="ts">
/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持防抖延迟时间选项, 用法如 `v-debounce-click:ms`
 *
 */

function debonce(fn, delay) {
  let timer = null
  function _debonced(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, delay)
  }
  return _debonced
}

const VDebounceClick = {
  mounted(el, binding) {
    const delay = binding.arg
    const fn = binding.value
    const throttledFn = debonce(fn, delay)
    el.addEventListener('click', throttledFn)
  },
}

function onClick() {
  console.log('Only triggered once when clicked many times quicky')
}
</script>

<template>
  <button v-debounce-click:200="onClick">Click on it many times quickly</button>
</template> -->
<!-- <script setup lang="ts">
import { h, ref } from 'vue'

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
 */
const ListComponent = (props, { emit }) => {
  console.log('props', props)
  return h('ul', {}, [
    props.list.map((item, index) => {
      return h(
        'li',
        {
          onClick: () => {
            emit('toggle', index)
          },
          style: { color: props['active-index'] === index ? 'red' : 'black' },
        },
        [item.name]
      )
    }),
  ])
}

const list = [
  {
    name: 'John',
  },
  {
    name: 'Doe',
  },
  {
    name: 'Smith',
  },
]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template> -->

<!-- <script setup lang="ts">
import { reactive, isReactive ,toRaw} from 'vue'

const state = { count: 1 }
const reactiveState = reactive(state)

/**
 * 修改以下代码使输出为true
 */

console.log(toRaw(reactiveState) === state)

/**
 * 修改以下代码使输出为false
 */
const info = { count: 1 }
const reactiveInfo = reactive(info)

console.log(isReactive(toRaw(reactiveInfo)))
</script>

<template>
  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template> -->
<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from 'vue'
const scope = effectScope()
const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// 使用 `effectScope` API 使这些Effect效果在触发一次后停止
scope.run(() => {
  watch(doubled, () => {
    console.log(doubled.value)
    scope.stop()
  })
  watchEffect(() => {
    console.log('Count: ', doubled.value)
    scope.stop()
  })
})

counter.value = 2

setTimeout(() => {
  counter.value = 4
})
</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
