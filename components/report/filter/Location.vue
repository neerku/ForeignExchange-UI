<template lang="pug">
  .location-filter
    ui-scroll-panel
      .search.sm(slot="header")
        .input
          input-text(placeholder="Search locations")
          i.nu.nu-search
      .select-all(slot="footer")
        small
          strong Select
        .actions
          a(@click="selectAll()")
            small All
          a(@click="deSelectAll()")
            small None
      .list
        .region(v-for=" region in facilityCategories" :key="region.org" :value="region.org")
          h4.name {{ region }}

          .location(v-for="location in locationList" v-if="region == location.org.orgName" :key="location.facilityName" :value="location.facilityName")
            .name-address
              p {{ location.facilityName }}
              small {{ location.address.address1 }} 
            .check
              checkbox(v-model='location.selected' :binary='true' @change='changeLocations()')
</template>

<script>
import m from 'moment'
import _ from 'lodash'
import { mapActions, mapGetters} from 'vuex'
import { piedmont } from '~/data/locations'


export default {
    props: {
    selectionList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      minDate: m().startOf('month').startOf('day').format('YYYY-MM-DDTHH:mm:ss.sssZ'),
      maxDate: m().add(1, 'day').endOf('day').format('YYYY-MM-DDTHH:mm:ss.sssZ'),
      regions: piedmont,
      selected: [],
      toggle: true,
      locationList: []
    }
  },
  computed: {
    ...mapGetters(['locations', 'loggedInUserLocations', 'selectedLocationList']),
    facilityCategories () {
    return _.uniq(this.loggedInUserLocations.map(({ org }) => org.orgName))
    }
  },
  watch: {
     selectionList() {
       this.$store.dispatch('setLocationForReports',this.selectionList)
     },
     loggedInUserLocations() {
     this.locationList = JSON.parse(JSON.stringify(this.loggedInUserLocations))
     this.locationList.forEach(element => {
       element.selected = true;
     });
     this.changeLocations()
     },
  },
  methods: {
    ...mapActions(['setLocationForReports']),
    updateLocation(payload){
      this.$store.dispatch('setLocationForReports', payload)
    },
    selectAll() {
      const selectAllLocations = [];
      this.locationList.forEach(element => {
       element.selected = true;
       selectAllLocations.push(element.facilityName)
     });
     this.$store.dispatch('setLocationForReports',selectAllLocations)
     this.$forceUpdate()
    },
    deSelectAll() {
      const deSelectedLocations = [];
      this.locationList.forEach(element => {
       element.selected = false
     });
     this.$store.dispatch('setLocationForReports',deSelectedLocations)
     this.$forceUpdate()
    },
    changeLocations() {
      const locationsSelected = [];
      this.locationList.forEach(element => {
       if(element.selected){
       locationsSelected.push(element.facilityName)
       }
     });
     this.$store.dispatch('setLocationForReports',locationsSelected)
     this.$forceUpdate()
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.location-filter
  height: 100%
  overflow: hidden
  +border-right
  border-right-color: $neutral-04
  &.dark
    color: $white
  i.nu
    +absolute-w
    padding: 0.5rem

.search
  padding: $s50
  background-color: $neutral-02
  .input
    position: relative
    i.nu
      +absolute-e
      padding: 0.5rem 1rem

.select-all
  padding: $s
  +flex-fill
  .actions
    a
      display: inline-block
      margin-left: $s50
      color: $primary

.region
  margin: 0 $s50 $s
  padding: $s2 $s
  background-color: $white
  .name
    +flex-fill
    margin-bottom: $s
    color: $accent
  .location
    margin: $s50 0
    padding: $s50 0
    +flex-fill
    +border-bottom
    align-items: flex-start
    &:last-child
      border-bottom: none
    .name-address
      p
        margin: 0
      small
        opacity: 0.6
</style>
