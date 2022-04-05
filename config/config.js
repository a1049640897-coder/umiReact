export default {
    routes:[
     {
      path: '/',
      component: '../layouts/index.js',
      routes: [
        { path: '/', component: './home/index.jsx',name:'home',title:'home' },
        { path: '/demo', component: './demo/index.js',name:'demo',title:'demo' },
        // { path: '/demo', component: './demo.js',name:'demo',title:'demo' }
      ]
    }
    ],
      plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'new-umi-app',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}