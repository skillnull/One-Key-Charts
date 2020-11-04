import {defineComponent, getCurrentInstance} from "vue"

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

    return () => (
      <div class="convert-chart-box">
        <div v-click-outside="close" class="convert-chart-content">
          <div class="header">
            <div class="title">一键图表</div>
          </div>
        </div>
        <div class="content"></div>
      </div>
    )
  }
})

export default Charts
