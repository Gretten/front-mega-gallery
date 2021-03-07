import Vuex from 'vuex';
import apiInstance from '../api/api'

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
    fetchImages({ commit }) {
        apiInstance.retrieve()
            .then(res => {
                commit('setImages', res.data.map(el => {
                    el.key = el.id;
                    return el;
                }))
            })
    }
  },
});