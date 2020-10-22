<template>
    <div>
        <v-content 
			class="
				text-center
				mt-8
				mb-8"	
		>
			<v-content class="mt-8" tag="h1">
				Select your favorites!<br/>
			</v-content>
            Do you miss your favorites?<br/>
            Fill the field and click on the Search button!<br/>
            Here are coming your favorite beers!

            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-slider
                    v-model="query.abv_lt"
                    label="ABV less than"
                    :min=1
                    :max=50
                    :color="abv_lt_color"
                    :thumb-color="abv_lt_color"
                    thumb-label="always"
                >
                </v-slider>
                <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="validate"
                >
                    Search
                </v-btn>
            </v-form>

            <v-card
                v-if="selectedBeers" 
                class="d-flex flex-wrap"
                flat		
            >
                <Beer v-for="beer in selectedBeers" 
                    :key="beer.id"
                    :beer="beer"
                    class="mx-auto mt-auto mb-auto text-center"
                    height="400"
                    width="200"
                />
            </v-card> 
		</v-content>
	</div>
</template>

<script>
import Beer from "@/components/Beer.vue";
import {mapState} from "vuex";

export default {
	name: 'BeerSelect',
	components: {
        Beer,
    },
    data: () => ({
        valid: true,
        abv_lt_color: "orange",
        query: {
            abv_lt: '',
            abv_gt: 1,
            beer_name: '',
        },
    }),
    computed: {
        ...mapState('beers', {
            selectedBeers: 'beerQuery',
            }
        ),
    },
	methods: { 
        validate () {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
                const selectedQuery = Object.entries(this.query).filter(e => e[1] !== '');
                let queryString = '?';
                selectedQuery.forEach(e => (queryString = queryString.concat(e[0],"=",e[1],"&&")));
                queryString = queryString.substring(0, queryString.length-2);
                this.getSelectedBeers(queryString);
 
            }
        },
		getSelectedBeers(queryString) {
			this.$store.dispatch("beers/loadBeerQuery", queryString);
		},
	},
}
</script>

<style>