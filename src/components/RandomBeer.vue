<template>
    <div>
        <v-content 
			class="black 
				white--text
				text-center
				mt-8
				mb-8"	
		>
			<v-content class="mt-8" tag="h1">
				Let's give you a random beer!<br/>
			</v-content>
				Click on the random beer generator and you will get an amazing beer!<br/>
				You thank me later!
				<v-divider/>
				<v-btn  @click="getRandomBeer">
					Get Beer
				</v-btn>
				<v-card
					class="d-flex flex-wrap black mt-8 mb-8"
					flat			
				>
					<Beer
						v-if="randomBeer"
						:beer="randomBeer"
						class="mx-auto text-center"
						height="400"
						width="200"
					/>
				</v-card>
		</v-content>
	</div>
</template>

<script>
import Beer from "@/components/Beer.vue";
import { mapState } from 'vuex';
export default {
	name: 'RandomBeer',
	components: {
		Beer,
	},
	computed: {
		...mapState('beers', {
			randomBeer: 'beerRandom',
		}),
	},
	methods: {
		getRandomBeer() {
			this.$store.dispatch("beers/loadRandomBeer");
		},
	},
}
</script>

<style>

</style>