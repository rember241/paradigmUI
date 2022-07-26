import Vue          from 'vue'
import VueRouter    from 'vue-router'

var pages = [
  { title_name: 'Home', file_path: '/', page_location: '../views/Home.vue' },
  { title_name: 'About', file_path: '/about', page_location: '../views/about.vue' },
  { title_name: 'how_it_works', file_path: '/how_it_works', page_location: '../views/how_it_works.vue' }
]

import Home         from '../views/Home.vue'
import About        from '../views/About.vue'
import how_it_works from '../views/how_it_works.vue'

// idisplay j array ditoy
// iloop ko jay routes

Vue.use(VueRouter)

const routes = []

for (var index in pages) {
  routes.push(
    {
      path: pages[index].file_path,
      name: pages[index].title_name,
      component: pages[index].page_location,
    },
  );
}
console.log(routes)
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About
  // },
  // {
  //   path: '/how_it_works',
  //   name: 'How It Works',
  //   component: how_it_works
  // },


const router = new VueRouter({
  routes
  
})

export default router

