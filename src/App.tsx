import { defineComponent } from "vue"
import Entry from "./view/index"

export default defineComponent({
  name: "App",
  components: { Entry },
  setup() {
    return () => <Entry></Entry>
  }
})
