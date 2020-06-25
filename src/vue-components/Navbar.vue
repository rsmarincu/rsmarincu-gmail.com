<template>
    <nav>
        <v-app-bar flat app color="white">
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Fluxus</span>
                <span>ML</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <router-link style="text-decoration: none" to="/">
                <v-btn text class="ma-1">
                    <span>Home</span>
                </v-btn>
            </router-link>

            <router-link style="text-decoration: none" to="/documentation">
                <v-btn text class="ma-1">
                    <span>Documentation</span>
                </v-btn>
            </router-link>

            <router-link style="text-decoration: none" to="/about">
                <v-btn text class="ma-1">
                    <span>About</span>
                </v-btn>
            </router-link>

            <router-link style="text-decoration: none" to="/editor">
                <v-btn outlined text color="grey" class="ma-1">
                <span>Editor</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn></router-link>

        </v-app-bar>
    </nav>
</template>

<script>
export default {

}
</script>