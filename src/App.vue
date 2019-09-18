<template>
  <div id="app">
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    myFooter
  }
}
</script>
