<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <div class="statistic-data">
      <div class="statistic-data--main">
        <div class="Chart">
          <h3 style="text-align:center;">Качество обработки</h3>
          <line-charts/>
        </div>
        <div class="Chart">
          <h3 style="text-align:center;">Точность по типам</h3>
          <polar-charts/>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import LineCharts from '../../plugins/LineCharts'
import PolarCharts from '../../plugins/PolarCharts'

export default {
  name: 'Dashboard',
  components: {
    LineCharts,
    PolarCharts
  },
  data () {
    return {}
  }
}

</script>

<style lang="scss">
  .statistic-data {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &--main {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: space-around;
    }
  }

  .Chart {
    padding: 20px;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    margin: 20px 0;
  }
</style>
