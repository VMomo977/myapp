<template>
	<div>
		<v-card
			class="d-flex flex-wrap"
			flat		
		>
			<Beer v-for="beer in beers" 
				:key="beer.id"
				:beer="beer"
				class="mx-auto mt-auto mb-auto text-center"
				height="400"
				width="200"
			/>
		</v-card> 
	</div>
</template>

<script>
import Beer from "@/components/Beer.vue";
import { mapState, mapActions } from 'vuex';

export default {
	name: 'BeerCards',
	components: {
		Beer,
	},
	computed: {
		...mapState('beers', {
			beers: 'beerItems',
		}),
	},
	async created() {
		await this.loadBeersData();
	},
	methods: {
		...mapActions('beers', {
			loadBeersData: 'loadBeers',
		}),
	},
}
</script>

<style>

</style>