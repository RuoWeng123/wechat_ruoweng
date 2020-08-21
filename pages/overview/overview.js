import * as echarts from '../../ec-canvas/echarts'

let chart = null;

function initChart(canvas, width, height, dpr) {
	chart = echarts.init(canvas, null, {
		width: width,
		height: height,
		devicePixelRatio: dpr // new
	});
	canvas.setChart(chart);

	var option = {
		title: {
			show: true,
			text: '生产信息'
		},
		color: ['#37a2da', '#32c5e9', '#67e0e3'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			confine: true
		},
		legend: {
			data: ['计划', '实际', '差量']
		},
		grid: {
			left: 1,
			right: 50,
			bottom: 15,
			top: 40,
			containLabel: true
		},
		xAxis: [{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#999'
				}
			},
			axisLabel: {
				color: '#666'
			}
		}],
		yAxis: [{
			type: 'category',
			axisTick: {
				show: false
			},
			data: ['原煤', '精煤', '销量', '进尺'],
			axisLine: {
				lineStyle: {
					color: '#999'
				}
			},
			axisLabel: {
				color: '#666'
			}
		}],
		series: [{
			name: '计划',
			type: 'bar',
			label: {
				normal: {
					show: true,
					position: 'inside'
				}
			},
			data: [300, 270, 340, 344],
			itemStyle: {
				// emphasis: {
				//   color: '#37a2da'
				// }
			}
		},
		{
			name: '实际',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true
				}
			},
			data: [120, 302, 141, 174],
			itemStyle: {
				// emphasis: {
				//   color: '#32c5e9'
				// }
			}
		},
		{
			name: '差量',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'left'
				}
			},
			data: [20, -32, 21, 34],
			itemStyle: {
				color: function (data) {

					const arg = [...arguments]
					return arg[0].data < 0 ? '#B03A5B' : '#67e0e3'
				},
				emphasis: {
					color: '#ffffff'
				}
			}
		}
		]
	};

	chart.setOption(option);
	return chart;
}

function initPieChart(canvas, width, height, dpr) {
	chart = echarts.init(canvas, null, {
		width: width,
		height: height,
		devicePixelRatio: dpr // new
	});
	canvas.setChart(chart);

	var option = {
		title: {
			show: true,
			text: '报警信息'
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a}-{b}: {c} ({d}%)'
		},
		legend: {
			orient: 'vertical',
			left: 0,
			top: 30,
			data: ['瓦斯', '水文', '皮带', '猴车', '其他']
		},
		series: [{
			name: '报警',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				show: false,
				position: 'center'
			},
			emphasis: {
				label: {
					show: true,
					fontSize: '30',
					fontWeight: 'bold'
				}
			},
			labelLine: {
				show: false
			},
			data: [{
				value: 335,
				name: '瓦斯'
			},
			{
				value: 310,
				name: '水文'
			},
			{
				value: 234,
				name: '皮带'
			},
			{
				value: 135,
				name: '猴车'
			},
			{
				value: 1548,
				name: '其他'
			}
			]
		}]

	};

	chart.setOption(option);
	return chart;
}
Page({

  /**
   * 页面的初始数据
   */
	data: {
		timeRange: 'day',
		barChartData: {
			onInit: initChart
		},
		pieChartData: {
			onInit: initPieChart
		}
	},

  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		this.setData({
			'timeRange': 'day'
		})
		const params = {
			"type": "bulk",
			"args": [{
				"type": "select",
				"args": {
					"columns": ["location", "name", "code", "manager", "phone", "id"],
					"limit": 10,
					"offset": 0,
					"table": {
						"name": "basic_mine",
						"schema": "public"
					}
				}
			}, {
				"type": "count",
				"args": {
					"columns": ["location", "name", "code", "manager", "phone", "id"],
					"limit": 10,
					"offset": 0,
					"table": {
						"name": "basic_mine",
						"schema": "public"
					}
				}
			}]
		}
		wx.request({
			url: 'http://api.money.126.net/data/feed/0000001,money.api?callback=_ntes_quote_callback39672379',
			method: 'get',
			success: function (res) {
				console.log(res)
			}
		})
	},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
	onReady: function () {
		setTimeout(function () {
			// 获取 chart 实例的方式
			// console.log(chart)
		}, 2000);
	},

  /**
   * 生命周期函数--监听页面显示
   */
	onShow: function () {

	},

  /**
   * 生命周期函数--监听页面隐藏
   */
	onHide: function () {

	},

  /**
   * 生命周期函数--监听页面卸载
   */
	onUnload: function () {

	},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
	onPullDownRefresh: function () {

	},

  /**
   * 页面上拉触底事件的处理函数
   */
	onReachBottom: function () {

	},

  /**
   * 用户点击右上角分享
   */
	onShareAppMessage: function () {

	},

  /**
   * 用户点击右上角分享
   */
	radioChange: function (e) {
		console.log(this.data.timeRange)
		//	this.setData({'timeRange':e.detail.value})
	}
})