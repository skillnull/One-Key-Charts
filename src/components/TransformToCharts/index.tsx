import {defineComponent, getCurrentInstance, reactive} from "vue"
import {thousandsFormateTofixed} from "../../library/common"
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
    const state = reactive({
      chartsHeight: "300px"
    })

    // 渲染图表
    function renderCharts(item, id, style?) {
      let chart_dom: HTMLElement = document.getElementById(id)
      if (!chart_dom) return
      const chart = echarts.init(chart_dom, "walden")
      const series = []
      let option = {}
      const data_length =
        (item.data &&
          item.data[0] &&
          item.data[0].data &&
          item.data[0].data.length) ||
        4
      switch (item.type) {
        case "line":
          item.data &&
            item.data.length > 0 &&
            item.data.map((ele, idx) => {
              series.push({
                name: ele.name,
                type: item.type,
                smooth: true,
                symbolSize: 4,
                data: ele.data,
                animation: false
              })
            })
          option = {
            title: {
              text: item.name || "",
              top: 10,
              left: "center",
              textStyle: {
                fontSize: 12,
                fontWeight: 400
              }
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
                label: {
                  backgroundColor: "#6a7985"
                }
              },
              confine: true
            },
            toolbox: {
              show: true,
              right: 0,
              top: 10,
              feature: {
                dataZoom: {
                  show: true,
                  title: {zoom: "区域缩放", back: "区域缩放还原"}
                },
                restore: {show: true, title: "还原"}
              }
            },
            legend: {
              top: 0,
              left: "5%",
              padding: 0,
              data: item.legend
            },
            animation: false,
            xAxis: {
              type: "category",
              boundaryGap: true,
              nameLocation: "start",
              axisLabel: {
                show: true,
                inside: false,
                interval: 0,
                rotate: 0,
                fontSize: 10,
                color: "#555",
                formatter: value => {
                  const valueDetal = value.split("-").join("")
                  let ret = "" // 拼接加\n返回的类目项
                  const maxLength = data_length > 5 ? 3 : 5 // 每项显示文字个数
                  const valLength = valueDetal.length // X轴类目项的文字个数
                  const rowN = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
                  if (rowN > 1) {
                    // 如果类目项的文字大于3,
                    for (var i = 0; i < rowN; i++) {
                      let temp = "" // 每次截取的字符串
                      const start = i * maxLength // 开始截取的位置
                      const end = start + maxLength // 结束截取的位置
                      // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                      temp = valueDetal.substring(start, end) + "\n"
                      ret += temp // 凭借最终的字符串
                    }
                    return ret
                  } else {
                    return valueDetal
                  }
                }
              },
              axisTick: {
                show: true,
                alignWithLabel: true
              },
              splitLine: {
                show: false
              },
              data: item.xAxis
            },
            yAxis: {
              type: "value"
            },
            grid: {
              left: "14%",
              right: 0,
              bottom: "12%"
            },
            series: series
          }
          break
        case "bar":
          item.data &&
            item.data.length > 0 &&
            item.data.map((ele, idx) => {
              series.push({
                name: ele.name,
                type: item.type,
                smooth: true,
                barGap: "0%",
                data: ele.data,
                animation: false
              })
            })
          option = {
            title: {
              text: item.name || "",
              top: 10,
              left: "center",
              textStyle: {
                fontSize: 12,
                fontWeight: 400
              }
            },
            tooltip: {
              trigger: "axis",
              confine: true,
              axisPointer: {
                type: "shadow",
                label: {
                  backgroundColor: "#6a7985"
                }
              }
            },
            toolbox: {
              show: true,
              right: 0,
              top: 10,
              feature: {
                dataZoom: {
                  show: true,
                  title: {zoom: "区域缩放", back: "区域缩放还原"}
                },
                restore: {show: true, title: "还原"}
              }
            },
            legend: {
              top: 0,
              left: "5%",
              padding: 0,
              data: item.legend
            },
            animation: false,
            xAxis: {
              type: "category",
              boundaryGap: true,
              nameLocation: "start",
              interval: true,
              axisLabel: {
                show: true,
                inside: false,
                interval: 0,
                rotate: 0,
                fontSize: 10,
                color: "#555",
                formatter: value => {
                  const valueDetal = value.split("-").join("")
                  let ret = "" // 拼接加\n返回的类目项
                  const maxLength = data_length > 5 ? 3 : 5 // 每项显示文字个数
                  const valLength = valueDetal.length // X轴类目项的文字个数
                  const rowN = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
                  if (rowN > 1) {
                    // 如果类目项的文字大于3,
                    for (var i = 0; i < rowN; i++) {
                      let temp = "" // 每次截取的字符串
                      const start = i * maxLength // 开始截取的位置
                      const end = start + maxLength // 结束截取的位置
                      // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                      temp = valueDetal.substring(start, end) + "\n"
                      ret += temp // 凭借最终的字符串
                    }
                    return ret
                  } else {
                    return valueDetal
                  }
                }
              },
              axisTick: {
                show: true,
                alignWithLabel: true
              },
              data: item.xAxis
            },
            yAxis: {
              type: "value"
            },
            grid: {
              left: "14%",
              right: 0,
              bottom: "18%"
            },
            series: series
          }
          break
        case "pie":
          series.push({
            name: item.name,
            type: item.type,
            radius: ["45%", "70%"],
            center: ["50%", "55%"],
            label: {
              show: true,
              distanceToLabelLine: 1,
              fontSize: 10,
              formatter: "{b}({d}%)",
              position: "outside"
            },
            labelLine: {
              length2: 5
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 10,
                fontWeight: "bold"
              },
              itemStyle: {
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            animation: false,
            data: item.data
          })
          option = {
            title: {
              text: item.name || "",
              top: 0,
              left: "center",
              textStyle: {
                fontSize: 12,
                fontWeight: 400
              }
            },
            tooltip: {
              trigger: "item",
              confine: true,
              formatter: params => {
                const result = `${params.marker}${
                  params.name
                } : ${thousandsFormateTofixed(params.value, 2, true)}`
                return result
              }
            },
            legend: {
              show: false,
              icon: "roundRect",
              left: 5,
              top: -5,
              itemHeight: 8,
              itemWidth: 18,
              orient: "vertical",
              data: item.legend
            },
            series: series
          }
          break
        case "bullet":
          item.data &&
            item.data.length > 0 &&
            item.data.map((ele, idx) => {
              series.push(ele)
            })
          option = {
            title: {
              text: item.name || "",
              top: 15,
              left: "center",
              textStyle: {
                fontSize: 12,
                fontWeight: 400
              }
            },
            tooltip: {
              show: true,
              trigger: "axis",
              confine: true,
              showDelay: 0,
              formatter: params => {
                const result = []
                params &&
                  params.length > 0 &&
                  params.map(item => {
                    result.push(
                      `<div>${item.marker} ${
                        item.seriesName
                      } : ${thousandsFormateTofixed(
                        item.value,
                        2,
                        false
                      )}</div>`
                    )
                  })
                return result.join("")
              },
              extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {
              data: item.legend,
              icon: "roundRect",
              left: 5,
              top: -5,
              itemHeight: 8,
              itemWidth: 18
            },
            xAxis: {
              boundaryGap: true,
              axisLine: {
                show: true
              },
              axisLabel: {
                show: true,
                inside: false,
                interval: 0,
                rotate: 0,
                fontSize: 10,
                color: "#555",
                formatter: value => {
                  const valueDetal = value.split("-").join("")
                  let ret = "" // 拼接加\n返回的类目项
                  const maxLength = data_length > 5 ? 3 : 5 // 每项显示文字个数
                  const valLength = valueDetal.length // X轴类目项的文字个数
                  const rowN = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
                  if (rowN > 1) {
                    // 如果类目项的文字大于3,
                    for (var i = 0; i < rowN; i++) {
                      let temp = "" // 每次截取的字符串
                      const start = i * maxLength // 开始截取的位置
                      const end = start + maxLength // 结束截取的位置
                      // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                      temp = valueDetal.substring(start, end) + "\n"
                      ret += temp // 凭借最终的字符串
                    }
                    return ret
                  } else {
                    return valueDetal
                  }
                }
              },
              data: item.xAxis
            },
            yAxis: {
              type: "value",
              inverse: item.inverse,
              splitLine: {
                show: false
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            grid: {
              left: 0,
              right: 0,
              bottom: 0,
              containLabel: true
            },
            series: series
          }
          break
        case "bullet_across":
          item.data &&
            item.data.length > 0 &&
            item.data.map((ele, idx) => {
              series.push(ele)
            })
          option = {
            title: {
              text: item.name || "",
              top: 15,
              left: "center",
              textStyle: {
                fontSize: 12,
                fontWeight: 400
              }
            },
            tooltip: {
              show: true,
              trigger: "axis",
              confine: true,
              showDelay: 0,
              formatter: params => {
                const result = []
                params &&
                  params.length > 0 &&
                  params.map(item => {
                    result.push(
                      `<div>${item.marker} ${
                        item.seriesName
                      } : ${thousandsFormateTofixed(
                        item.value,
                        2,
                        false
                      )}</div>`
                    )
                  })
                return result.join("")
              },
              extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {
              data: item.legend,
              icon: "roundRect",
              left: 5,
              top: -5,
              itemHeight: 8,
              itemWidth: 18
            },
            xAxis: {
              show: item.showX,
              type: "value",
              inverse: item.inverse,
              axisLine: {
                show: true
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            yAxis: {
              show: item.showY,
              type: "category",
              splitLine: {
                show: false
              },
              axisLabel: {
                show: true,
                inside: false,
                interval: 0,
                rotate: 0,
                fontSize: 10,
                color: "#555",
                formatter: value => {
                  const valueDetal = value.split("-").join("")
                  let ret = "" // 拼接加\n返回的类目项
                  const maxLength = 5 // 每项显示文字个数
                  const valLength = valueDetal.length // X轴类目项的文字个数
                  const rowN = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
                  if (rowN > 1) {
                    // 如果类目项的文字大于3,
                    for (var i = 0; i < rowN; i++) {
                      let temp = "" // 每次截取的字符串
                      const start = i * maxLength // 开始截取的位置
                      const end = start + maxLength // 结束截取的位置
                      // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                      temp = valueDetal.substring(start, end) + "\n"
                      ret += temp // 凭借最终的字符串
                    }
                    return ret
                  } else {
                    return valueDetal
                  }
                }
              },
              data: item.xAxis
            },
            grid: {
              left: 0,
              right: 0,
              bottom: 0,
              containLabel: true
            },
            series: series
          }
          break
        case "scatter":
          option = {
            title: {
              show: false,
              text: item.name,
              textStyle: {
                fontSize: 14
              }
            },
            legend: {
              right: 10,
              data: []
            },
            xAxis: {
              type: "category",
              boundaryGap: true,
              offset: -25,
              splitLine: {
                show: false
              }
            },
            yAxis: {
              type: "category",
              show: false,
              splitLine: {
                show: false
              },
              scale: true
            },
            grid: {
              top: 0,
              left: "3%",
              right: "1%",
              bottom: "5%"
            },
            tooltip: {
              trigger: "item",
              enterable: false,
              confine: true,
              position: function (point, params, dom, rect, size) {
                // 固定在顶部
                return [point[0], "10%"]
              },
              formatter: function (params) {
                const result = `${params.value[0]} <br> ${params.value[2]}`
                return result
              }
            },
            series: [
              {
                name: "",
                data: item.data[0],
                type: item.type,
                symbol: "pin",
                symbolSize: function (data) {
                  return data[2] ? 20 : 0
                },
                itemStyle: {
                  shadowBlur: 0,
                  shadowOffsetY: 0
                }
              }
            ]
          }
          break
        case "radar":
          option = {
            title: {
              text: item.name || "",
              top: 15,
              left: "center",
              textStyle: {
                fontSize: 12,
                fontWeight: 400
              }
            },
            tooltip: {
              confine: true,
              formatter: params => {
                const xAxis = item.xAxis
                const value = params.value
                const result = []
                xAxis &&
                  xAxis.length > 0 &&
                  xAxis.map((ele, idx) => {
                    value &&
                      value.length > 0 &&
                      value.map((v, k) => {
                        if (idx === k) {
                          result.push(
                            `${ele.name} : ${thousandsFormateTofixed(
                              v,
                              2,
                              false
                            )}`
                          )
                        }
                      })
                  })
                return `${params.marker} ${params.name} <br/> ${result.join(
                  "<br/>"
                )}`
              }
            },
            legend: {
              data: item.legend,
              icon: "roundRect",
              left: 5,
              top: -5,
              itemHeight: 8,
              itemWidth: 18
            },
            radar: {
              name: {
                textStyle: {
                  color: "#333",
                  fontSize: 10
                }
              },
              nameGap: 3,
              splitNumber: 1,
              shape: "circle",
              splitArea: {
                areaStyle: {
                  color: ["rgba(64, 158, 255, 0.1)"],
                  shadowColor: "rgba(64, 158, 255, 0.5)",
                  shadowBlur: 5
                }
              },
              splitLine: {
                lineStyle: {
                  color: ["#b3d8ff"]
                }
              },
              radius: "65%",
              center: ["50%", "60%"],
              indicator: item.xAxis
            },
            series: item.data
          }
          break
        default:
          break
      }
      chart.clear()
      chart.setOption(option)
      chart_dom.setAttribute(
        "style",
        style || `width:100%;height:${state.chartsHeight}`
      )
      resizeEhartsSize(chart)
    }

    // resize echarts size
    function resizeEhartsSize(instance) {
      instance.resize()
      window.addEventListener("resize", () => {
        instance.resize()
      })
    }

    return () => (
      <div class="convert-chart-box">
        <div v-click-outside="close" class="convert-chart-content">
          <div class="header">
            <div
              class="title"
              onClick={() =>
                renderCharts(
                  {data: props.data, xAxis: props.xAxis, type: "line"},
                  "chart"
                )
              }
            >
              一键图表
            </div>
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
