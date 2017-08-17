<template>
  <v-app>
    <v-toolbar class="myOwn" dark>
      <v-toolbar-title @click="goHome" style="cursor: pointer">Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main class="blue-grey lighten-4">
      <router-view></router-view>
    </main>
  </v-app>
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
