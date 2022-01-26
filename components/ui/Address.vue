<template lang="pug">
  .address
    .address1
      input-text(type="text", placeholder="Address 1")
    .address2
      input-text(type="text", placeholder="Address 2")
    .address4
      ui-city-search
    .address3
      .state
        dropdown(:options="states", v-model="selectedState", :filter="true", placeholder="State", optionLabel="name", optionValue="code", appendTo="body")
      .city
        dropdown(:options="filteredCities", v-model="selectedCity", :filter="true", placeholder="City", optionLabel="name", optionValue="name", appendTo="body")
      .zip
        input-text(type="text", placeholder="Zip Code")

</template>

<script>
import { cities } from '~/data/cities'
import { states } from '~/data/states'

export default {
  data() {
    return {
      cities,
      states,
      selectedCity: null,
      selectedState: null
    }
  },
  computed: {
    filteredCities() {
      return this.selectedState ? this.cities.filter(city => city.stateCode === this.selectedState) : this.cities
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.address
  width: 100%
  input
    width: 100%
  .address1, .address2, .address3, .address4
    margin-bottom: $s50
  .address3
    +flex
    > *
      margin-right: $s50
      &:last-child
        margin-right: 0
    .city,
    .state
      flex: 1
    .zip
      width: 7rem
</style>