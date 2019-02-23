// 在 umi 中，你可以使用约定式的路由，在 page 下面的 JS 文件都会按照文件名映射到一个路由，比如上面这个例子，访问 /helloworld 会对应到 HelloWorld.js
// 除了约定式的路由，你也可以使用配置式的路由。
// 要使用配置式的路由，你需要在配置文件 config/config.js 中添加如下配置
export default{
  plugins: [
    ['umi-plugin-react', {
      
    }]
  ],
  routes: [{
    path: '/',
    component: './HelloWord' //它是相对于 page 目录的相对路径
  }]
}