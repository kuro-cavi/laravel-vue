<template>
  <div class="welcome">
    <div>Welcome</div>
    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    const message: string = "Hello World"

    return {
      message
    }
  }
})
</script>

<style lang="scss" scoped>
.welcome {
}
</style>
