<template>
	<div>
		<v-card
			class="d-flex flex-wrap"
			flat		
		>
			<v-card v-for="beer in beers" :key="beer.id"
				class="mx-auto mt-auto mb-auto text-center"
				height="400"
				width="200"
			>
				<v-img
						:src="beer.image_url"
						width="200" height="200" contain
				/>
				<v-content
					tag="h3"
				>
					{{  beer.name }} 
				</v-content>
				<v-text>
					<span 
						class="black--text"
					>
						{{  beer.tagline }} <br/>
					</span>
					<span 
						class="brown--text"
					> 
						{{  beer.abv  }} % <br/>
						{{ beer.volume.value }} x {{ beer.boil_volume.value }} ( {{ beer.boil_volume.unit }} )
					</span>
				</v-text>
				<v-card-actions>
					<v-btn
						dark
						class="white--text"
					>
						Buy me
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-card> 
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