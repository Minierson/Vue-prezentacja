<template>
<v-container>
  <v-layout column>
    <v-flex xs12 md8 offset-md2 mt-4>
      
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      pictures: [
        {
          src: '/static/pic1.jpg',
          text: 'Przykładowy tekst na obrazku'
        },
        {
          src: '/static/pic2.jpg',
          text: 'Przykładowy tekst na obrazku'
        },
        {
          src: '/static/pic3.jpg',
          text: 'Przykładowy tekst na obrazku'
        },
        {
          src: '/static/pic4.jpg',
          text: 'Przykładowy tekst na obrazku'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
  #carousel-view
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>

