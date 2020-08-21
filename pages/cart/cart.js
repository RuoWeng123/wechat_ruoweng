
Page({
	data: {
		deleteModalHidden: true,
		wantToDeleteItem: '',
		address: null,
		cartItems: [],
		amount: 0,
		unitList: [
			{ value: '渠道二维码', label: '渠道二维码', path:"images/qrcode.png" },
			{ value: '群激活码', label: '群激活码', path: "images/group_qrcode.png" },
			{ value: '删人提醒', label: '删人提醒', path: "images/delete_warning.png" },
			{ value: '流失客户', label: '流失客户', path: "images/customer_loose.png" },
			{ value: '朋友圈展示', label: '朋友圈展示', path: "images/moments.png" },
			{ value: '客户跟进', label: '客户跟进', path: "images/customer_note.png" },
			{ value: '快速恢复', label: '快速恢复', path: "images/quick_reply.png" }
		]
	},

	onLoad: function (params) {
	},

	onShow: function (params) {
	
	},

	bindTapAddress() {
		wx.navigateTo({
			url: '../qrcode/qrcode'
		})
	}
})
