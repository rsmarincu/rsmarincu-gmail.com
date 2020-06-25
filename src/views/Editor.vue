<template>
    <div class="editor-menu">
        <ReteEditor />
        <v-navigation-drawer
          permanent
          fixed
          expand-on-hover
          app
          clipped
          left
          floating
        >
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

          <v-list
            nav
            dense
          >
            <v-list-item link>
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
    </div> 
</template>

<script>
import ReteEditor from '@/vue-components/ReteEditor'

export default {
  name: 'App',
  components: {
    ReteEditor
  },
  data: () => ({
    //
  }),
};
</script>

