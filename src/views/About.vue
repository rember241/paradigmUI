<template>
<div>
  <template>
      <page-title-container
      page_desc="page_desc about"
    />
  </template>  

  <template>
    <v-card>
      <v-toolbar
        color="black"
        dark
        flat
      >
        <v-toolbar-title>My component</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-email</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat>
            <v-card-text>
                display sample here and code will be re directed to GIT or fiddle
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </template>

</div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'Item 1', 'Item 2', 'Item 3', 'Item 4',
        ]
      }
    },
  }
</script>

