# module

1. app.js             ：程式入口
2. config-xxx.js      ：数据库配置文件
3. config.js          ：根据当前环境切换数据库配置文件
4. db.js              ：数据表映射基类
5. init-db.js         ：初始化数据库
6. model.js           ：批量导入 model 类



**app.js** : 程式主入口，引入 model.js 模块

```Start

Strat

 ⬇ app.js

 ⬇ model.js ➡ Pet.js & User.js

 ⬇ db.js

 ⬇ config.js

 ⬇ config-xxx.js
 
```



