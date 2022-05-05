// pages/list/list.js
Page({

    data: {
        testum:"",
        radioimg:"https://p2.music.126.net/KMYMUWm_7ZtlSx48Rl5lqw==/109951166226763165.jpg?param=200y200",
        radioid:"",
        isPlay:false,
        musicCtx:"",
        text:"【なにわ男子】Time View﹣果てなく続く道﹣ ",
        music:[
            {
                "src":"https://p2.music.126.net/bzLAnc37CWXa-h-G6X5txg==/109951165779781352.jpg?param=140y140",
                "music_name":"【なにわ男子】Time View﹣果てなく続く道﹣ ",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1499651858",
                "id":"2487597023",
                "num":"0",
            },
            {
                "src":"https://p2.music.126.net/CAO1HOHDFkR4tQYl5vB4ew==/109951165492228396.jpg?param=140y140",
                "music_name":"夢わたし",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1854216151",
                "id":"2489448039",
                "num":"1",
            },
            {
                "src":"https://p1.music.126.net/62VxWZOZKdgsOEnJlA7COA==/109951165604003319.jpg?param=140y140",
                "music_name":"シンデレラガール",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1809096075",
                "id":"2071311132",  
                "num":"2",
            },
            {
                "src":"https://p2.music.126.net/3odZyPlIYaor343XWgVIVg==/109951165425304754.jpg?param=140y140",
                "music_name":"soda pop love",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1492355032",
                "id":"2070092690",
                "num":"3",
            },
            {
                "src":"https://p2.music.126.net/fz9EuDe1aBkknIUE3L-7VA==/109951165512138866.jpg?param=140y140",
                "music_name":"Letter【西畑&道枝】",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1499660208",
                "id":"2070818004",
                "num":"4",
            },
            {
                "src":"https://p2.music.126.net/soidVNgoko3jrjEyyQAjZg==/109951165604012115.jpg?param=140y140",
                "music_name":"夜這星",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1809092544",
                "id":"2071311133",
                "num":"5",
            },
            {
                "src":"https://p2.music.126.net/xvGZf0H-cSA18Y18YEn6dw==/109951166595699275.jpg?param=140y140",
                "music_name":"初心LOVE",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1892963295",
                "id":"2494377323",
                "num":"6",
            },
            {
                "src":"https://p2.music.126.net/3odZyPlIYaor343XWgVIVg==/109951165425304754.jpg?param=140y140",
                "music_name":"僕空〜足あとのない未来〜",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1493773592",
                "id":"2070303152",
                "num":"7",
            },
            {
                "src":"https://p2.music.126.net/3odZyPlIYaor343XWgVIVg==/109951165425304754.jpg?param=140y140",
                "music_name":"アオハル -With U With Me-",
                "music_tiem":"2021-03-05",
                "play":"1127",
                "music_id":"1493652653",
                "id":"2070262797",
                "num":"8",
            },
    
            ],
        // datalist:["index"],
        
    },

    
    play:function(evens){
        console.log(evens)
        var id=evens.currentTarget.dataset.item.id
        var mid=evens.currentTarget.dataset.item.music_id
        // var index=evens.currentTarget.dataset.index
        var num=evens.currentTarget.dataset.item.num
        wx.navigateTo({
          url: '/pages/play/play?id='+mid+'&mid='+id+'&num='+num,
          
        })
        // var that=this
        // wx.request({
        //   url: 'https://music.163.com/api/dj/program/detail/?id='+aid,
        // })
        
      },
 
    onLoad:function(options){
        var that=this
        console.log(options)
        var radioname=options.songname
        this.setData({
            radioname:radioname,
            // radioimg:radioimg
            // datalist:this.music[0],
        })
        wx.getStorage({
            key:"testNum",
            success(res){
                console.log(res.data);

            }
        })

        



        this.data.musicCtx=wx.createInnerAudioContext();
        // this.data.musicCtx.autoplay=true;//自动播放
        this.data.musicCtx.src="http://music.163.com/song/media/outer/url?id=1426829004.mp3";

    

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
})