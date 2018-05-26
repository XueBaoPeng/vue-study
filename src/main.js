// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import {getRequest} from "./utils/api";
import {postRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {uploadFileRequest} from "./utils/api";
import {isNotNullORBlank} from './utils/utils'
import './utils/filter_utils'
import 'font-awesome/css/font-awesome.min.css'
import {initMenu} from "./utils/utils";

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.getRequest=getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.uploadFileRequest = uploadFileRequest;
Vue.prototype.isNotNullORBlank = isNotNullORBlank;

/* eslint-disable no-new */

router.beforeEach((to ,from,next)=>{
  if (to.name=='Login'){
    next();
    return;
  }
  var name=store.state.user.name;
  // if (name=='未登录'){
  //   if(to.meta.requireAuth||to.name==null){
  //     next({path:'/',query:{redirect:to.path}})
  //   }else {
  //     next();
  //   }
  // }else {
    initMenu(router, store);
    if(to.path=='/chat')
      store.commit("updateMsgList", []);
    next();
  // }
})



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
