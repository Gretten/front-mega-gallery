import Vuex from 'vuex';

// import {
//   FETCH_IMAGES,
//   // DELETE_BY_ID,
//   GET_IMAGES,
//   SET_IMAGES,
//   // UPDATE_IMAGES,
// } from '@/store/constants';

import apiInstance from '../api/api'

export default new Vuex.Store({
  state: {
      images: [],
  },
  getters: {
    getImages: state => state.images,
  },
  mutations: {
    setImages(state, images) {
        state.images = images;
        console.log(state)
      },
  },
  actions: {
    fetchImages({ commit }) {
        apiInstance.retrieve()
            .then(res => {
                commit('setImages', res.map(el => {
                    el.key = el.id;
                    return el;
                }))
            })
    }
  },
  devtools: true,
});
