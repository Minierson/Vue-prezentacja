<template>
<v-container>
    <v-layout row wrap justify-space-around>
        <v-flex xs12 md4 v-for="item in items" :key="item.title" mt-2>
            <v-card >
                <v-card-text class="elevation-4 pa-0" light>
                    <h4 class="accent pa-3">{{item.title}}</h4>
                    <p class="pa-4">{{item.content}}</p>
                    
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Przykładowy artykuł',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia purus nisl, in venenatis justo porttitor et. Nam facilisis risus arcu, quis mollis urna feugiat nec. Nullam nulla mauris, mollis a nisi vitae, fringilla condimentum est. In vehicula ultrices magna non molestie. In tempor felis id metus sollicitudin imperdiet. Cras ut est ante. Ut sit amet arcu at leo porta dapibus. Donec vehicula, nibh quis interdum eleifend, metus sem pharetra arcu, sed sodales erat risus tristique lectus. Duis a facilisis mauris, non porta sem. Morbi sagittis odio vel sapien tincidunt fringilla. Quisque placerat, tellus pretium venenatis rutrum, elit dui tempus ipsum, nec blandit libero leo sed velit.',
          src: '/carousel'
        },
        {
          title: 'Przykładowy artykuł',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia purus nisl, in venenatis justo porttitor et. Nam facilisis risus arcu, quis mollis urna feugiat nec. Nullam nulla mauris, mollis a nisi vitae, fringilla condimentum est. In vehicula ultrices magna non molestie. In tempor felis id metus sollicitudin imperdiet. Cras ut est ante. Ut sit amet arcu at leo porta dapibus. Donec vehicula, nibh quis interdum eleifend, metus sem pharetra arcu, sed sodales erat risus tristique lectus. Duis a facilisis mauris, non porta sem. Morbi sagittis odio vel sapien tincidunt fringilla. Quisque placerat, tellus pretium venenatis rutrum, elit dui tempus ipsum, nec blandit libero leo sed velit.',
          src: '/form'
        },
        {
          title: 'Przykładowy artykuł',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia purus nisl, in venenatis justo porttitor et. Nam facilisis risus arcu, quis mollis urna feugiat nec. Nullam nulla mauris, mollis a nisi vitae, fringilla condimentum est. In vehicula ultrices magna non molestie. In tempor felis id metus sollicitudin imperdiet. Cras ut est ante. Ut sit amet arcu at leo porta dapibus. Donec vehicula, nibh quis interdum eleifend, metus sem pharetra arcu, sed sodales erat risus tristique lectus. Duis a facilisis mauris, non porta sem. Morbi sagittis odio vel sapien tincidunt fringilla. Quisque placerat, tellus pretium venenatis rutrum, elit dui tempus ipsum, nec blandit libero leo sed velit.',
          src: 'https://vuetifyjs.com/'
        },
        {
          title: 'Przykładowy artykuł',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia purus nisl, in venenatis justo porttitor et. Nam facilisis risus arcu, quis mollis urna feugiat nec. Nullam nulla mauris, mollis a nisi vitae, fringilla condimentum est. In vehicula ultrices magna non molestie. In tempor felis id metus sollicitudin imperdiet. Cras ut est ante. Ut sit amet arcu at leo porta dapibus. Donec vehicula, nibh quis interdum eleifend, metus sem pharetra arcu, sed sodales erat risus tristique lectus. Duis a facilisis mauris, non porta sem. Morbi sagittis odio vel sapien tincidunt fringilla. Quisque placerat, tellus pretium venenatis rutrum, elit dui tempus ipsum, nec blandit libero leo sed velit.',
          src: 'https://vuetifyjs.com/'
        }
      ]

    }
  }
}
</script>
