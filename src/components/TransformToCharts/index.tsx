import {defineComponent, getCurrentInstance, reactive, onMounted} from "vue"
import {thousandsFormateTofixed} from "/@/library/common"
import echarts from "echarts"
import "/@/assets/themes/walden.js"
import "./index.scss"

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
      charts_height: "300px",
      charts_type: [
        {type: "line", name: "折线图"},
        {type: "bar", name: "柱状图"},
        {type: "bullet", name: "子弹图"},
        {type: "bullet_across", name: "横向子弹图"},
        {type: "scatter", name: "散点图"},
        {type: "pie", name: "饼图"}
        // { type: "radar", name: "雷达图" }
      ]
    })

    // 渲染图表
    function renderCharts(type, id, style?) {
      const chart_data: any = {
        data: props.data,
        xAxis: props.xAxis,
        type: type
      }
      const data_length =
        (chart_data.data &&
          chart_data.data[0] &&
          chart_data.data[0].data &&
          chart_data.data[0].data.length) ||
        4

      let chart_dom: HTMLElement = document.getElementById(id)
      if (!chart_dom) return

      const chart = echarts.init(chart_dom, "walden")
      let series = []
      let option = {}
      const grid = {
        left: "6%",
        right: "6%",
        bottom: "12%"
      }
      const toolbox = {
        show: true,
        right: "6%",
        top: 10,
        feature: {
          dataZoom: {
            show: true,
            title: {zoom: "区域缩放", back: "区域缩放还原"}
          },
          restore: {show: true, title: "还原"}
        }
      }
      const legend = {
        top: 0,
        left: "6%",
        padding: 0,
        data: []
      }

      switch (chart_data.type) {
        case "line":
          for (let ele in chart_data.data) {
            legend.data.unshift(ele)
            series.unshift({
              name: ele,
              type: chart_data.type,
              smooth: true,
              symbolSize: 0,
              data: chart_data.data[ele],
              animation: false,
              lineStyle: {
                width: 1
              }
            })
          }
          option = {
            title: {
              text: chart_data.name || "",
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
            toolbox: toolbox,
            legend: legend,
            animation: false,
            xAxis: {
              type: "category",
              boundaryGap: true,
              nameLocation: "start",
              axisLabel: {
                show: true,
                inside: false,
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
              data: chart_data.xAxis
            },
            yAxis: {
              type: "value"
            },
            grid: grid,
            series: series
          }
          break
        case "bar":
          for (let ele in chart_data.data) {
            legend.data.unshift(ele)
            series.unshift({
              name: ele,
              type: chart_data.type,
              smooth: true,
              symbolSize: 0,
              data: chart_data.data[ele],
              animation: false,
              lineStyle: {
                width: 1
              }
            })
          }
          option = {
            title: {
              text: chart_data.name || "",
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
            toolbox: toolbox,
            legend: legend,
            animation: false,
            xAxis: {
              type: "category",
              boundaryGap: true,
              nameLocation: "start",
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: true,
                inside: false,
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
              data: chart_data.xAxis
            },
            yAxis: {
              type: "value"
            },
            grid: grid,
            series: series
          }
          break
        case "bullet": {
          const _chart_data: any = []
          for (let item in chart_data.data) {
            _chart_data.push({
              name: item,
              data: chart_data.data[item]
            })
          }

          for (let [idx, ele] of _chart_data.entries()) {
            legend.data.unshift(ele)
            if (idx === 0) {
              series = [
                {
                  name: ele.name,
                  type: "bar",
                  barGap: "-300%",
                  barWidth: 20,
                  z: 10,
                  data: ele.data,
                  animation: false
                }
              ]
            }
            if (idx > 0) {
              series.unshift({
                name: ele.name,
                type: "scatter",
                symbol: "rect",
                silent: true,
                symbolSize: [30, 5],
                symbolOffset: [0, 0],
                z: 20,
                animation: false,
                data: ele.data
              })
            }
          }

          option = {
            title: {
              text: chart_data.name || "",
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
            legend: legend,
            xAxis: {
              boundaryGap: true,
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: true,
                inside: false,
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
              data: chart_data.xAxis
            },
            yAxis: {
              type: "value",
              inverse: chart_data.inverse,
              splitLine: {
                show: false
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            grid: grid,
            series: series
          }

          break
        }
        case "bullet_across": {
          const _chart_data: any = []
          for (let item in chart_data.data) {
            _chart_data.push({
              name: item,
              data: chart_data.data[item]
            })
          }

          for (let [idx, ele] of _chart_data.entries()) {
            legend.data.unshift(ele)
            if (idx === 0) {
              series = [
                {
                  name: ele.name,
                  type: "bar",
                  barGap: "-300%",
                  barWidth: 20,
                  z: 10,
                  data: ele.data,
                  animation: false
                }
              ]
            }
            if (idx > 0) {
              series.unshift({
                name: ele.name,
                type: "scatter",
                symbol: "rect",
                silent: true,
                symbolSize: [30, 5],
                symbolOffset: [0, 0],
                z: 20,
                animation: false,
                data: ele.data
              })
            }
          }

          option = {
            title: {
              text: chart_data.name || "",
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
            legend: legend,
            xAxis: {
              show: true,
              type: "value",
              inverse: false,
              axisLine: {
                show: true
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            yAxis: {
              show: true,
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
              data: chart_data.xAxis
            },
            grid: grid,
            series: series
          }

          break
        }
        case "scatter":
          for (let ele in chart_data.data) {
            legend.data.unshift(ele)
            const item_arr = []
            for (let [index, value] of chart_data.xAxis.entries()) {
              item_arr.push([value, ele, chart_data.data[ele][index]])
            }
            series.unshift({
              name: ele,
              data: item_arr,
              type: chart_data.type,
              symbol: "pin",
              symbolOffset: [0, 0],
              symbolSize: function (data) {
                return data[2] ? 20 : 0
              },
              itemStyle: {
                shadowBlur: 0,
                shadowOffsetY: 0
              }
            })
          }
          option = {
            title: {
              show: false,
              text: chart_data.name,
              textStyle: {
                fontSize: 14
              }
            },
            legend: legend,
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
                const result = `${params.marker} ${params.seriesName} ${params.value[0]} <br> ${params.value[2]}`
                return result
              }
            },
            series: series
          }
          break
        case "pie":
          for (let ele in chart_data.data) {
            series.unshift({
              name: ele,
              type: chart_data.type,
              radius: ["45%", "70%"],
              center: ["50%", "50%"],
              label: {
                show: true,
                distanceToLabelLine: 1,
                fontSize: 10,
                formatter: "{a}{b}({d}%)",
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
              data: chart_data.data[ele]
            })
          }
          option = {
            title: {
              text: chart_data.name || "",
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
                const result = `${params.marker}${params.seriesName}(${
                  params.dataIndex
                }) : ${thousandsFormateTofixed(params.value, 2, true)}(${
                  params.percent
                }%)`
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
              data: legend
            },
            series: series
          }
          break
        case "radar":
          option = {
            title: {
              text: chart_data.name || "",
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
                const xAxis = chart_data.xAxis
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
              data: chart_data.legend,
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
              indicator: chart_data.xAxis
            },
            series: chart_data.data
          }
          break
        default:
          break
      }

      chart.clear()
      chart.setOption(option)
      chart_dom.setAttribute(
        "style",
        style || `width:100%;height:${state.charts_height}`
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

    onMounted(() => {
      renderCharts("line", "chart")
    })

    return () => (
      <div class="convert-chart-box">
        <div v-click-outside="close" class="convert-chart-content">
          <div class="header">
            {state.charts_type.map((item, index) => {
              return (
                <div
                  class="title sk-btn-primary"
                  onClick={() => renderCharts(item.type, "chart")}
                >
                  {item.name}
                </div>
              )
            })}
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
