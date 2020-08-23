// pages/customer/customer.js
import * as R from '../../lib/ramda.min.js'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    keyword:"",
		selectedIndex: 0,
		showFilterCover: false,
		modal:{},
    statusList:[
      "新增", 
      "待跟进", 
      "初步沟通", 
      "已拒绝"
		],
		filterFields:{
			company:[],
			customer:[],
			sex:[],
			status:[],
			borthday:[]
		},
		companyTagList:["电商","医美","教育"],
		customerTagList:["90后","70后","医美大佬"],
		sexTagList:["男","女","未知"],
		statusTagList:["初步沟通","有意向","无意向"],
		borthdayTagList:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
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
		this.bindShowFilterPage()
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
	},
	bindShowFilterPage(){
		console.log("====")
		let objModal = {
      show: true,
			title: '',
			showTitle: false,
      showCancel: true,
      height: '70%'
    }
    this.setData({
      modal: objModal
    })
	},

	showModal: function() {
    
  },
  /**
   * 弹框按钮操作事件
   * @res 取消/确定按钮的相关信息
   */
  modalOperate: function(res) {
    if (res.detail.res == 'confirm') {
			console.log('confirm')
			console.log(this.data.filterFields)
			this.getFilterData()
    } else if (res.detail.res == 'cancel') {
      console.log('cancel')
    }
	},
	
	bindChangeCheckCompanyTag(res){
		let updateFields = this.data.filterFields
		updateFields.company = res.detail.value
		this.setData({
			filterFields: updateFields
		})
	},
	
	bindChangeCheckCustomerTag(res){
		let updateFields = this.data.filterFields
		updateFields.customer = res.detail.value
		this.setData({
			filterFields: updateFields
		})
	},
	
	bindChangeCheckSexTag(res){
		let updateFields = this.data.filterFields
		updateFields.sex = res.detail.value
		this.setData({
			filterFields: updateFields
		})
	},
	
	bindChangeCheckStatusTag(res){
		let updateFields = this.data.filterFields
		updateFields.status = res.detail.value
		this.setData({
			filterFields: updateFields
		})
	},
	
	bindChangeCheckBorthdayTag(res){
		let updateFields = this.data.filterFields
		updateFields.borthday = res.detail.value
		this.setData({
			filterFields: updateFields
		})
	},

	bindChangeKeyword(e){
		this.setData({
			keyword: e.detail.value
		})
		this.getFilterData()
	},

	getFilterData(){
		let params = {
			keyword: this.data.keyword,
			...this.data.filterFields
		}
		console.log("搜索参数",params)
	}
})