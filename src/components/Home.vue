<template>
	<div class="hello">
		<v-img 
			src="https://images.unsplash.com/photo-1549063729-f02aba455bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			:min-width="'calc(100vh - ' + $vuetify.application.width + 'px)'"
			contain
			alt="Beer image"
		>
			<v-container fill-height>
				<v-row align="center" class="white--text mx-auto" justify="center">
					<v-col class="white--text text-center" cols="12" tag="h1">
						<span :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
							class="font-weight-light">
							WELCOME TO
						</span>
						<br>
						<span :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
							class="font-weight-black">
							Beer Factory
						</span>
					</v-col>
				</v-row>
			</v-container>
		</v-img>
		<v-content class="text-center" tag="h1">
			Choose between the best beers
			<BeerCards />
		</v-content>
	</div>
</template>

<script>
import BeerCards from '@/components/BeerCards.vue';
export default {
  name: 'Home',
  components: {
	BeerCards,
  }
}
</script>

<style>
</style>
