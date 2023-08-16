import { createPinia } from 'pinia'
// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia;

//参考 https://zhuanlan.zhihu.com/p/605989666