  
<template>
    <v-container fluid fill-height>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-row justify="start">
            <h1>Unlock the power of your data.</h1>
            <h3>Make informed decisions.</h3>
            </v-row>
          </v-col>
          <v-col>
            <v-row style="height: 150px" justify="center">
              <h2>Data science:</h2>
              <h3>radically simplified.</h3>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-btn rounded large color="accent">Example</v-btn>
      </v-row>
      <v-row  :align="align" style="height: 75%">
        <v-img src="@/assets/Waves.svg" height="75%"  :aspect-ratio="ratio"></v-img>
      </v-row>
    </v-container>
</template>

<script>


export default {
  data: () => ({
    align: "end",
    ratio: 3840 / 1080
  })
};
</script>

<style lang="sass" scoped>
h1
  font-size: 5em

</style>
