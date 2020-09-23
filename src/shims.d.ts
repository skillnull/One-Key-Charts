import Vue from "vue"

declare module "*.vue" {
  interface WithRender {
    <V extends typeof Vue>(component: V): V
  }

  const WithRender: WithRender
  export default WithRender
}
