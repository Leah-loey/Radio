// pages/play/play.js

/**格式化时间 */
function add(m){return m<10?'0'+m:m}
function formatTime(time) {
  var f = parseInt(time /1000/ 60)
  var s = ((time/1000) % 60)
  return add(f) + ":" + add(s)
}
/**年月*/
function format(sjc){
  var time = new Date(sjc);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  return y+'年'+add(m)+'月';
}


Page({


    data: {
      testum:"",

      number:0,
      musicid:"1854216151",
      musicaid:"2487597023",
      action:{
        "method":"pause"
      },
      date:"pause",
      //歌名
      name:"",
      //歌曲图片
      img:"",
      //歌单作者
      author_name:"",
      //电台封面
      aimg:"",
      //专辑名字
      list_name:"",
      //作者头像
      author_img:"",
      //电台收藏
      collection:"",
      //明星专区
      type:"",
      //电台更新时间
      update_time:"",
      //发布时间
      release_time:"",
      //播放量
      listen:"",
      //简介
      introduce:"",
      //播放模式
      mode:'single', 
      //歌曲时间
      totaltime:"00:00",
      //目前播放时间
      playtime:"00:00",
      //进度条最大值
      max:0,
      //进度条目前移动值
      move:0,


      music:[
        {
            "src":"https://wx1.sinaimg.cn/mw690/007cqLudly1h0bn83uz6mj30mz0mtn42.jpg",
            "music_name":"【なにわ男子】Time View﹣果てなく続く道﹣ ",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1499651858",
            "id":"2487597023",
            "num":"0",
        },
        {
            "src":"https://qpic.y.qq.com/music_cover/0zTqR06mTRvSTzIYoQlyLpUOpNhY0vYXkUCGSFf1066iaXnb6J2lqmw/600?n=1",
            "music_name":"夢わたし",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1854216151",
            "id":"2489448039",
            "num":"1",
        },
        {
            "src":"https://wx4.sinaimg.cn/mw690/006atxnKgy1h0bn2mav4ej30u00u0780.jpg",
            "music_name":"シンデレラガール",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1809096075",
            "id":"2071311132",  
            "num":"2",
        },
        {
            "src":"https://wx2.sinaimg.cn/mw690/0073DuEDly1h0b12dr5b1j313e1kw10j.jpg",
            "music_name":"soda pop love",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1492355032",
            "id":"2070092690",
            "num":"3",
        },
        {
            "src":"https://wx4.sinaimg.cn/mw690/0073DuEDly1h0b12ev8baj31371kwqb4.jpg",
            "music_name":"Letter【西畑&道枝】",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1499660208",
            "id":"2070818004",
            "num":"4",
        },
        {
            "src":"https://wx4.sinaimg.cn/mw690/007CO5uXgy1h0ad1qb57ij30u011xdnw.jpg",
            "music_name":"夜這星",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1809092544",
            "id":"2071311133",
            "num":"5",
        },
        {
            "src":"https://wx1.sinaimg.cn/mw690/0073DuEDly1h0b111ny4lj313g1kw7e1.jpg",
            "music_name":"初心LOVE",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1892963295",
            "id":"2494377323",
            "num":"6",
        },
        {
            "src":"https://wx3.sinaimg.cn/mw690/0073DuEDly1h0b110ou60j31381kwtf8.jpg",
            "music_name":"僕空〜足あとのない未来〜",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1493773592",
            "id":"2070303152",
            "num":"7",
        },
        {
            "src":"https://wx2.sinaimg.cn/mw2000/0073DuEDly1h07h5x0ru2j31ax1kwk69.jpg",
            "music_name":"アオハル -With U With Me-",
            "music_tiem":"2021-03-05",
            "play":"1127",
            "music_id":"1493652653",
            "id":"2070262797",
            "num":"8",
        },

        ],
      

    },

    text:function(){
      var Num = this.data.musicid;
      wx.setStorage({//存储到本地
        key:"testNum",
        data:Num
      })
    },




    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
      // console.log(options)
      var mid=options.id
      var aid=options.mid
      var number=options.num
      // console.log(options)
      //this.setData({})更改data中的数据
      await this.setData({
        musicid:mid,
        musicaid:aid,
        number:number,
      })
      console.log(this.data.number)
      //页面渲染
      await this.network(aid)
      

    },  

    //曲目进度
    timechange:function(result){
      //匹配事件
      var playtime=result.detail.currentTime
      //设置当前播放时长
      //时间换算
      var m=playtime/60
      m=Math.floor(m)
      var s=playtime%60
      s=Math.floor(s)
      if(m<10){
        m="0"+m
      }
      if(s<10){
        s="0"+s
      }
      //曲目时长
      var totaltime=result.detail.duration
      var totaltime_m=Math.floor(totaltime/60)
      var totaltime_s=Math.floor(totaltime%60)
      if(totaltime_m<10){
        totaltime_m="0"+totaltime_m
      }
      if(totaltime_s<10){
        totaltime_s="0"+totaltime_s
      }

      this.setData({
        "playtime":m+":"+s,
        "totaltime":totaltime_m+":"+totaltime_s,
        "max":totaltime,
        "move":playtime,
      })
    },
    //拖动进度条
    sliderchange:function(even){
      //铺盖值
      var v=even.detail.value
      this.setData({
        move:v,
      })
      //播放器数据覆盖
      this.setData({
        action:{
          method:"setCurrentTime",
          data:v
        }
      })
      this.setData({
        action:{
          method:"play"
        }
      })
    },



    //播放状态更改的方法
    playdate:function(){
      // console.log(this.data.action.method)
      var date=this.data.action.method
      //判断当前状态是播放就暂停是暂停就播放
      if(date=="play"){
        this.setData({
          action:{
            "method":"pause"
          },
          date:"play"
        })
      }else{
        this.setData({
          action:{
            "method":"play"
          },
          date:"pause"
        })
      }

      
    },
    //播放模式切换 单曲/循环
    changemode:function(params){
      if(this.data.mode=='loop'){
        this.setData({
          mode:'single'
        })
      }else{
        this.setData({
          mode:'loop'
        })
      }
    },
    //当歌曲播放完毕执行
    changeMusic:function(){
      //判断当前模式
      //单曲 single
      var mode=this.data.mode
      if(mode=='single'){
        this.setData({
          musicid:this.data.musicid,
          musicaid:this.data.musicaid
        })
        //刷新播放状态
        this.setData({
          action:{
            method:"play"
          }
        })
      }else{
          var index=this.data.number;
          index++;
          if(index>=this.data.music.length){
          index=0;
        }
        this.setData({
          number:index,
          musicid:this.data.music[this.data.number].music_id,
          musicaid:this.data.music[this.data.number].id,
          action:{
            method:"pause"
          }
        })
        this.network(this.data.musicaid)
        this.playdate()
      }
    },

    //上一首
    lostsong:function(){
      var that=this
      console.log(this.data.number)
      var index=this.data.number;
      console.log(index)
      --index
      if(index === -1){
        index=this.data.music.length-1
      }
     setTimeout( async () => {
         await this.setData({
            number:index,
            musicid:this.data.music[index].music_id,
            musicaid:this.data.music[index].id,
            action:{
              method:"pause"
            }
        })
        this.network(that.data.musicaid)
      }, 100)
    },
    //循环播放下一首
    nextSong:function(){
      console.log(this.data.number)
      var index=this.data.number;
      console.log(index)
      index++;
      if(index>=this.data.music.length){
        index=0;
      }
      setTimeout(async () => {
        await this.setData({
          number:index,
          musicid:this.data.music[index].music_id,
          musicaid:this.data.music[index].id,
          action:{
            method:"pause"
          }

        })
        // console.log(this.data.number)
        await this.network(this.data.musicaid)
        // this.playdate()
      },100)
      
    },

    //网络请求接口函数
    network:function(id){
      //网络请求
      var that=this
      wx.request({
        url: 'https://music.163.com/api/dj/program/detail/?id='+id,
        success:async function(e){
          //成功回调函数  
          // console.log(e)
          //歌名
          await that.setData({
            //歌名
            name:e.data.program.name,
            //图片
            img:e.data.program.coverUrl,
            //歌单作者
            author_name:e.data.program.dj.nickname,
            //电台名字
            list_name:e.data.program.dj.brand,
            //电台封面
            aimg:e.data.program.radio.intervenePicUrl,
            //作者头像
            author_img:e.data.program.dj.avatarUrl,
            //电台收藏
            collection:e.data.program.radio.subCount,
            //明星专区
            type:e.data.program.radio.category,
            //电台更新时间
            update_time:format(e.data.program.radio.lastProgramCreateTime),
            //发布时间
            release_time:format(e.data.program.createTime),
            //播放量
            listen:e.data.program.listenerCount,
            //简介
            introduce:e.data.program.description
          })
          that.playdate()
        }
      })
    },
})