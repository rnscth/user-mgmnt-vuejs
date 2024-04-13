<template>
    <RouterLink :to="to" :class="computedClass" class="rounded-md px-3 py-2 text-sm font-medium">
      <slot></slot>
    </RouterLink>
  </template>
  
  <script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    computed: {
      computedClass() {
        return {
          'bg-gray-900 text-white': this.$route.name === this.to,
          'text-gray-300 hover:bg-gray-700 hover:text-white': this.$route.name !== this.to
        };
      }
    }
  };
  </script>
  