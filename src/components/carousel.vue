<template>
<v-container>
    <v-layout column wrap>
        <v-flex xs8 offset-xs2>
        <h4 class="black--text">
            Tu będzie karuzela
        </h4>
        <v-carousel>
            <v-carousel-item
            v-for="(pic, i) in pictures"
            :key="i"
            :src="pic.src"
            transition="fade"
            reverseTransition="fade"
            ></v-carousel-item>
        </v-carousel>
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

