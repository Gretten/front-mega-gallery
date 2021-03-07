import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      images: [],
  },
  getters: {
      getImages: state => state.images
  },
  mutations: {
    setImages(state, images) {
        state.images = images;
      },
  },
  actions: {
    fetchImages({ commit }, params = '') {
        api.retrieve(params)
            .then(res => {
                commit(setImages, res.data.map(el => {
                    el.key = el.id;
                    return el;
                }))
            })
    }
  },
});