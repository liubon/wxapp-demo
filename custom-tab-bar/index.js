// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    pagesList:[
      { 
        name:'home',
        text: '组件',
        icon:'home-o',
        pagePath: "/pages/index/index",
      }, {
        name:'data',
        text: '接口',
        icon:'search',
        pagePath: '/pages/index-with-data/index',
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      const index = event.detail
      const url = this.data.pagesList[index].pagePath
      this.setData({ active: index });
      wx.switchTab({url})
    }
  }
})
