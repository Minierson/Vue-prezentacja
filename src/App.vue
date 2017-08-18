<template>

</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          title: 'Carousel',
          icon: 'loop',
          link: '/carousel'
        },
        {
          title: 'Form',
          icon: 'directions_run',
          link: '/form'
        }
      ]
    }
  },
  methods: {
    goHome () {
      return this.$router.push('/')
    }

  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
