


$(document).ready(function(){

    // 图表开始
    var myChart1 = echarts.init(document.getElementById('charts1'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            show:true,
            confine:true,
        },
        // color: ['#C39D94','#E67450','#86D0AB', '#6CA67E','#E78405','#C39D94'],
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
        // },
        series: [
            {
                name:'福田金融车联网',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    normal: {
                        position: 'inner',
                        textStyle: {
                            fontsize:8,
                            //默认12
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                    }
                },
                data:[
                    {value:335, name:'离线', selected:true},
                    {value:679, name:'在线'},
                    {value:1548, name:'停车'}
                ]
            },
            {
                name:'福田金融车联网',
                type:'pie',
                radius: ['35%', '60%'],
                label: {
                    normal: {
                        show:true,
                        textStyle: {
                            fontSize:'1rem',
                            //默认12
                        }
                    }
                },

                labelLine: {
                    normal: {
                        show: true,
                        length: 5,
                        length2: 5,
                    }
                },
                data:[
                    {value:335, name:'泵送金融'},
                    {value:310, name:'欧辉金融零售'},
                    {value:234, name:'卡车金融'},
                    {value:135, name:'瑞沃金融'},
                    {value:1048, name:'起重机金融'},
                    {value:251, name:'轻型车金融'},
                ]
            }
        ]
    };
    myChart1.setOption(option,true);



    var myChart2 = echarts.init(document.getElementById('charts2'));
    var option2 = {
        tooltip: {
            trigger: 'axis',
            axis: 'auto',
            axisPointer : {
                type : 'shadow',
                lineStyle:{
                    color:'#e5e8f2'
                }
            }
        },
        color: ['#3398DB'],
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        legend: {
            data:['新增量']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '新增量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} '
                }
            },

        ],
        series: [
            {
                name:'新增量',
                type:'bar',
                data:[100, 49, 70, 232, 256, 76, 135, 162, 32, 200, 64, 33]
            }

        ]
    };
    myChart2.setOption(option2,true);

})