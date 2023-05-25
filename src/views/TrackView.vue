<template>
  <nav-bar></nav-bar>
  <component
    :is="componentName"
    @item-selected="updateTrackingId"
    :trackingId="trackingId"
  ></component>
  <app-footer></app-footer>
</template>

<script>
import NavBar from '@/components/AppHeader.vue'
import SelectItem from '@/components/SelectItem.vue'
import TrackingInfo from '../components/TrackingInfo.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'TrackView',
  data() {
    return {
      trackingId: null
    }
  },
  computed: {
    componentName() {
      if (this.trackingId == null) {
        return SelectItem
      } else {
        return TrackingInfo
      }
    }
  },
  components: {
    SelectItem,
    NavBar,
    AppFooter
  },
  methods: {
    updateTrackingId(trackingId) {
      this.trackingId = trackingId
    }
  }
}
</script>
