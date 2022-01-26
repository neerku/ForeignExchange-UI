<template lang="pug">
  .upload
    .actions(v-if="!uploaded")
      ui-button(kind="neutral", @clicked="upload")
        i.nu.nu-upload
        | &nbsp; Upload
      | &nbsp;
      ui-button(kind="neutral", @clicked="upload")
        i.nu.nu-qr-code
        | &nbsp; Photo Capture
    .preview(v-else)
      .ids
        .photo-id(v-if="type === 'photo-id'")
          img(:src="photoId.front")
          img(:src="photoId.back")
        .insurance-id(v-else-if="type === 'insurance-id'")
          img(:src="insuranceId")
      .reset
        ui-button(:kind="['primary', 'icon']", @clicked="reset", size="sm")
          i.nu.nu-times

</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'photo-id'
    },
  },
  data() {
    return {
      uploaded: false,
      photoId: {
        front:
          'https://www.savannahnow.com/storyimage/GA/20190702/NEWS/190709803/AR/0/AR-190709803.jpg?Q=75&maxW=1920&maxH=1920',
        back:
          'https://www.savannahnow.com/storyimage/GA/20190702/NEWS/190709803/EP/1/1/EP-190709803.jpg?Q=75&maxW=1920&maxH=1920'
      },
      insuranceId: 'https://anthempc-attachments-prod.s3-us-west-2.amazonaws.com/858/HPN-Sample-Member-ID-Card-2021.png'
    }
  },
  methods: {
    upload() {
      this.uploaded = true
    },
    reset() {
      this.uploaded = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.preview
  height: 7rem
  min-width: 7rem
  position: relative
  display: inline-block
  .reset
    +absolute-e
    margin-left: $s50
  .ids
    +border
    padding: $s25
    max-width: 100%
    .insurance-id
      img
        width: 21rem
    .photo-id
      max-width: 100%
      +flex
      img
        width: 12rem
        max-width: 50%
        margin-right: $s50
        &:last-child
          margin-right: 0
</style>
