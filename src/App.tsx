import { defineComponent } from "vue"
import Entry from "./view"

export default defineComponent({
  name: "App",
  setup() {
    return () => <Entry></Entry>
  }
})
