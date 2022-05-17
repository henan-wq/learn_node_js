目录（my-project）中只保留`index.js`和`package.json`的文件。

关于`package.json`文件：

> 方便地记录所依赖模块的版本号，例如color模块API的更改，可能与项目不兼容。通过npm install下来时，`package.json`指定的版本号可以解决这个问题。

通过以下指令可以运行`index.js`文件：

```
npm install # 通过运行这个指令就可以把依赖的模块都下载下来。
node index  # 这里的文件名不需要加上 .js 后缀。
```
