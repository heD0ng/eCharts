(function () {
    var myChart = echarts.init(document.querySelector('.bar .chart'))
    let option = {
        // 柱子的颜色
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['旅游', '教育', '游戏', '医疗', '电商', '社交', '金融'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '13'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '13'
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [200, 300, 300, 900, 1500, 1200, 600]
            }
        ]
    };
    myChart.setOption(option)
    // 让图表适配屏幕
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();

// 横向柱状图
(function () {
    var myChart = echarts.init(document.querySelector('.bar-row .chart'))
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
    let option = {
        grid: {
            left: '0%',
            right: '0%',
            top: '5%',
            bottom: '0%',
            containLabel: true
        },
        // 不显示x轴的信息
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                data: ['html', 'css', 'js', 'react', 'node'],
                // y轴的坐标轴
                axisLine: {
                    show: false
                },
                // 刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '13'
                }
            },
            {
                type: 'category',
                data: [900, 700, 600, 800, 500],
                // y轴的坐标轴
                axisLine: {
                    show: false
                },
                // 刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '13'
                }
            }
        ],
        series: [
            {
                name: '圆角',
                type: 'bar',
                // 柱子之间距离
                // barCategoryGap: 20,
                barWidth: 12,
                data: [70, 34, 60, 78, 69]
                , itemStyle: {
                    // 柱子圆角
                    barBorderRadius: 20,
                    // 此时的color可以修改柱子颜色
                    // param：每个柱子对象的详细信息
                    color: function (params) {
                        return myColor[params.dataIndex]
                    },

                },
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                    fontSize: '8'
                },
                yAxisIndex: 0
            },
            {
                name: '框',
                type: 'bar',
                barWidth: 12,
                data: [100, 100, 100, 100, 100]
                , itemStyle: {
                    // 柱子圆角
                    barBorderRadius: 20,
                    // 此时的color可以修改柱子颜色
                    // param：每个柱子对象的详细信息
                    color: 'none',
                    borderWidth: 1,
                    borderColor: '#00c1de'
                },
                // 多个y轴时才生效
                yAxisIndex: 1
            }
        ]
    };
    myChart.setOption(option)
    // 让图表适配屏幕
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();


// 模拟中国地图飞行模块
(function () {
    var myChart = echarts.init(document.querySelector('.map-earth'))
    var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028],
        '大理': [101.03, 24.41],
        '布达拉宫': [91.1185792, 29.6554942]
    };

    var XAData = [
        [{ name: '武汉' }, { name: '北京', value: 100 }],
        [{ name: '武汉' }, { name: '上海', value: 100 }],
        [{ name: '武汉' }, { name: '哈尔滨', value: 100 }],
        [{ name: '武汉' }, { name: '深圳', value: 100 }],
        [{ name: '武汉' }, { name: '布达拉宫', value: 100 }]
    ];

    var XNData = [
        [{ name: '深圳' }, { name: '大理', value: 100 }],
        [{ name: '深圳' }, { name: '上海', value: 100 }],
        [{ name: '深圳' }, { name: '哈尔滨', value: 100 }],
        [{ name: '深圳' }, { name: '武汉', value: 100 }],
        [{ name: '深圳' }, { name: '北京', value: 100 }]
    ];

    var YCData = [
        [{ name: '大理' }, { name: '北京', value: 100 }],
        [{ name: '大理' }, { name: '深圳', value: 100 }],
        [{ name: '布达拉宫' }, { name: '上海', value: 100 }],
        [{ name: '布达拉宫' }, { name: '北京', value: 100 }],
        [{ name: '布达拉宫' }, { name: '哈尔滨', value: 100 }],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {

        var res = [];
        for (var i = 0; i < data.length; i++) {

            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;

    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
    var series = [];
    [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: 'red',   //arrow箭头的颜色
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
            {
                name: item[0] + ' Top3',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top3',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i],
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
                } else {
                    return params.name;
                }
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     top: 'bottom',
        //     left: 'right',
        //     data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
        //     textStyle: {
        //         color: '#fff'
        //     },
        //     selectedMode: 'multiple'
        // },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color: '#fff'
                }
            },
            zoom:1.1,
            roam: true,
            itemStyle: {
                normal: {
                    // 省份的背景颜色
                    areaColor: 'rgba(20, 41, 87, 0.7)',
                    borderColor: '#195BB9',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            }
        },
        series: series
    };
    myChart.setOption(option)
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();

(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));
  
    // (1)准备数据
    var data = {
      year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    };
  
    // 2. 指定配置和数据
    var option = {
      color: ["#00f2f1", "#ed3f35"],
      tooltip: {
        // 通过坐标轴来触发
        trigger: "axis"
      },
      legend: {
        // 距离容器10%
        right: "10%",
        // 修饰图例文字的颜色
        textStyle: {
          color: "#4c9bfd"
        }
        // 如果series 里面设置了name，此时图例组件的data可以省略
        // data: ["邮件营销", "联盟广告"]
      },
      grid: {
        top: "15%",
        left: "0%",
        right: "2%",
        bottom: "0%",
        show: true,
        borderColor: "#012f4a",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        // 去除刻度
        axisTick: {
          show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: "rgba(255,255,255,.7)"
        },
        // 去除x坐标轴的颜色
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        // 去除刻度
        axisTick: {
          show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: "rgba(255,255,255,.7)"
        },
        // 修改y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "#012f4a"
          }
        }
      },
      series: [
        {
          name: "新增粉丝",
          type: "line",
          stack: "总量",
          // 是否让线条圆滑显示
          smooth: true,
          data: data.year[0]
        },
        {
          name: "新增游客",
          type: "line",
          stack: "总量",
          smooth: true,
          data: data.year[1]
        }
      ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
  
    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();

(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".pie .chart"));
  
    option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function(p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        }
      },
      legend: {
        top: "85%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      series: [
        {
          name: "年龄分布",
          type: "pie",
          center: ["50%", "42%"],
          radius: ["40%", "60%"],
          color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#06b4ab",
            "#06c8ab",
            "#06dcab",
            "#06f0ab"
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 1, name: "0岁以下" },
            { value: 4, name: "20-29岁" },
            { value: 2, name: "30-39岁" },
            { value: 2, name: "40-49岁" },
            { value: 1, name: "50岁以上" }
          ]
        }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();