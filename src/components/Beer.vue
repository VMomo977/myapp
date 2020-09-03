<template>
	<div>
		<v-card>
			<v-img
				:src="beer.image_url"
				width="200" height="200" contain
			/>
			<v-content
				tag="h3"
			>
				{{  beer.name }} 
			</v-content>
			<v-content>
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
			</v-content>
			<v-card-actions>
				<v-btn
					dark
					class="white--text"
				>
					Buy me
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
    props: ["beer"]
}
</script>

<style>

</style>