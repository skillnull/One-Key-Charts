import {defineComponent, getCurrentInstance} from "vue"
import echarts from "echarts"

const Charts = defineComponent({
  name: "TransformToCharts",
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    xAxis: {
      type: Array,
      default: () => {
        return []
      }
    },
    height: {
      type: String,
      default: () => {
        return "250px"
      }
    }
  },
  setup() {
    const {props} = getCurrentInstance()

    console.log(echarts)

    return () => (
      <div class="convert-chart-box">
        <div v-click-outside="close" class="convert-chart-content">
          <div class="header">
            <div class="title">一键图表</div>
          </div>
        </div>
        <div class="content">
          <div id="chart"></div>
        </div>
      </div>
    )
  }
})

export default Charts
