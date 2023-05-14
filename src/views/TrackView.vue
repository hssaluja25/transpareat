<template>
  <nav-bar></nav-bar>
  <component :is="componentName"></component>
  <!-- 
  - the entire journey of their food product
  - including the farm where it was produced
  - the processing facilities it went through
  - and the distribution channels it traveled through
  - The distribution channels it traveled through
  - The quality checks and inspections it underwent
  - The estimated delivery time and location
  - Also include Interactive Maps
  -->
</template>
<script>
import NavBar from '@/components/AppHeader.vue'
import SelectItem from '@/components/SelectItem.vue'
export default {
  name: 'TrackView',
  data() {
    return {
      componentName: SelectItem
    }
  },
  components: {
    SelectItem,
    NavBar
  }
}
</script>
