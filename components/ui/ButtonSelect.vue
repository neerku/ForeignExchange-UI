<template lang="pug">
  ul.slots
    li.slot.p-button(v-for="s, i in choicesModified", :class="{selected : s === selectedChoice }", :key="i", @click="toggleSlot($event, s)") {{ s }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    choices: {
      type: Array,
      default: () => [],
    },
    selectedChoice: {
      type: String,
      default: null
    },
    field: {
      type: Object,
      default: null
    },
    optionLabel:{
       type: String,
      default: null
    }
  },
  data(){
    return{
      choicesModified:null
    }
  },
  computed: {
    ...mapGetters(['selectedSlot', 'appointmentDate', 'preselectSlot']),
  },
  watch:{ 
    choices(){
       if(this.optionLabel){
      this.calculateChoice(true)
    }else{
        this.calculateChoice(false)
    }
    } 
   },
  mounted(){
    if(this.optionLabel){
      this.calculateChoice(true)
    }else{
        this.calculateChoice(false)
    }

  },

  methods: {
    ...mapActions(['setSelectedSlot', 'setAppointmentDate']),
    toggleSlot(event, slot) {
      this.$emit('slotSelect',{
        field:this.field,
        selectedValue:slot
      })
        event.stopPropagation()
        event.preventDefault()
    },
    checkSlot(event, slot) {
      if (!slot.open) {
        this.setSelectedSlot(event)
        this.setAppointmentDate(slot)
      }
      event.stopPropagation()
      event.preventDefault()
    },
    calculateChoice(flag){
      if(flag){
        this.choicesModified = this.choices.map(element => {
              return element.label
        });
        return
      }
      this.choicesModified = this.choices
     
    }
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

ul.slots
  display: grid
  grid-template-columns: auto auto auto auto auto
  text-align: center
  margin: 0
  padding: 0
  +breakpoint($mobile-lg)
    grid-template-columns: auto auto auto
  li
    +border
    justify-content: center
    border-color: $neutral-06
    padding: 0.5rem 1rem
    margin: 0 $s50 $s25 0
    border-radius: 3px
    cursor: pointer
    font-size: 0.8rem
    font-weight: 700
    background-color: $white
    &:hover
      border-color: $neutral-08
      background: $highlight
  li.closed
    background-color: $neutral-05
  li.selected
    background-color: $success
    color: $white
</style>
