import { defineComponent } from "vue"

interface ChartsProps {
  content: string
}

const Charts = defineComponent({
  name: "TransformToCharts",
  setup(props: ChartsProps, { slots }) {
    return () => (
      <>
        <span>{props.content}</span>
      </>
    )
  }
})

export default Charts
