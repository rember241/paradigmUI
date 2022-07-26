<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Sahei Core Tech
          </v-list-item-title>
          <v-list-item-subtitle>
            vuetify 2.x.x
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in top_pages"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- for Groups-->
        <div>
            <div
            v-for="mymenu in menu_lists"
            :key="mymenu.sub_header"
            >  
                <v-subheader v-if="mymenu.sub_header">{{mymenu.sub_header}}</v-subheader> 
                <v-list-group
                :value="false"
                no-action
                sub-group
                >
                <template v-slot:activator>
                    <v-list-item-content>
                    <v-list-item-title>{{mymenu.group_title}}</v-list-item-title> 
                    </v-list-item-content>
                </template>
                <v-list-item
                    v-for="itm in mymenu.menu_title" 
                    :key="itm.title"
                    :to="itm.to"
                    link
                >
                    <v-list-item-title>{{itm.title}}</v-list-item-title>
                    <v-list-item-icon>
                    <v-icon>{{ itm.icon }}</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                </v-list-group>
            </div>
        </div>
        <!-- for Groups END-->


      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
      app
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      prominent
    >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-title>SCT Paradigm</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items
          class="hidden-sm-and-down"
          v-for="design in designs"
          :key="design.title"
          
          link
        >
          <v-btn text :to="design.to">
            {{design.title}}
          </v-btn>
          <v-divider vertical></v-divider>
        </v-toolbar-items>
      </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      menu_lists: [
        { sub_header: 'USER INTERFACE', group_title: 'Dashboard', menu_title:
            [
                {title: 'Analytics', icon: 'mdi-google-analytics', to:'analytics'},
                {title: 'Blank',icon:  'mdi-book-open-blank-variant', to:'blank'},
                {title: 'Dark Theme',icon:  'mdi-theme-light-dark', to:'dark_theme'},
                {title: 'Default',icon:  'mdi-circle-outline', to:'defaults'},
                {title: 'Light Theme',icon:  'mdi-theme-light-dark', to:'light_theme'},
                {title: 'Minimalist',icon:  'mdi-window-closed', to:'minimalist'},
                {title: 'Orders',icon:  'mdi-dip-switch', to:'orders'},
                {title: 'Projects',icon:  'mdi-folder-cog-outline', to:'projects'},
            ]
        },   
        { sub_header: '', group_title: 'Layouts', menu_title:
            [
                {title: 'Searches', icon: 'mdi-magnify', to:'searches'},
                {title: 'Sides',icon:  'mdi-page-layout-sidebar-left', to:'sides'},
                {title: 'Top-Down',icon:  'mdi-page-layout-header-footer', to:'top-down'},
            ]
        }, 
        { sub_header: 'TOOLKITS', group_title: 'Components', menu_title:
            [
                {title: 'Alerts', icon: 'mdi-alarm-light-outline', to:'alerts'},
                {title: 'Background', icon: 'mdi-border-all-variant', to:'background'},
                {title: 'Badges', icon: 'mdi-badge-account-horizontal', to:'badges'},
                {title: 'Borders', icon: 'mdi-border-all', to:'borders'},
                {title: 'Calendars', icon: 'mdi-calendar', to:'calendar'},
                {title: 'Cards', icon: 'mdi-smart-card', to:'cards'},
                {title: 'Chips', icon: 'mdi-chip', to:'chips'},
                {title: 'Code Blocks', icon: 'mdi-code-braces', to:'code-blocks'},
                {title: 'Collapsible', icon: 'mdi-collapse-all', to:'collapsible'},
                {title: 'Dialog', icon: 'mdi-message-bookmark', to:'dialog'},
                {title: 'Drop Downs', icon: 'mdi-form-dropdown', to:'drop-downs'},
                {title: 'Floats', icon: 'mdi-molecule', to:'floats'},
                {title: 'Grid', icon: 'mdi-grid', to:'grid'},
                {title: 'Icons', icon: 'mdi-emoticon-cool', to:'icons'},
                {title: 'List', icon: 'mdi-view-list-outline', to:'lists'},
                {title: 'Modals', icon: 'mdi-train-car-intermodal', to:'modals'},
                {title: 'Navigation', icon: 'mdi-navigation', to:'navs'},
                {title: 'Progress', icon: 'mdi-dlna', to:'progress'},
                {title: 'Ripples', icon: 'mdi-asterisk-circle-outline', to:'ripples'},
                {title: 'Shadows', icon: 'mdi-box-shadow', to:'shadows'},
                {title: 'Slider',icon:  'mdi-landslidee', to:'slider'},
                {title: 'Spinners',icon:  'mdi-spin', to:'spinners'},
                {title: 'Tabs',icon:  'mdi-folder-table', to:'tabs'},
                {title: 'Texts',icon:  'mdi-clipboard-text', to:'texts'},
                {title: 'Toasts',icon:  'mdi-toaster', to:'toasts'},
                {title: 'Tool Tips',icon:  'mdi-tools', to:'tool-tips'},
                {title: 'Transform',icon:  'mdi-horse-variant-fast', to:'transform'},
                {title: 'Tree',icon:  'mdi-family-tree', to:'tree'},
                {title: 'Typography',icon:  'mdi-typewriter', to:'typography'},
            ]
        },   
        { sub_header: '', group_title: 'Forms', menu_title:
            [
                {title: 'Buttons', icon: 'mdi-gesture-tap-button', to:'buttons'},
                {title: 'Check Boxes',icon:  'mdi-checkbox-multiple-marked-outline', to:'check-boxes'},
                {title: 'Embed',icon:  'mdi-ember', to:'embed'},
                {title: 'File Uplods',icon:  'mdi-file-upload', to:'file-uploads'},
                {title: 'Hidden',icon:  'mdi-file-hidden', to:'hiddens'},
                {title: 'Input',icon:  'mdi-audio-input-stereo-minijack', to:'input-types'},
                {title: 'Radio',icon:  'mdi-checkbox-multiple-marked-circle-outline', to:'radio-buttons'},
                {title: 'Select',icon:  'mdi-checkbox-multiple-blank-circle-outline', to:'select-options'},
            ]
        }, 
        { sub_header: '', group_title: 'Utilities', menu_title:
            [
                {title: 'Expansion Panel',icon:  'mdi-expansion-card-variant', to:'expansion-panels'},
                {title: 'Pagination',icon:  'mdi-book-open-outline', to:'paginations'},
            ]
        }, 
        { sub_header: 'MULTIMEDIA', group_title: 'Images', menu_title:
            [
                {title: 'Avatars', icon: 'mdi-rabbit-variant-outline', to:'avatars'},
                {title: 'Background',icon:  'mdi-math-norm-box', to:'backgrounds'},
                {title: 'Carousel',icon:  'mdi-view-carousel-outline', to:'carousel'},
                {title: 'Gallery',icon:  'mdi-view-column', to:'galleries'},
                {title: 'Styled Pictures',icon:  'mdi-picture-in-picture-bottom-right', to:'styled-pictures'},
            ]
        },
        { sub_header: 'PLUGINS', group_title: 'JS Libraries', menu_title:
            [
                {title: 'Alerts', icon: 'mdi-bell-badge', to:'alerts'},
                {title: 'Data Tables',icon:  'mdi-file-table-box-multiple-outline', to:'db-tables'},
                {title: 'Date Time Pickers',icon:  'mdi-calendar-weekend-outline', to:'datetimepickers'},
                {title: 'PDF',icon:  'mdi-file-pdf-box', to:'pdfs'},
            ]
        }, 
      ], //end of menu list
      designs: [
        { title: 'Download Theme', to:'DownloadableDesigns_index' },
        { title: 'Project Based', to:'ProjectBasedDesigns_index' },
        { title: 'Single Elements', to:'SingleElementDesigns_index' },
        { title: 'Theme Categories', to:'ThemeBasedDesigns_index' },
      ],
      top_pages: [
        { title: 'Home', icon: 'mdi-home-city', to:'/' },
        { title: 'About', icon: 'mdi-help-box', to:'about' },
        { title: 'How it Works', icon: 'mdi-cogs', to:'how_it_works' },
      ],
      })
  }
</script>

      