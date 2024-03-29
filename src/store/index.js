import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Mine from './modules/mine'
import Find from './modules/find'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    Login,
    Mine,
    Find
  }
})
export default store
