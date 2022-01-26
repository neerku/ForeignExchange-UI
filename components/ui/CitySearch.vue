<template lang="pug">
  .city
    auto-complete(v-model="selectedCity", field="label", :suggestions="filteredCities", @complete="search($event)", forceSelection, placeholder="Search City, Zip", appendTo="body")
      template(#item="slotProps")
        label.city-state-zip
          span {{slotProps.item.name}}
          span.separator /
          span {{slotProps.item.stateCode}}
          span.separator /
          span {{slotProps.item.zip}}
</template>

<script>
import { cities } from '~/data/zipcodes'

export default {
  data() {
    return {
      cities,
      states: [],
      selectedCity: null,
      selectedState: null,
      filteredCities: [],
    }
  },
  methods: {
    search(event) {
      if (event.query.trim().length <= 0) {
        this.filteredCities = [...this.cities];
      } else {
        this.filteredCities = this.cities.filter((city) => {
          return (
            city.name.toLowerCase().startsWith(event.query.toLowerCase()) ||
            city.zip.toString().toLowerCase().startsWith(event.query.toLowerCase())
          )
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

label.city-state-zip
  +flex
  .separator
    opacity: 0.3
    padding: 0 $s25
</style>