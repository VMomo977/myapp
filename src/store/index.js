import Vue from 'vue'
import Vuex from 'vuex'
import beers from './beers.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		beers,
	},
});