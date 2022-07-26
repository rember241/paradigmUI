import Vue          from 'vue'
import VueRouter    from 'vue-router'
import Home         from '../views/Home.vue'
import About        from '../views/About.vue'
import how_it_works from '../views/how_it_works.vue'
import Analytics    from '../views/UI/dashboard/analytics.vue'
import blank        from '../views/UI/dashboard/blank.vue'
import dark_theme   from '../views/UI/dashboard/dark_theme.vue'
import defaults     from '../views/UI/dashboard/defaults.vue'
import light_theme  from '../views/UI/dashboard/light_theme.vue'
import minimalist   from '../views/UI/dashboard/minimalist.vue'
import orders       from '../views/UI/dashboard/orders.vue'
import projects     from '../views/UI/dashboard/projects.vue'

import searches     from '../views/UI/layouts/searches.vue'
import sides        from '../views/UI/layouts/sides.vue'
import top_down     from '../views/UI/layouts/top-down.vue'

import alerts       from '../views/TOOLKITS/components/alerts.vue'
import background   from '../views/TOOLKITS/components/background.vue'
import badges       from '../views/TOOLKITS/components/badges.vue'
import borders      from '../views/TOOLKITS/components/borders.vue'
import calendar     from '../views/TOOLKITS/components/calendar.vue'
import cards        from '../views/TOOLKITS/components/cards.vue'
import chips        from '../views/TOOLKITS/components/chips.vue'
import code_blocks  from '../views/TOOLKITS/components/code-blocks.vue'
import collapsible  from '../views/TOOLKITS/components/collapsible.vue'
import dialog       from '../views/TOOLKITS/components/dialog.vue'
import drop_downs   from '../views/TOOLKITS/components/drop-downs.vue'
import floats       from '../views/TOOLKITS/components/floats.vue'
import grid         from '../views/TOOLKITS/components/grid.vue'
import icons        from '../views/TOOLKITS/components/icons.vue'
import lists        from '../views/TOOLKITS/components/lists.vue'
import modals       from '../views/TOOLKITS/components/modals.vue'
import navs         from '../views/TOOLKITS/components/navs.vue'
import progress     from '../views/TOOLKITS/components/progress.vue'
import ripples      from '../views/TOOLKITS/components/ripples.vue'
import shadows      from '../views/TOOLKITS/components/shadows.vue'
import slider       from '../views/TOOLKITS/components/slider.vue'
import spinners     from '../views/TOOLKITS/components/spinners.vue'
import tabs         from '../views/TOOLKITS/components/tabs.vue'
import texts        from '../views/TOOLKITS/components/texts.vue'
import toasts       from '../views/TOOLKITS/components/toasts.vue'
import tool_tips    from '../views/TOOLKITS/components/tool-tips.vue'
import transform    from '../views/TOOLKITS/components/transform.vue'
import tree         from '../views/TOOLKITS/components/tree.vue'
import typography   from '../views/TOOLKITS/components/typography.vue'

import buttons        from '../views/TOOLKITS/forms/buttons.vue'
import check_boxes    from '../views/TOOLKITS/forms/check-boxes.vue'
import embed          from '../views/TOOLKITS/forms/embed.vue'
import file_uploads   from '../views/TOOLKITS/forms/file-uploads.vue'
import hiddens        from '../views/TOOLKITS/forms/hiddens.vue'
import input_types    from '../views/TOOLKITS/forms/input-types.vue'
import radio_buttons  from '../views/TOOLKITS/forms/radio-buttons.vue'
import select_options from '../views/TOOLKITS/forms/select-options.vue'

import expansion_panels from '../views/TOOLKITS/utilities/expansion-panels.vue'
import paginations      from '../views/TOOLKITS/utilities/paginations.vue'

import avatars          from '../views/MULTIMEDIA/images/avatars.vue'
import backgrounds      from '../views/MULTIMEDIA/images/backgrounds.vue'
import carousel         from '../views/MULTIMEDIA/images/carousel.vue'
import galleries        from '../views/MULTIMEDIA/images/galleries.vue'
import styled_pictures  from '../views/MULTIMEDIA/images/styled-pictures.vue'

import chartings_3rd    from '../views/PLUGINS/jslibraries/chartings.vue'
import db_tables        from '../views/PLUGINS/jslibraries/db-tables.vue'
import datetimepickers  from '../views/PLUGINS/jslibraries/datetimepickers.vue'
import pdfs             from '../views/PLUGINS/jslibraries/pdfs.vue'


// DownloadableDesigns
import DownloadableDesigns_index  from '../views/DESIGNS/DownloadableDesigns/DownloadableDesigns_index.vue'

// ProjectBasedDesigns
import ProjectBasedDesigns_index  from '../views/DESIGNS/ProjectBasedDesigns/ProjectBasedDesigns_index.vue'

// SingleElementDesigns
import SingleElementDesigns_index  from '../views/DESIGNS/SingleElementDesigns/SingleElementDesigns_index.vue'

// ThemeElementDesigns
import ThemeBasedDesigns_index  from '../views/DESIGNS/ThemeBasedDesigns/ThemeBasedDesigns_index.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/how_it_works',  name: 'How It Works', component: how_it_works },
  { path: '/analytics',  name: 'Analytics', component: Analytics },
  { path: '/blank',  name: 'Blank Page', component: blank },
  { path: '/dark_theme',  name: 'Dark Theme', component: dark_theme },
  { path: '/defaults',  name: 'Default Pages', component: defaults },
  { path: '/light_theme',  name: 'Light Themes', component: light_theme },
  { path: '/minimalist',  name: 'Minimalists', component: minimalist },
  { path: '/orders',  name: 'Orders', component: orders },
  { path: '/projects',  name: 'Projects', component: projects },

  { path: '/searches',  name: 'searches', component: searches },
  { path: '/sides',  name: 'sides', component: sides },
  { path: '/top-down',  name: 'top-down', component: top_down },

  { path: '/alerts',  name: 'alerts', component: alerts },
  { path: '/background',  name: 'background', component: background },
  { path: '/badges',  name: 'badges', component: badges },
  { path: '/borders',  name: 'borders', component: borders },
  { path: '/calendar',  name: 'calendar', component: calendar },
  { path: '/cards',  name: 'cards', component: cards },
  { path: '/chips',  name: 'chips', component: chips },
  { path: '/code-blocks',  name: 'code-blocks', component: code_blocks },
  { path: '/collapsible',  name: 'collapsible', component: collapsible },
  { path: '/dialog',  name: 'dialog', component: dialog },
  { path: '/drop-downs',  name: 'drop-downs', component: drop_downs },
  { path: '/floats',  name: 'floats', component: floats },
  { path: '/grid',  name: 'grid', component: grid },
  { path: '/icons',  name: 'icons', component: icons },
  { path: '/lists',  name: 'lists', component: lists },
  { path: '/modals',  name: 'modals', component: modals },
  { path: '/navs',  name: 'navs', component: navs },
  { path: '/progress',  name: 'progress', component: progress },
  { path: '/ripples',  name: 'ripples', component: ripples },
  { path: '/shadows',  name: 'shadows', component: shadows },
  { path: '/slider',  name: 'slider', component: slider },
  { path: '/spinners',  name: 'spinners', component: spinners },
  { path: '/tabs',  name: 'tabs', component: tabs },
  { path: '/texts',  name: 'texts', component: texts },
  { path: '/toasts',  name: 'toasts', component: toasts },
  { path: '/tool-tips',  name: 'tool-tips', component: tool_tips },
  { path: '/transform',  name: 'transform', component: transform },
  { path: '/tree',  name: 'tree', component: tree },
  { path: '/typography',  name: 'typography', component: typography },

  { path: '/buttons',  name: 'buttons', component: buttons },
  { path: '/check-boxes',  name: 'check-boxes', component: check_boxes },
  { path: '/embed',  name: 'embed', component: embed },
  { path: '/file-uploads',  name: 'file-uploads', component: file_uploads },
  { path: '/hiddens',  name: 'hiddens', component: hiddens },
  { path: '/input-types',  name: 'input-types', component: input_types },
  { path: '/radio-buttons',  name: 'radio-buttons', component: radio_buttons },
  { path: '/select-options',  name: 'select-options', component: select_options },

  { path: '/expansion-panels',  name: 'expansion-panels', component: expansion_panels },
  { path: '/paginations',  name: 'paginations', component: paginations },

  { path: '/avatars',  name: 'avatars', component: avatars },
  { path: '/backgrounds',  name: 'backgrounds', component: backgrounds },
  { path: '/carousel',  name: 'carousel', component: carousel },
  { path: '/galleries',  name: 'galleries', component: galleries },
  { path: '/styled-pictures',  name: 'styled-pictures', component: styled_pictures },

  { path: '/chartings_3rd',  name: 'chartings', component: chartings_3rd },
  { path: '/datetimepickers',  name: 'datetimepickers', component: datetimepickers },
  { path: '/db-tables',  name: 'db-tables', component: db_tables },
  { path: '/galleries',  name: 'galleries', component: galleries },
  { path: '/pdfs',  name: 'pdfs', component: pdfs },

  // DownloadableDesigns
  { path: '/DownloadableDesigns_index',  name: 'DownloadableDesigns_index', component: DownloadableDesigns_index },

  // ProjectBasedDesigns
  { path: '/ProjectBasedDesigns_index',  name: 'ProjectBasedDesigns_index', component: ProjectBasedDesigns_index },

  // SingleElementDesigns
  { path: '/SingleElementDesigns_index',  name: 'SingleElementDesigns_index', component: SingleElementDesigns_index },

  // ThemeElementDesigns
  { path: '/ThemeBasedDesigns_index',  name: 'ThemeBasedDesigns_index', component: ThemeBasedDesigns_index },
]

const router = new VueRouter({
  routes
})

export default router
