import { createApp } from 'vue'
import App from './App.vue'

/**
 * @description 项目入口函数
 * */
function main() {
    const app = createApp(App)

    app.mount('#app')
}

main()



