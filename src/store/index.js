import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        datasets: []
    },
    getters:{
        datasets: state => {
            return state.datasets
        },

        dataset: (state) => (id) => {
            return state.datasets.find(dataset => dataset.id == id)
        }

    },
    mutations:{
        ADD_FILE(state, dataset) {
            state.datasets.push(dataset)
        }
    },
    actions:{

    }
})