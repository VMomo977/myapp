import axios from 'axios';
export default {
	namespaced: true,
	state: {
		beerItems: [],
	}, 
	mutations: {
		SET_BEERS(state, beers) {
			state.beerItems = beers;
		}
	},
	actions: {
		async loadBeers({ commit }) {
			const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=6');
			const beers = response.data;
			console.log('beers: ', beers);
			commit('SET_BEERS', beers);
		},
	},
};