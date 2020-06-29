<template>
  <div class="editor-menu">
    <ReteEditor />
    <v-navigation-drawer permanent fixed expand-on-hover app clipped left floating>
      <v-list>
        <v-list-item class="px-2" justify="center">
          <v-list-item-avatar size="62" color="accent">
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
            <v-icon>mdi-file-table-box-multiple-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Live datasets</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="openDatasetDialog()">
          <v-list-item-icon>
            <v-icon>mdi-cloud-upload-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Load dataset</v-list-item-title>
          <input
            type="file"
            style="display:none"
            ref="dataset_upload"
            v-on:change="handleDatasetUpload"
          />
        </v-list-item>
        <v-list-item link @click="save_flow()">
          <v-list-item-icon>
            <v-icon>mdi-content-save-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Save flow</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="openFlowDialog()">
          <v-list-item-icon>
            <v-icon>mdi-folder-open-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Load flow</v-list-item-title>
          <input type="file" style="display:none" ref="flow_upload" v-on:change="handleFlowUpload" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-overlay :absolute="absolute" :value="overlay" class="d-flex align-start">
      <v-container>
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
              <v-btn text color="grey" @click="get_dataset(dataset.id)">
                View
                <v-icon>mdi-file-find</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
      <v-overlay :absolute="absolute" :value="view" class="d-flex align-start">
        <v-container>
          <v-row justify="center">
            <v-btn icon @click="view=false" class="m-10">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <v-data-table
              v-if="to_view != null"
              :headers="to_view.headers"
              :items="to_view.items"
              :items-per-page="20"
            ></v-data-table>
          </v-row>
        </v-container>
      </v-overlay>
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
    datasets: [],
    to_view: null,
    flow: null,
    to_upload: null
  }),
  methods: {
    update_datasets() {
      this.overlay = !this.overlay;
      this.datasets = this.$store.getters.datasets;
      console.log(this.datasets);
    },
    get_dataset(id) {
      this.to_view = this.$store.getters.dataset(id);
      this.view = !this.view;
    },
    save_flow() {
      let editor = this.$store.getters.editor;
      const data = JSON.stringify(editor);
      const blob = new Blob([data], { type: "text/plain" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "flow.json";
      a.click();
    },
    openDatasetDialog() {
      this.$refs.dataset_upload.click();
    },
    openFlowDialog() {
      this.$refs.flow_upload.click();
    },
    handleDatasetUpload(e) {
      let file = e.target.files[0];
      this.datasets.push(file);
    },
    handleFlowUpload(e) {
      let file = e.target.files[0];
      this.flow = file;
    }
  }
};
</script>

