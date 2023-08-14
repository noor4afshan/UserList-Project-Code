<template>
  <div>
    <navigation/>
    <router-view />
  </div>
</template>

<script>
import navigation from './components/Navigation.vue'
export default {
  components: {navigation}
}
</script>

<style lang="scss" scoped></style>