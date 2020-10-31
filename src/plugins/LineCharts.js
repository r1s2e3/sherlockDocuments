import { Line } from './BaseCharts'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
      datasets: [
        {
          label: 'расспознанные',
          backgroundColor: 'rgba(183, 157, 96, 0.2)',
          data: [5, 15, 10, 20, 35, 40, 50]
        },
        {
          label: 'не расспознанные',
          backgroundColor: 'rgba(190, 211, 246, 0.5)',
          data: [22, 31, 20, 60, 39, 20, 40]
        },
        {
          label: 'разница',
          backgroundColor: 'rgba(56, 116, 114, 0.8)',
          data: [40, 40, 45, 30, 70, 60, 90]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
