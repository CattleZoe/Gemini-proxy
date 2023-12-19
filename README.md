# Gemini-proxy

- gemini-proxy-cloudflare

## 这是利用cloudflare的work.js反向代理google的gemini的API接口

- [参考官方Gemini文档](https://ai.google.dev/tutorials/rest_quickstart)

## 使用方式

- 部署**work.js**到cloudflare
- 配置work触发器，定义域名

## 官方使用示例

```shell
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-pro?key=$API_KEY
```

## cloudflare反代后的使用示例

```shell
curl https://gemini.aivvm.com/v1beta/models/gemini-pro?key=$API_KEY
```
