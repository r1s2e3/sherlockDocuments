<template>
  <v-container
    fill-height
    fluid>
    <div class="search">
      <div class="doc-fields-bnt-groups">

      </div>
      <div class="search--field">
        <v-text-field
          v-model="searchText"
          label="Поиск по документам..."
          outlined
          clearable
        >
        </v-text-field>
        <v-overflow-btn
          :items="dropdown_edit"
          label="Режим поиска"
          @update:searchInput="updateActivity"
        />
      </div>
      <div class="search--main" v-if="searchFromFields">
        <div class="search--tree">
          <v-treeview
            v-model="tree"
            :open="open"
            :items="typesOfDocs"
            item-children="attributes.name"
            activatable
            item-key="name"
            open-on-click
            :search="searchText"
          >
            <template v-slot:prepend="{ item, open }">
              <v-icon v-if="!item.file">
                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
              </v-icon>
              <v-icon v-else>
                {{ typesOfDocs[item.file] }}
              </v-icon>
            </template>
          </v-treeview>
        </div>
      </div>
      <div v-else>
        <div>
          <document-fields :document="typesOfDocs"/>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
  import DocumentFields from './DocumentFields'
  export default {
    name: 'Search',
    components: {
      DocumentFields
    },
    data: () => ({
      searchText: '',
      isOpenType: true,
      typesOfDocs: {},
      searchFromFields: true,
      searchFromApi: false,
      searchWay: '',
      open: ['public'],
      files: {
        html: 'mdi-language-html5',
        jpg: 'mdi-file-image',
        json: 'mdi-json',
        md: 'mdi-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel'
      },
      dropdown_edit: [
        {
          text: 'Полнотекстовый'
        },
        {
          text: 'По списку типов'
        }
      ],
      tree: [],
      items: [
        {
          name: '.git'
        },
        {
          name: 'node_modules'
        },
        {
          name: 'public',
          children: [
            {
              name: 'static',
              children: [{
                name: 'logo.png',
                file: 'png'
              }]
            },
            {
              name: 'favicon.ico',
              file: 'png'
            },
            {
              name: 'index.html',
              file: 'html'
            }
          ]
        },
        {
          name: '.gitignore',
          file: 'txt'
        },
        {
          name: 'babel.config.jpg',
          file: 'jpg'
        },
        {
          name: 'package.json',
          file: 'json'
        },
        {
          name: 'README.md',
          file: 'md'
        },
        {
          name: 'vue.config.js',
          file: 'js'
        },
        {
          name: 'yarn.lock',
          file: 'txt'
        }
      ]
    }),
    methods: {
      updateActivity (el) {
        console.log('2', el)
        if (el === 'Полнотекстовый') {
          this.searchFromFields = false
          this.searchFromApi = true
        } else {
          this.searchFromFields = true
          this.searchFromApi = false
        }
      },
      getTypes () {
        this.$store.dispatch('getAllTypes')
          .then((resp) => {
            this.typesOfDocs = resp
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    mounted () {
      this.getTypes()
    }
  }
</script>

<style lang="scss">
  .active {
    background-color: #387472 !important;
  }
  .non-active {
    background-color: rgba(200, 200, 200, 0.2) !important;
  }
  .search {
    align-items: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &--field {
      width: 66%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    &--tree {
      /*width: 100%;*/
    }
    &--main {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
  .text-left {
    display: flex;
  }
  .v-select {
    width: 100px;
  }
  .v-treeview-node--click>.v-treeview-node__root,
  .v-treeview-node--click>.v-treeview-node__root>.v-treeview-node__content>* {
    font-size: 18px;
  }
</style>

