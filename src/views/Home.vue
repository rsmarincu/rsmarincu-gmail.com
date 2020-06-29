  
<template>
  <v-container fluid fill-height class="home-fluxus pa-0 ma-0">
    <v-container fill-height>
      <v-row :align="align_start" class="x-row">
        <v-col cols="12" md="8" xs="4">
          <v-row justify="start">
            <h1>Unlock the power of your data.</h1>
          </v-row>
          <v-row align="center" justify="center">
            <h2>Make informed decisions.</h2>
            <v-btn rounded large @click="overlay = !overlay" color="accent" class="ma-10">
              Demo
              <v-icon>mdi-video</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-overlay :value="overlay">
      <v-row justify="center" >
        <v-btn icon @click="overlay = false" class="ma-10">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/LYlu7uS0UQY?controls=0&autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-row>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    align_end: "end",
    align_start: "start",
    overlay: false
  })
};
</script>

<style lang="sass" scoped>
h1
  font-size: 5em
h2
  font-size: 3em
.home-fluxus
  background: url("../assets/Waves.svg")
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: bottom center
  background-size: 175%
.x-row
  height: 100%
</style>
