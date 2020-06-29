<template>
  <v-footer
    padless
    fixed
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="white">
        <strong class="subheading grey--text">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 grey--text text-center">
        {{ new Date().getFullYear() }} — <strong>FluxusML</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>