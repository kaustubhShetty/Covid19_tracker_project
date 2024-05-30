<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true, // Ensures the Y-axis starts at zero
                min: 0 // Ensures no negative values on the Y-axis
              }
            }
          ]
        }
      })
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>


<!-- <script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  
}
</script> -->