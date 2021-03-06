import {defineComponent, reactive} from "vue"
import "./index.scss"
import Charts from "../components/TransformToCharts"

const Entry = defineComponent({
  name: "Entry",
  setup() {
    const state = reactive({
      data: {
        "2020-10-28": [
          15580.34,
          33349.19,
          51980.25,
          67019.97,
          76496.79,
          85875.44,
          92937.64,
          98328.19,
          106149.32,
          112469.95,
          119545.04,
          123544.37,
          126390.5,
          128962.75,
          134361.69,
          136924.9,
          136924.9,
          138894.68,
          141280.2,
          144087.59,
          147357.92,
          149626.12,
          151948.08,
          154572.32,
          158761.97,
          158761.97,
          160952.26,
          162864.36,
          165334.82,
          167617.39,
          171468.92,
          178874.7,
          186067.35,
          193046.34,
          200685.31,
          208069.97,
          217186.74,
          232270.91,
          246245.09,
          269113.27,
          288342.32,
          304439.51,
          332294.44,
          349868.96,
          371863.89,
          392387.48,
          414408.51,
          436402.02,
          465457.16,
          500495.99,
          530276.77,
          570204.77,
          607206.79,
          643612.36,
          683778.94,
          725754.66,
          771120.06,
          811284.34,
          857033.04,
          914343.56,
          956364.13,
          1012562.19,
          1067776.15,
          1125690.05,
          1174616.29,
          1230180.82,
          1280265.75,
          1337815.0,
          1387997.5,
          1441504.93,
          1489369.57,
          1521539.94,
          1566608.9,
          1610916.6,
          1669086.49,
          1722258.75,
          1776350.45,
          1833783.77,
          1892886.4,
          1941209.49,
          1989167.77,
          2032885.73,
          2080109.22,
          2125159.28,
          2170678.24,
          2220050.01,
          2264440.97,
          2308014.85,
          2360144.62,
          2409410.6,
          2459906.47,
          2505597.76,
          2555890.61,
          2605274.92,
          2649500.09,
          2693453.49,
          2743100.74,
          2784183.05,
          2826834.21,
          2862985.72,
          2903874.76,
          2939374.44,
          2978483.42,
          2997209.97,
          3020438.15,
          3044143.88,
          3064737.77,
          3084028.23,
          3105821.93,
          3141491.22,
          3178480.48,
          3217177.43,
          3256692.11,
          3298396.62,
          3338255.91,
          3387041.68,
          3444160.72,
          3497454.36,
          3547076.79,
          3600343.64,
          3648810.93,
          3701658.02,
          3745672.4,
          3795940.78,
          3847485.47,
          3884927.94,
          3914059.38,
          3948482.47,
          3967270.02,
          3980222.44,
          3992991.49,
          4010354.4,
          4033633.05,
          4061316.6,
          4094446.11,
          4136286.52,
          4164538.21,
          4188349.83,
          4209015.57,
          4231746.42,
          4251005.3,
          4267155.42,
          4281521.8
        ],
        "2020-11-03": [
          18330.02,
          34830.41,
          48892.52,
          59997.21,
          72442.62,
          79121.57,
          89351.58,
          97043.17,
          104294.11,
          111168.07,
          119000.93,
          126336.58,
          132410.01,
          138155.53,
          142169.98,
          149983.75,
          153528.13,
          157131.4,
          158858.27,
          161882.32,
          165261.92,
          169059.93,
          172264.49,
          175461.15,
          177429.05,
          182759.22,
          184340.35,
          187183.11,
          190059.3,
          192770.59,
          197905.61,
          205062.37,
          213578.08,
          222139.09,
          234722.52,
          242728.26,
          254062.85,
          262739.43,
          277705.42,
          291511.9,
          308414.92,
          329040.6,
          347095.23,
          369844.77,
          392897.14,
          414046.94,
          436136.96,
          463131.15,
          489423.03,
          519301.31,
          552965.07,
          584026.5,
          628831.37,
          680296.39,
          725512.68,
          776378.01,
          822354.5,
          883589.45,
          935169.73,
          988328.24,
          1043240.74,
          1097602.34,
          1151308.35,
          1214116.61,
          1264960.94,
          1323659.41,
          1384906.26,
          1447558.38,
          1498394.27,
          1543038.18,
          1585657.22,
          1628408.39,
          1669404.43,
          1725345.82,
          1786826.64,
          1859045.94,
          1924921.06,
          1986660.63,
          2044740.13,
          2109985.4,
          2171172.7,
          2224480.8,
          2278221.28,
          2337651.63,
          2397275.04,
          2443866.93,
          2501646.45,
          2553372.46,
          2609409.36,
          2670431.87,
          2726510.51,
          2783101.83,
          2836778.35,
          2893818.56,
          2950349.92,
          3015694.8,
          3066954.6,
          3133396.31,
          3182363.29,
          3229748.65,
          3281616.0,
          3329009.71,
          3371893.81,
          3415861.23,
          3453006.86,
          3489896.5,
          3524079.47,
          3567499.88,
          3607914.52,
          3644216.91,
          3682427.5,
          3720669.64,
          3767343.52,
          3807305.61,
          3856844.26,
          3906300.4,
          3964537.16,
          4019958.73,
          4072357.97,
          4126226.91,
          4185596.33,
          4241824.0,
          4298952.69,
          4350822.69,
          4406370.57,
          4457864.83,
          4510290.13,
          4560221.87,
          4602015.76,
          4647697.2,
          4680047.35,
          4713995.71,
          4745753.5,
          4783619.5,
          4814849.16,
          4841001.66,
          4867666.81,
          4893495.14,
          4921580.85,
          4947931.32,
          4969258.68,
          4985721.6,
          4999183.7
        ],
        "2020-11-04": [
          14640.37,
          27610.78,
          43579.62,
          52496.86,
          64283.6,
          75025.18,
          85872.42,
          96776.12,
          104422.0,
          112070.37,
          121160.06,
          130420.43,
          137547.11,
          145956.15,
          154410.49,
          156733.47,
          164690.66,
          169438.71,
          177811.35,
          181036.61,
          183524.17,
          186700.71,
          190061.2,
          193724.14,
          201477.24,
          205095.01,
          209507.82,
          214330.13,
          218379.27,
          222395.38,
          230984.91,
          241569.68,
          253417.55,
          268462.31,
          276670.1,
          287729.44,
          297492.69,
          316873.99,
          333581.77,
          352572.89,
          367880.97,
          392793.99,
          417253.83,
          438865.26,
          467295.23,
          493153.58,
          521386.57,
          548423.47,
          569499.17,
          608124.74,
          636847.29,
          674366.66,
          722299.31,
          773696.54,
          819019.88,
          864979.12,
          924773.94,
          984437.83,
          1037078.37,
          1102973.13,
          1166683.61,
          1212835.69,
          1271451.11,
          1323299.07,
          1373161.8,
          1430372.65,
          1484533.8,
          1535073.27,
          1583778.42,
          1627876.3,
          1664601.81,
          1706796.56,
          1744573.7,
          1800818.55,
          1861987.38,
          1921158.63,
          1973695.06,
          2025028.2,
          2090397.14,
          2155178.97,
          2220400.86,
          2281758.48,
          2336553.13,
          2396534.86,
          2452838.43,
          2509472.72
        ]
      },
      xAxis: [
        "00:10",
        "00:20",
        "00:30",
        "00:40",
        "00:50",
        "01:00",
        "01:10",
        "01:20",
        "01:30",
        "01:40",
        "01:50",
        "02:00",
        "02:10",
        "02:20",
        "02:30",
        "02:40",
        "02:50",
        "03:00",
        "03:10",
        "03:20",
        "03:30",
        "03:40",
        "03:50",
        "04:00",
        "04:10",
        "04:20",
        "04:30",
        "04:40",
        "04:50",
        "05:00",
        "05:10",
        "05:20",
        "05:30",
        "05:40",
        "05:50",
        "06:00",
        "06:10",
        "06:20",
        "06:30",
        "06:40",
        "06:50",
        "07:00",
        "07:10",
        "07:20",
        "07:30",
        "07:40",
        "07:50",
        "08:00",
        "08:10",
        "08:20",
        "08:30",
        "08:40",
        "08:50",
        "09:00",
        "09:10",
        "09:20",
        "09:30",
        "09:40",
        "09:50",
        "10:00",
        "10:10",
        "10:20",
        "10:30",
        "10:40",
        "10:50",
        "11:00",
        "11:10",
        "11:20",
        "11:30",
        "11:40",
        "11:50",
        "12:00",
        "12:10",
        "12:20",
        "12:30",
        "12:40",
        "12:50",
        "13:00",
        "13:10",
        "13:20",
        "13:30",
        "13:40",
        "13:50",
        "14:00",
        "14:10",
        "14:20",
        "14:30",
        "14:40",
        "14:50",
        "15:00",
        "15:10",
        "15:20",
        "15:30",
        "15:40",
        "15:50",
        "16:00",
        "16:10",
        "16:20",
        "16:30",
        "16:40",
        "16:50",
        "17:00",
        "17:10",
        "17:20",
        "17:30",
        "17:40",
        "17:50",
        "18:00",
        "18:10",
        "18:20",
        "18:30",
        "18:40",
        "18:50",
        "19:00",
        "19:10",
        "19:20",
        "19:30",
        "19:40",
        "19:50",
        "20:00",
        "20:10",
        "20:20",
        "20:30",
        "20:40",
        "20:50",
        "21:00",
        "21:10",
        "21:20",
        "21:30",
        "21:40",
        "21:50",
        "22:00",
        "22:10",
        "22:20",
        "22:30",
        "22:40",
        "22:50",
        "23:00",
        "23:10",
        "23:20",
        "23:30",
        "23:40",
        "23:50"
      ],
      height: "500px",
      themes: ["#4cb9e5", "#40a9ff", "#52c41a"]
    })

    function changeTheme(color) {
      document
        .getElementsByTagName("body")[0]
        .style.setProperty("--primary_bg_color", color)
    }

    return () => (
      <div class="wrap">
        <div class="themes">
          {state.themes.map(item => {
            return (
              <div
                onClick={_ => changeTheme(item)}
                style={{backgroundColor: item}}
                class="inline-block sk-btn-primary"
              >
                {item}
              </div>
            )
          })}
        </div>
        <Charts data={state.data} xAxis={state.xAxis} height={state.height} />
      </div>
    )
  }
})

export default Entry
