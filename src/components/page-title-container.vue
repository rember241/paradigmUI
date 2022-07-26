<template>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        Title: {{ $route.name }}
      </p>
      <p>Path: {{ $route.path }}</p>
      <div class="text--primary">
        <p>
          {{page_desc}}
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
	export default {
        props: ['page_desc'],
		data: () => ({
			isLogStaff: true,
		}),
		created() {
			this.initialize();
		},
        watch: {
			search_result: function(val) {
				if (val) {
					this.selected_borrower = val;
				}
			},
		},
        mounted(){
        },
		methods: {
			reload_dataContainer(data) {
				if(data)
					this.initialize();
			},
			accountTypeChange: function(val) {
			},
		},
	}
</script>
