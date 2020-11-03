import { defineComponent, provide } from "vue"
import "./index.scss"
import Charts from "../components/TransformToCharts"

const Entry = defineComponent({
  name: "Entry",
  setup() {
    const content = "hello world"

    return () => (
      <div class="wrap">
        <Charts content={content} />
      </div>
    )
  }
})

export default Entry
