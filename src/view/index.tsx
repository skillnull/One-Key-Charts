import { defineComponent } from "vue"
import "./index.scss"

const Entry = defineComponent({
  name: "Entry",
  setup() {
    return () => (
      <>
        <div class="wrap">demo</div>
      </>
    )
  }
})

export default Entry
