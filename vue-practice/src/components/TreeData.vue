<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
const props = defineProps<{data: TreeData[]}>()
</script>

<template>
  <ul>
    <li v-for="item in props.data" :key="item.key">
      {{ item.title }}
      <template v-if="item.children">
        <TreeData :data="item.children" />
      </template>
    </li>
  </ul>
</template>