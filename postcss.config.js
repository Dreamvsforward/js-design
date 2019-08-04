// https://www.cnblogs.com/hellowoeld/p/10571792.html
// 在项目根目录创建 postcss.config.js，并且设置支持哪些浏览器，必须设置支持的浏览器才会自动添加添加浏览器兼容
module.exports = {
    plugins: [
        require('autoprefixer')({
            "browsers": [
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        })
    ]
}