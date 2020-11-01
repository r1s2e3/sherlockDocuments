<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <div
        class="document-fields"
        v-if="!isUploadView"
      >
        <document-fields />
      </div>
      <v-flex
        v-else
        xs12
        md8
      >
        <div class="file">
          <div
            class="file-icon"
          >
            <file-pond
              ref="pond"
              :allow-multiple="false"
              max-files="1"
              class="rectangle-upload-image file-upload"
              label-idle="Выберите файл для загрузки"
              :instant-upload="false"
              @init="handleFilePondInit"
              @removefile="removeFile"
              @updatefiles="addFile"
              @activatefile="touchFile"
            />
          </div>
          <div
            v-if="file"
            class="file-text-help"
          >
            <p>Или перетащите сюда документ</p>
          </div>
          <div>
            <v-btn
              :disabled="!this.file"
              class="upload-file--btn"
              color="third_theme"
              @click="uploadFile">Загрузить документ</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapMutations } from 'vuex'
  import vueFilePond from 'vue-filepond'
  import DocumentFields from './DocumentFields'
  import 'filepond/dist/filepond.min.css'
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
  import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
  import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata'
  const FilePond = vueFilePond(FilePondPluginImagePreview, FilePondPluginFileMetadata, FilePondPluginFileEncode)

  export default {
    name: 'UploadFile',
    data () {
      return {
        file: [],
        isUploadView: true
      }
    },
    components: {
      FilePond,
      DocumentFields
    },
    methods: {
      ...mapMutations(['setLoading']),
      openNavigateWindow () {
        const { pond } = this.$refs
        pond.browse()
      },
      handleFilePondInit () {
        console.log('FileUpload has initialized')
      },
      touchFile () {
        console.log('сделать превью')
      },
      addFile () {
        const pond = this.$refs.pond
        const file = pond._pond.getFile()
        this.file = file.getFileEncodeDataURL()
        // this.file = atob(file.getFileEncodeBase64Strin())
      },
      removeFile () {
        this.file = ''
      },
      uploadFile () {
        const file = this.file
        this.setLoading(true)
        this.$store.dispatch('uploadFile', {
          file
        })
          .then(() => {
            this.setLoading(false)
            this.isUploadView = false
            console.log('успех')
          })
          .catch((err) => {
            this.setLoading(false)
            console.log(err)
          }
          )
      }
    }
  }
</script>

<style>
  .document-fields {
    height: 100%;
    width: 100%;
  }
  .upload-file--btn {
    height: 40px !important;
  }
  .file {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative
  }
  .file-text-help {
    position: absolute;
    top: 57%;
  }
  .file-upload {
    cursor: pointer;
  }

  .file-icon {
    background-image: url(../../assets/fileUploadGrey.svg);
    background-size: 180px;
    background-position: 52% 35%;
    width: 495px;
    height: 695px;

  }
  @media (max-width: 414px) {
    .file-icon {
      width: 300px;
      height: 450px;
    }
    .filepond--image-preview-wrapper {
      height: 420px !important;
      width: 280px !important;
    }
    .filepond--item {
      width: 280px !important;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .file-icon:hover {
    background-image: url(../../assets/fileUpload.svg);
  }

  .filepond--image-clip {
    height: 595px !important;
    width: 415px !important;
  }
  .filepond--image-canvas-wrapper {
    transform: none !important;
    transform-origin: 0 !important;
    height: 100% !important;
    width: 100% !important;
  }
  canvas {
    height: 100% !important;
    width: 450px !important;
  }
  @media (min-width: 30em) {
    .filepond--item {
      width: calc(50% - .5em);
    }
  }

  @media (min-width: 50em) {
    .filepond--item {
      width: calc(33.33% - .5em);
    }
  }
  .filepond--root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
    height: 650px !important;
  }

  /* use a hand cursor intead of arrow for the action buttons */
  .filepond--file-action-button {
    cursor: pointer;
  }

  .filepond--drop-label.filepond--drop-label {
    font-size: 24px;
  }

  /* the text color of the drop label*/
  .filepond--drop-label {
    color: #fff;
    cursor: pointer;
    height: 100%;
    padding-top: 150px;
  }

  /* underline color for "Browse" button */
  .filepond--label-action {
    text-decoration-color: #fff;
    cursor: pointer;
  }

  /* the background color of the filepond drop area */
  .filepond--panel-root {
    background-color: #fff;
    cursor: pointer;
  }

  /* the border radius of the drop area */
  .filepond--panel-root {
    border-radius: 9px;
  }

  /* the border radius of the file item */
  .filepond--item-panel {
    border-radius: 0.5em;
  }

  /* the background color of the file and file panel (used when dropping an image) */
  .filepond--item-panel {
    background-color: #555;
  }

  /* the background color of the drop circle */
  .filepond--drip-blob {
    background-color: #999;
  }

  /* the background color of the black action buttons */
  .filepond--file-action-button {
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* the icon color of the black action buttons */
  .filepond--file-action-button {
    color: white;
  }

  /* the color of the focus ring */
  .filepond--file-action-button:hover,
  .filepond--file-action-button:focus {
    box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.9);
  }

  /* the text color of the file status and info labels */
  .filepond--file {
    color: white;
  }

  /* error state color */
  [data-filepond-item-state*='error'] .filepond--item-panel,
  [data-filepond-item-state*='invalid'] .filepond--item-panel {
    background-color: red;
  }

  [data-filepond-item-state='processing-complete'] .filepond--item-panel {
    background-color: green;
  }

  /* bordered drop area */
  .filepond--panel-root {
    background-color: rgba(93,93,93,0.5);
    border: 2px dashed #fff3e0;
  }

  .filepond--image-preview-wrapper {
    height: 620px;
    width: 455px;
  }

  .filepond--item {
    width: 455px;
    margin-left: auto;
    margin-right: auto;
  }

</style>
