import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'md',
    theme:{
        dark: false,
        themes: {
            light: {
                accent: "#42A2FB",
            },
        },
    },
});
