(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{379:function(a,t,s){"use strict";s.r(t);var e=s(53),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[a._v("#")]),a._v(" Webpack")]),a._v(" "),s("h2",{attrs:{id:"hash-chunkhash-contenthash区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash-chunkhash-contenthash区别"}},[a._v("#")]),a._v(" hash chunkhash contenthash区别")]),a._v(" "),s("h3",{attrs:{id:"hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[a._v("#")]),a._v(" hash")]),a._v(" "),s("p",[a._v("hash是跟整个项目的构建相关，构建生成的文件hash值都是一样的，所以hash计算是跟整个项目的构建相关，同一次构建过程中生成的hash都是一样的，只要项目里有文件更改，整个项目构建的hash值都会更改")]),a._v(" "),s("h3",{attrs:{id:"chunkhash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chunkhash"}},[a._v("#")]),a._v(" chunkhash")]),a._v(" "),s("p",[a._v("chunkhash和hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响")]),a._v(" "),s("h3",{attrs:{id:"contenthash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenthash"}},[a._v("#")]),a._v(" contenthash")]),a._v(" "),s("p",[a._v("contenthash表示由文件内容产生的hash值，内容不同产生的contenthash值也不一样。(在项目中，通常做法是把项目中css都抽离出对应的css文件来加以引用)")]),a._v(" "),s("h2",{attrs:{id:"webpack优化白屏问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack优化白屏问题"}},[a._v("#")]),a._v(" webpack优化白屏问题")]),a._v(" "),s("h3",{attrs:{id:"使用prerender-spa-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用prerender-spa-plugin"}},[a._v("#")]),a._v(" 使用prerender-spa-plugin")]),a._v(" "),s("p",[a._v("github："),s("a",{attrs:{href:"https://github.com/chrisvfritz/prerender-spa-plugin",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/chrisvfritz/prerender-spa-plugin"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("rerender-spa-plugin依赖puppeteer操作chromium对SPA跑了一遍，生成一个静态的HTML，里面是已经填好的dom节点和数据。")]),a._v(" "),s("p",[a._v("这样的话有两个缺陷")]),a._v(" "),s("ol",[s("li",[a._v("无法展示用户自身的内容")]),a._v(" "),s("li",[a._v("不适合动态路由多的大型项目。")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" PrerenderSpaPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'prerender-spa-plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrerenderSpaPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 输出目录的绝对路径")]),a._v("\n      path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'../dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 预渲染的路由")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/hot'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"使用page-skeleton-webpack-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用page-skeleton-webpack-plugin"}},[a._v("#")]),a._v(" 使用page-skeleton-webpack-plugin")]),a._v(" "),s("p",[a._v("github："),s("a",{attrs:{href:"https://github.com/ElemeFE/page-skeleton-webpack-plugin/blob/master/docs/i18n/zh_cn.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/ElemeFE/page-skeleton-webpack-plugin/blob/master/docs/i18n/zh_cn.md"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("page-skeleton-webpack-plugin是一款由ElemeFE团队开发的webpack 插件，该插件的目的是根据你项目中不同的路由页面生成相应的骨架屏页面，并将骨架屏页面通过 webpack 打包到对应的静态路由页面中。")]),a._v(" "),s("h2",{attrs:{id:"webapck-splitchunksplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webapck-splitchunksplugin"}},[a._v("#")]),a._v(" webapck splitChunksPlugin")]),a._v(" "),s("p",[a._v("首先 webpack 总共提供了三种办法来实现 Code Splitting，如下：")]),a._v(" "),s("ul",[s("li",[a._v("入口配置：entry 入口使用多个入口文件；")]),a._v(" "),s("li",[a._v("抽取公有代码：使用 SplitChunks 抽取公有代码；")]),a._v(" "),s("li",[a._v("动态加载 ：动态加载一些代码。")])]),a._v(" "),s("p",[a._v("这里我们姑且只讨论使用 SplitChunks 抽取公有代码。")]),a._v(" "),s("h3",{attrs:{id:"splitchunks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitchunks"}},[a._v("#")]),a._v(" SplitChunks")]),a._v(" "),s("p",[a._v("默认配置项")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//...")]),a._v("\n  optimization"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    splitChunks"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      chunks"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'async'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      minSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      maxSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      minChunks"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      maxAsyncRequests"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      maxInitialRequests"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      automaticNameDelimiter"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'~'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      cacheGroups"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        vendors"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          test"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/[\\\\/]node_modules[\\\\/]/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          priority"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          minChunks"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          priority"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          reuseExistingChunk"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("参数说明如下")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("chunks：表示从哪些chunks里面抽取代码，除了三个可选字符串值initial、async、all 之外，还可以通过函数来过滤所需的 - chunks；")])]),a._v(" "),s("li",[s("p",[a._v("minSize：表示抽取出来的文件在压缩前的最小大小，默认为 30000；")])]),a._v(" "),s("li",[s("p",[a._v("maxSize：表示抽取出来的文件在压缩前的最大大小，默认为 0，表示不限制最大大小；")])]),a._v(" "),s("li",[s("p",[a._v("minChunks：表示被引用次数，默认为1；")])]),a._v(" "),s("li",[s("p",[a._v("maxAsyncRequests：最大的按需(异步)加载次数，默认为 5；")])]),a._v(" "),s("li",[s("p",[a._v("maxInitialRequests：最大的初始化加载次数，默认为 3；")])]),a._v(" "),s("li",[s("p",[a._v("automaticNameDelimiter：抽取出来的文件的自动生成名字的分割符，默认为 ~；")])]),a._v(" "),s("li",[s("p",[a._v("name：抽取出来文件的名字，默认为 true，表示自动生成文件名；")])]),a._v(" "),s("li",[s("p",[a._v("cacheGroups: 缓存组。（这才是配置的关键）")])]),a._v(" "),s("li",[s("p",[a._v("initial 把非动态模块打包进 vendor，动态模块优化打包")])]),a._v(" "),s("li",[s("p",[a._v("async 只把动态模块打包进 vendor，非动态模块保持原样（不优化）")])]),a._v(" "),s("li",[s("p",[a._v("all 把动态和非动态模块同时进行优化打包；所有模块都扔到 vendors.bundle.js 里面")])])]),a._v(" "),s("h4",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("ul",[s("li",[a._v("webapck4 玄妙的 SplitChunks Plugin："),s("a",{attrs:{href:"https://juejin.im/post/5c08fe7d6fb9a04a0d56a702",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://juejin.im/post/5c08fe7d6fb9a04a0d56a702"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"cachegroups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cachegroups"}},[a._v("#")]),a._v(" cacheGroups")]),a._v(" "),s("p",[a._v("上面的那么多参数，其实都可以不用管，cacheGroups 才是我们配置的关键。它可以继承/覆盖上面 splitChunks 中所有的参数值，除此之外还额外提供了三个配置，分别为：test, priority 和 reuseExistingChunk。")]),a._v(" "),s("ul",[s("li",[a._v("test: 表示要过滤 modules，默认为所有的 modules，可匹配模块路径或 chunk 名字，当匹配的是 chunk 名字的时候，其里面的所有 modules 都会选中；")]),a._v(" "),s("li",[a._v("priority：表示抽取权重，数字越大表示优先级越高。因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算；")]),a._v(" "),s("li",[a._v("reuseExistingChunk：表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。")])]),a._v(" "),s("h2",{attrs:{id:"webpack的热更新是如何做到的？说明其原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack的热更新是如何做到的？说明其原理"}},[a._v("#")]),a._v(" webpack的热更新是如何做到的？说明其原理")]),a._v(" "),s("p",[a._v("webpack的热更新又称热替换（Hot Module Replacement），缩写为HMR。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。")]),a._v(" "),s("p",[a._v("首先要知道server端和client端都做了处理工作")]),a._v(" "),s("ol",[s("li",[a._v("第一步，在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。")]),a._v(" "),s("li",[a._v("第二步是 webpack-dev-server 和 webpack 之间的接口交互，而在这一步，主要是 dev-server 的中间件 webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监控，并且告诉 webpack，将代码打包到内存中。")]),a._v(" "),s("li",[a._v("第三步是 webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当我们在配置文件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行 live reload。注意，这儿是浏览器刷新，和 HMR 是两个概念。")]),a._v(" "),s("li",[a._v("第四步也是 webpack-dev-server 代码的工作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建立一个 websocket 长连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。")]),a._v(" "),s("li",[a._v("webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。")]),a._v(" "),s("li",[a._v("HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。")]),a._v(" "),s("li",[a._v("而第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。")]),a._v(" "),s("li",[a._v("最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。")])]),a._v(" "),s("h2",{attrs:{id:"如何用webpack来优化前端性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何用webpack来优化前端性能"}},[a._v("#")]),a._v(" 如何用webpack来优化前端性能")]),a._v(" "),s("p",[a._v("用webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运行快速高效。")]),a._v(" "),s("ul",[s("li",[a._v("压缩代码:删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的UglifyJsPlugin和ParallelUglifyPlugin来压缩JS文件， 利用cssnano（css-loader?minimize）来压缩css")]),a._v(" "),s("li",[a._v("利用CDN加速: 在构建过程中，将引用的静态资源路径修改为CDN上对应的路径。可以利用webpack对于output参数和各loader的publicPath参数来修改资源路径")]),a._v(" "),s("li",[a._v("Tree Shaking: 将代码中永远不会走到的片段删除掉。可以通过在启动webpack时追加参数--optimize-minimize来实现")]),a._v(" "),s("li",[a._v("Code Splitting: 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利用浏览器缓存")]),a._v(" "),s("li",[a._v("提取公共第三方库:  SplitChunksPlugin插件来进行公共模块抽取,利用浏览器缓存可以长期缓存这些无需频繁变动的公共代码")])]),a._v(" "),s("h2",{attrs:{id:"如何提高webpack的打包速度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何提高webpack的打包速度"}},[a._v("#")]),a._v(" 如何提高webpack的打包速度")]),a._v(" "),s("ul",[s("li",[a._v("happypack: 利用进程并行编译loader,利用缓存来使得 rebuild 更快,遗憾的是作者表示已经不会继续开发此项目,类似的替代者是thread-loader")]),a._v(" "),s("li",[a._v("外部扩展(externals): 将不怎么需要更新的第三方库脱离webpack打包，不被打入bundle中，从而减少打包时间,比如jQuery用script标签引入")]),a._v(" "),s("li",[a._v("dll: 采用webpack的 DllPlugin 和 DllReferencePlugin 引入dll，让一些基本不会改动的代码先打包成静态资源,避免反复编译浪费时间")]),a._v(" "),s("li",[a._v("利用缓存: webpack.cache、babel-loader.cacheDirectory、HappyPack.cache都可以利用缓存提高rebuild效率")]),a._v(" "),s("li",[a._v("缩小文件搜索范围: 比如babel-loader插件,如果你的文件仅存在于src中,那么可以include: path.resolve(__dirname, 'src'),当然绝大多数情况下这种操作的提升有限,除非不小心build了node_modules文件")])])])}),[],!1,null,null,null);t.default=n.exports}}]);