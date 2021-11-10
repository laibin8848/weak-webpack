# 用于理解webpack打包原理的极简demo
```
    使用vscode执行package.json,Debug srcipt "compiler" 了解webpack打包的过程

```

# Webpack 分包知识
```
    Webpack 内部包含三种类型的 Chunk：
    Initial Chunk：基于 Entry 配置项生成的 Chunk
    Async Chunk：异步模块引用，如 import(xxx) 语句对应的异步 Chunk
    Runtime Chunk：只包含运行时代码的 Chunk

    分包插件详情可以了解下
    SplitChunksPlugin 及其相应的配置
```
