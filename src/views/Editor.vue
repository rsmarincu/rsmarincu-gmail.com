<template>
  <div class="editor-menu" >
    <ReteEditor />
    <v-navigation-drawer permanent fixed expand-on-hover app clipped left floating>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar tile size="62">
            <span class="white--text headline">RM</span>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Robert Marincu</v-list-item-title>
            <v-list-item-subtitle>rsmarincu@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="update_datasets()">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-overlay 
    :absolute="absolute" 
    :value="overlay" 
    class="d-flex align-start">
      <v-container >
        <v-row justify="center">
          <v-btn icon @click="overlay=false" class="m-10">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-row>
          <v-card
            v-for="dataset in datasets"
            :key="dataset"
            class="ma-10"
            color="white"
            justify="center"
          >
            <v-card-text>
              <p class="display-1 text--primary">{{dataset.id}}</p>
            </v-card-text>
            <v-card-actions justify="center">
              <v-btn text color="grey" @click="view = !view">
                View
                <v-icon>mdi-file-find</v-icon>
              </v-btn>
            </v-card-actions>

            <v-overlay 
            :absolute="absolute" 
            :value="view"
            class="d-flex align-start">
              <v-container>
                <v-row justify="center">
                  <v-btn icon @click="view=false" class="m-10">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-row>
                <v-row>
                  <v-data-table
                  :headers="dataset.headers"
                  :items="dataset.items"
                  :items-per-page="20"></v-data-table>
                </v-row>
              </v-container>
            </v-overlay>
          </v-card>
        </v-row>
      </v-container>
    </v-overlay>
  </div>
</template>

<script>
import ReteEditor from "@/vue-components/ReteEditor";

export default {
  name: "App",
  components: {
    ReteEditor
  },
  data: () => ({
    overlay: false,
    absolute: false,
    view: false,
    datasets: null
  }),
  methods: {
    update_datasets() {
      this.overlay = !this.overlay
      this.datasets = this.$store.getters.datasets
    }
   }
};
</script>

