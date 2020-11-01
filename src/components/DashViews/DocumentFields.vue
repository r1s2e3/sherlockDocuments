<template>
  <div v-if="inWaitDoc">
    <h3>Документ в процессе расспознования...</h3>
  </div>
  <div v-else class="doc-fields">
    <div class="doc-fields-bnt-groups">
      <v-btn
        :class="[isDisplayData ? 'active' : 'non-active ']"
        dark
        class="mb-2"
        @click="changeView(true)">
        Набор атрибутов
      </v-btn>
      <v-btn
        :class="[isDisplayImg ? 'active' : 'non-active ']"
        dark
        class="mb-2"
        @click="changeView(false)">
        Изображение
      </v-btn>
    </div>
    <div v-if="isDisplayData">
      <div class="doc-fields--dialog">
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="fouth_theme" dark class="mb-2" v-on="on">Добавить поле</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Атрибут"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.calories" label="Значение"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.fat" label="Раздел атрибута"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" flat @click="close">Закрыть</v-btn>
              <v-btn color="white" flat @click="save">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div>
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
          hide-actions
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                @click="editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </td>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </div>
      </div>

    <div v-if="isDisplayImg">
      <v-img src="https://picsum.photos/510/300?random" aspect-ratio="2"></v-img>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DocumentFields',
    data: () => ({
      inWaitDoc: false,
      isDisplayData: true,
      isDisplayImg: false,
      dialog: false,
      headers: [
        {
          text: 'Атрибут',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Значения',
          value: 'calories',
          sortable: false
        },
        {
          text: 'Раздел атрибута',
          value: 'fat',
          sortable: false
        },
        {
          text: ' ',
          value: 'carbs',
          sortable: false
        }
      ],
      desserts: [],
      editedIndex: - 1,
      editedItem: {
        name: '',
        calories: '',
        fat: ''
      },
      defaultItem: {
        name: '',
        calories: '',
        fat: ''
      }
    }),
    props: {
      document: {
        type: Object
      }
    },
    computed: {
      formTitle () {
        return this.editedIndex === - 1 ? 'Добавить новый атрибут' : 'Изменить Атрибут'
      }
    },

    watch: {
      dialog (val) {
        // eslint-disable-next-line no-unused-expressions
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      changeView (way) {
        if (way) {
          this.isDisplayData = true
          this.isDisplayImg = false
        } else {
          this.isDisplayData = false
          this.isDisplayImg = true
        }
      },
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem () {},

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = - 1
        }, 300)
      },

      save () {
        if (this.editedIndex > - 1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
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
  .doc-fields {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    &-bnt-groups {
      display: flex;
      justify-content: center;
      padding-bottom: 50px;
    }
    &--dialog {
      display: flex;
      justify-content: center;
    }
  }
</style>
