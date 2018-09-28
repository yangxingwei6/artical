~function () {
    var myChart = echarts.init(ET1);
    var option = {
        title: {
            text: '2018年高考高分率省份排名',
            subtext: '全国卷1',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%)"
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 8
                        }
                    }
                }
            }
        },
        calculable: true,
        series: [
            {
                name: '高分率',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 6.28, name: '河北'},
                    {value: 4.75, name: '湖北'},
                    {value: 4.33, name: '山东'},
                    {value: 3.97, name: '湖南'},
                    {value: 3.52, name: '福建'},
                    {value: 3.44, name: '安徽'},
                    {value: 3.24, name: '江西'},
                    {value: 2.25, name: '河南'},
                    {value: 1.87, name: '山西'},
                    {value: 1.55, name: '广东'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET2);
    var option = {
        title: {
            text: '2018年河北高考一分一档表',
            subtext: '分段',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['文科人数', '理科人数'],
            x: 'left',
            orient: 'vertical'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisLabel: {interval: 0},
                data: ['1-100', '\n101-200', '201-300', '\n301-400', '401-500', '\n501-600', '601-700及以上']
            }
        ],
        yAxis: [
            {
                type: 'value',
                position: 'right'
            }
        ],
        series: [
            {
                name: '文科人数',
                type: 'bar',
                data: [266, 2603, 18954, 44598, 39763, 28003, 7151],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                    ]
                },
            },
            {
                name: '理科人数',
                type: 'bar',
                data: [82, 1668, 17968, 48728, 68938, 65954, 22696],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                    ]
                },

            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET3);
    var option = {
        title: {
            text: '2018年高考文理科高分人数',
            subtext: '全国卷2',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['文科人数', '理科人数'],
            x: '0%',
            y: '20%',
            orient: 'vertical'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['辽宁', '\n新疆', '重庆', '\n吉林', '黑龙江', '\n陕西', '内蒙古', '\n宁夏', '甘肃', '\n青海'],
                axisLabel:{
                    interval: 0
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                position: 'right'
            }
        ],
        series: [
            {
                name: '文科人数',
                type: 'bar',
                data: [1354, 521, 485, 558, 215, 1263, 357, 327, 116, 29],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '理科人数',
                type: 'bar',
                data: [11865, 9452, 10950, 6043, 5911, 8212, 4213, 735, 2938, 166],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                    ]
                },
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET4);
    var option = {
        title: {
            text: '2018年高考高分率省份排名',
            subtext: '全国卷3',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%)"
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 5
                        }
                    }
                }
            }
        },
        series: [
            {
                name: '高分率',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 4.85, name: '四川'},
                    {value: 4.48, name: '云南'},
                    {value: 2.39, name: '贵州'},
                    {value: 2.06, name: '广西'},
                    {value: 0.79, name: '西藏'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET5);
    var option = {
        title: {
            text: '2018年高考文理科高分人数',
            subtext: '全国卷1',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['文科人数', '理科人数'],
            x: 'left',
            orient: 'vertical'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['河北', '\n湖北', '山东', '\n湖南', '福建', '\n安徽', '江西', '\n河南', '山西', '\n广东'],
                axisLabel:{
                    interval: 0
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                position: 'right'
            }
        ],
        series: [
            {
                name: '文科人数',
                type: 'bar',
                data: [7358, 4590, 5255, 6013, 1912, 3920, 3351, 5809, 785, 2838],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '理科人数',
                type: 'bar',
                data: [23169, 13166, 20350, 11914, 5127, 13243, 8962, 16314, 4907, 8882],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                    ]
                },
            }
        ]
    };
    myChart.setOption(option);
}();
