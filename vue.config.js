module.exports = {

    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'https://www.imooc.com',
                changeOringin: true, //是否将主机头的原点更改为目标的url地址
                pathRewrite: {
                    '/api': '/api'
                }
            }
        },


    }
}