import {
  defineComponent,
  watchEffect,
  inject,
  getCurrentInstance,
  toRef
} from "vue"

const Charts = defineComponent({
  name: "TransformToCharts",
  props: {
    content: String
  },
  setup() {
    const { props } = getCurrentInstance()

    return () => (
      <>
        <span>{props.content}</span>
      </>
    )
  }
})

export default Charts
