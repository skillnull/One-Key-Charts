import { defineComponent } from "vue"
import "./index.scss"
import Charts from "../components/TransformToCharts"

const Entry = defineComponent({
  name: "Entry",
  setup() {
    return () => (
      <div class="wrap">
        <Charts content={"hello"} />
      </div>
    )
  }
})

export default Entry
