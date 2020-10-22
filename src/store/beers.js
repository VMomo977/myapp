import axios from 'axios';
export default {
	namespaced: true,
	state: {
		beerItems: [],
		beerRandom: null,
		beerQuery: [],
	}, 
	mutations: {
		SET_BEERS(state, beers) {
			state.beerItems = beers;
		},
		SET_RANDOM_BEER(state, beer) {
			state.beerRandom = beer;
		},
		SET_BEER_QUERY(state, beers) {
			state.beerQuery = beers;
		},
	},
	actions: {
		async loadBeers({ commit }) {
			const response = await axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=5');
			const beers = response.data;
			commit('SET_BEERS', beers);
		},
		async loadRandomBeer({ commit }) {
			const response = await axios.get('https://api.punkapi.com/v2/beers/random');
			const beer = response.data;
			commit('SET_RANDOM_BEER', beer[0]);
		},
		async loadBeerQuery({ commit }, queryString) {
			const response = await axios.get(`https://api.punkapi.com/v2/beers${queryString}`);
			const beers = response.data;
			commit('SET_BEER_QUERY', beers);
		},
	},
};