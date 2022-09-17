1、全局安装pnpm

npm i pnpm -g

2、创建一个演示项目文件夹，并进入

3、初始化package.json
pnpm init

4、创建pnpm-workspace.yaml，定义工作空间的根目录

packages:
  - 'packages/ **'

5、在packages创建对应的目录

6、在每个子项目文件夹中初始化package.json,并修改配置

{
  "name": "@packages/components",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "dongxw",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "@packages/utils": "workspace:*",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "eslint": "^6.7.2"
  }
}

这个时候的目录差不多这样

monorepo
├── package.json
├── packages
│   ├── components
│   │   ├── index.js
│   │   └── package.json
│   ├── core
│   │   ├── index.js
│   │   └── package.json
│   ├── utils
│   │   ├── index.js
│   │   └── package.json
│   │── projects
│   │   │   ├── index.js
│   │   │   └── package.json
└── pnpm-workspace.yaml

7、依次安装依赖 

a、cd 到目标目录 pnpm i
b、pnpm -F @packages/components add lodash  
   pnpm --filter @packages/utils add dayjs

8、packages互相引用

  pnpm -F @packages/components add @packages/utils@*

	在@packages/components安装@packages/utils，其中的@*表示默认同步最新版本

9、分别在utils和core里面写一些js代码

	@utils index.js

  import dayjs from 'dayjs';
  export function format(time, f = 'YYYY-MM-DD') {
    return dayjs(time).format(f);
  }

	@core index.js
	export const hello = (param) => param + 'hello11';

10、其他项目使用

	@components package.json

 "@packages/utils": "workspace:*",
 "@packages/core": "workspace:*",

	index.js 

	import { format } from '@packages/utils';
  import { hello } from '@packages/core';
  console.log(format(new Date()));
  console.log(hello('张三'));

	node components/index.js 
