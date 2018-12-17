//index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NameInputFinish: null,
   
    deps: ['请选择...', '财监委', '财务部', '秘书部', '人力资源部', '社团部', '行政监察部',
      '公共关系部', '外联部', '媒体部', '宣传部', '思存工作室',
      '新媒体工作室', '文艺拓展部', '社团外联企划部'],
    DepChoice1:11,
    DepChoice2: 11,
    DepChoice3: 11,
  },
   
  applyment: function (e) {
    if (e.target.id ==  "AppDep1")
    {
      this.setData
      ({
          DepChoice1: e.detail.value
      })
    } else if (e.target.id == "AppDep2")
    {
      this.setData
        ({
          DepChoice2: e.detail.value
        })
    } else if (e.target.id == "AppDep3") {
      this.setData
        ({
          DepChoice3: e.detail.value
        })
    } 
  },
  
})


  

