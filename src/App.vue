<template>
  <div>
    <transition mode="out-in">
      <router-view/>
    </transition>
    <div
      v-if="isLoading"
      class="loader"
    >
      <div class="loader-text">
        Загрузка файла на сервер.....{{ percentage ? percentage : '' }}%
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      isLoading () {
        return !!this.$store.state.isLoading
      },
      percentage () {
        return this.$store.state.percentage
      }
    }
  }
</script>

<style lang="scss">
  @import "@/styles/index.scss";
  .v-datatable thead th.column.sortable i {
    vertical-align: unset;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: rgba(22, 22, 22, 0.9);
  }
  .loader-text {
    height: 200px;
    width: 100%;
    color: #fff;
    justify-content: center;
    display: flex;
    font-size: 20px;
  }
</style>

