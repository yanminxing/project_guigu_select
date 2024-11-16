module.exports = {
    //运行环境
    "env": {
        "browser": true,
        "es2021": true
    },
    //规则继承
    "extends": [
        //全部规则默认是关闭的,这个配置项开启推荐规则,推荐规则参照文档
        //比如:函数不能重名、对象不能出现重复key
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    //要为特定类型的文件指定处理器
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    //指定解析器:解析器
    //Esprima 默认解析器
    //Babel-ESLint babel解析器
    //@typescript-eslint/parser ts解析器
    // "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",//校验ECMA最新版本
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"  //设置为"script"（默认），或者"module"代码在ECMAScript模块中
    },
    //ESLint支持使用第三方插件。在使用插件之前，您必须使用npm安装它
    //该eslint-plugin-前缀可以从插件名称被省略
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
    }
}
