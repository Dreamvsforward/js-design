1. 初始化项目    npm init
2. 安装 webpack、webpack-cli   npm install webpack webpack-cli --save-dev
3. 安装 webpack-dev-server、html-webpack-plugin
4. 配置 webpck.dev.config
5. 安装 babel-core babel-loader babel-polyfill baber-preset-es2015 babel-preset-latest 
6. 新建 .babekrc  -默认用来执行babel规则的

7. 安装sass转换  规则是从后完全的
			1. style-loader（打包到index的）
			2. css-loader
			3. postcss-loader（补充兼容格式的）
			4. sass-loader