// pages/customer/customer.js
import * as R from '../../lib/ramda.min.js'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    keyword:"",
    selectedIndex: 0,
    statusList:[
      "新增", 
      "待跟进", 
      "初步沟通", 
      "已拒绝"
    ],
    customerList:[
      { id: "001", name: "杨开", sex: "男", status: '新增', tags: ["友好", "待跟进"], path: "../../images/user-icon.png" },
      { id: "002", name: "两科", sex: "女", status: '待跟进', tags: ["友好", "待跟进"], path: "../../images/user-icon.png" },
      { id: "003", name: "习大大", sex: "女", status: '初步沟通', tags: ["拒绝"], path: "../../images/user-icon.png" },
      { id: "004", name: "曾国藩", sex: "男", status: '已拒绝', tags: ["友好", "待跟进"], path: "../../images/user-icon.png" }
    ]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

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

  bindChangeStatus: function(data){
    console.log(data)
    let statusIndex = Number(data.detail.value)

    let target = this.data.customerList[this.data.selectedIndex]
    let original = this.data.customerList
    original[this.data.selectedIndex] = Object.assign({}, target, {status: this.data.statusList[statusIndex]})
    this.setData({
      customerList: original
    })
  },
  changeSelectedCustomer(e){
    let index = e.currentTarget.dataset.index
    this.setData({
      selectedIndex: index
    })
    console.log(this.data.selectedIndex)
  }
})