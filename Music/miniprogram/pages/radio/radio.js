// // pages/radio/radio.js

Page({

    data: {
      isPlay:false,
      musicCtx:"",

      imgUrls: [{
          url: 'https://p1.music.126.net/vsGbbcL_P3kOZAQ2MesNzA==/109951167125788640.jpg?imageView&quality=89',
        },
        {
          url: 'https://p1.music.126.net/s2rXB9LXgTRn1lzPp0-0uw==/109951167124180532.jpg?imageView&quality=89',
        },
        {
          url: 'https://p1.music.126.net/ASJYGHeGqIT7AGUu2kjOKw==/109951167124192143.jpg?imageView&quality=89',
          
        },
      ],
  
      swiperIndex: 0, //这里不写第一次启动展示的时候会有问题

      musicbox:[
        {"src":"https://qpic.y.qq.com/music_cover/0zTqR06mTRvSTzIYoQlyLpUOpNhY0vYXkUCGSFf1066iaXnb6J2lqmw/600?n=1",
        "songname":"なにわ男子",
        "id":"796893464",
        },
        {"src":"https://p1.music.126.net/dGiz4-481JoZSleRLNNCdA==/109951166291130146.jpg?param=200y200",
        "songname":"✨杰尼斯组曲✨",
        "id":"796893464",
        },
        {"src":"https://p2.music.126.net/KMYMUWm_7ZtlSx48Rl5lqw==/109951166226763165.jpg?param=200y200",
        "songname":"なにわ男子 南泥湾!!2021.7.28 决定cd出道",
        "id":"796893464",
        },
        {"src":"https://p2.music.126.net/GTEzAcXxNrKcJD3Dn7GywQ==/109951166884830771.jpg?param=200y200",
        "songname":"SnowMan雪人",
        "id":"796893464",
        },
        {"src":"https://p1.music.126.net/irgv_-RYhJV2_dZAXQJiEQ==/109951163457865971.jpg?param=200y200",
        "songname":"King & Prince",
        "id":"796893464",
        },
        {"src":"https://p2.music.126.net/m72s0ekTJ65Sl02nx47kuA==/109951166633362198.jpg?param=200y200",
        "songname":"EXO星球公告💫",
        "id":"796893464",
        },
      ],

      musicbox1:[
        {"src":"https://p1.music.126.net/h_i-aGZDphrQGfBYX87hjA==/18986366789078020.jpg?param=200y200",
        "songname":"陈立农的专属电台",
        "id":"526677683",
        },
        {"src":"https://p2.music.126.net/_XKhkCCuh04OwAA0Mkry2w==/3427177756983580.jpg?param=200y200",
        "songname":"LOEY工作室",
        "id":"963593064",
        },
        {"src":"https://p2.music.126.net/-EbCLSThWqwhylMkBRcXpw==/109951165177377574.jpg?param=200y200",
        "songname":"KYOONG~",
        "id":"795022390",
        },
      ],


      musicbox2:[
        {"src":"https://p1.music.126.net/UdDi2iDb9jMPXET7YqnINw==/109951164787633003.jpg?param=200y200",
        "songname":"EXO的Dora原声小站子",
        "id":"793547365",
        },
        {"src":"https://p1.music.126.net/t903HlzIXeYB9AV9AQfIgg==/109951164764654892.jpg?param=200y200",
        "songname":"岚ARASHIの全方位电台",
        "id":"340029065",
        },
        {"src":"https://p2.music.126.net/To5FyqUIayUQSSHDrk3P-A==/109951167046525882.jpg?param=200y200",
        "songname":"泰兰德",
        "id":"971707139",
        },
      ],

      // musicbox:[],
      //word表示输入框的值
      word:"",
      text:"【なにわ男子】Time View﹣果てなく続く道﹣ ",

    },

    onLoad:function(){
      this.data.musicCtx=wx.createInnerAudioContext();
      // this.data.musicCtx.autoplay=true;//自动播放
      this.data.musicCtx.src="http://music.163.com/song/media/outer/url?id=1499651858.mp3";
    },


    list:function(evens){
      console.log(evens)
      var id=evens.currentTarget.dataset.item.id
      var img=evens.currentTarget.dataset.item.src
      var songname=evens.currentTarget.dataset.item.songname
      wx.navigateTo({
        url: '/pages/list/list?id='+id+'&songname='+songname+'&img='+img,
      })
    },

    play:function(){
      wx.navigateTo({
        url: '/pages/play/play',
      })
    },
    
    //监听input输入框值发生改变的时候执行的方法
    keychange:function(result){
      console.log(result)
      //触发时发生数据修改
      var w=result.detail.value
      //data数据修改
      this.setData({
        word:w
      })
    },
    //搜索按钮
    search:function(){
      console.log(this.data.word)
      //取到用户是值
      //改变接口关键字
      //网络请求
      //获取json
      //解析并拿到数据储存到data中
      //html遍历渲染
      var w=this.data.word
      var url="https://music.163.com/api/search/get?s="+w+"&type=1&limit=6"
      var that=this
      wx.request({
        url: url,
        success:function(result){
          // console.log(result.data.result.songs)
          var song=result.data.result.songs
          that.setData({
            musicbox:song
          })
        }
      })
    },


    /**音乐播放控制函数 */
    handlePlay:function(){
      this.data.musicCtx.play();
      this.setData({
        isPlay:true
      })
    },
    handlePause:function(){  
      this.data.musicCtx.pause();
      this.setData({
        isPlay:false
      })
    },
    bindchange(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    },
  })