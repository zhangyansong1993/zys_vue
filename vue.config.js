//vue.config.js 可以改默认配置项,例:入口文件mian.js 改为其他目录 or 名字
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    //  代理服务配置一
    
    /*  devServer:{
        proxy:'http://www.baidu.com'
      },*/
    //  代理服务配置二
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.30.129.11:8088',
                pthRewrite: { '^/api': '' },//去掉请求地址中的api
                ws: true, //支持websocket  默认true
                changeOrigin: true //控制请求头中的host值  默认true
            },
            '/dome': {
                target: 'http://www.baidu.com',
                pthRewrite: { '^/dome': '' }
            },
        }
    }
})
