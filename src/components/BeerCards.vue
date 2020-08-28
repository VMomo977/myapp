<template>
	<div>
		Beers
		<v-flex v-if="beers"
			class="d-flex align-items flex wrap"
		>
			<v-card v-for="beer in beers" :key="beer.id"
			>
				<v-img
						:src="beer.image_url"
					/>
					{{  beer.name }} <br/>
					{{  beer.tagline }} <br/>
					{{  beer.abv  }} % <br/>
					{{ beer.volume.value }} x {{ beer.boil_volume.value }} ( {{ beer.boil_volume.unit }} )

			</v-card>
	</v-flex> 
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'BeerCards',
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