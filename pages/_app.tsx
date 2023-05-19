<template>
  <div>
    <component :is="Component" v-bind="$props" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { AppProps } from '@nuxt/types';

export default defineComponent({
  name: 'App',
  components: {
    // Import your global CSS file here if needed
  },
  props: {
    Component: {
      type: Object,
      required: true,
    },
    pageProps: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Your component styles */
</style>
