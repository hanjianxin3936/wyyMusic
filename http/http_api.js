import http from "./http_server.js"
import {HTTP_CODE} from "./http_constants.js"
 const method ='get'
 class Api {
   static login(params) { return http("/dj/toplist/newcomer", params, method, "from") }
   static personalized(params) { return http("/personalized", params, method, "from") }
   static getBanner(params) { return http("/banner", params, method, "from") }
   static getalbumnewest(params) { return http("/album/newest", params, method, "from") }
   static getTopList(params) { return http("/top/list", params, method, "from") }
  // 歌单分类
   static getPlayListCatlist(params) { return http("/playlist/catlist", params, method, "from") }
   //歌单分类对应歌单详情
   static getTopPlaylist(params) { return http("/top/playlist", params, method, "from") }
   //歌单（歌曲列表）
   static getPlayListDetail(params) { return http("/playlist/detail", params, method, "from") }
//音乐url
   static getSongUrl(params) { return http("/song/url", params, method, "from") }
   
 }
export default Api