# 目录名规范

```bash

my-project-name/
|- BuildScript // 流水线部署文件目录
|- docs // 项目的细化文档目录（可选）
|- nginx // 部署在容器上前端项目 nginx 代理文件目录
|- node_modules // 下载的依赖包
|- public // 静态页面目录
|- index.html // 项目入口
|- src // 源码目录
|- api // http 请求目录
|- assets // 静态资源目录，这里的资源会被 wabpack 构建
|- icon // icon 存放目录
|- img // 图片存放目录
|- js // 公共 js 文件目录
|- scss // 公共样式 scss 存放目录
|- frame.scss // 入口文件
|- global.scss // 公共样式
|- reset.scss // 重置样式
|- components // 组件
|- plugins // 插件
|- router // 路由
|- routes // 详细的路由拆分目录（可选）
|- index.js
|- store // 全局状态管理
|- utils // 工具存放目录
|- request.js // 公共请求工具
|- views // 页面存放目录
|- App.vue // 根组件
|- main.js // 入口文件
|- tests // 测试用例
|- .browserslistrc// 浏览器兼容配置文件
|- .editorconfig // 编辑器配置文件
|- .eslintignore // eslint 忽略规则
|- .eslintrc.js // eslint 规则
|- .gitignore // git 忽略规则
|- babel.config.js // babel 规则
|- Dockerfile // Docker 部署文件
|- jest.config.js
|- package-lock.json
|- package.json // 依赖
|- README.md // 项目 README
|- vue.config.js // webpack 配置

```

[其他规范](https://juejin.cn/post/6987349513836953607)
