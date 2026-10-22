# 摘星卡片官网

线上地址：<https://starcard.foxlaoy.com/>

对应 Chrome 扩展：<https://github.com/foxmuldery/starscard>（v1.6 / manifest 1.60.0）

## 页面

- `index.html`：产品首页，包含八种版式预览、功能、卡片库、隐私、安装、更新日志与 FAQ。
- `privacy.html`：隐私政策，对应 v1.6 的权限与本地存储方式。
- `404.html`：自定义 404 页面。
- `assets/site.css`、`assets/site.js`：站点样式与交互；卡片预览的二维码由 `assets/qrcode.min.js` 在本地生成。
- `assets/icon*.png`：扩展图标；`assets/og-cover.png`：社交分享封面。
- `_headers`：Cloudflare Pages 安全与缓存头。

## 本地预览

```bash
python3 -m http.server 4399
# 打开 http://127.0.0.1:4399/
```

## 发布

Cloudflare Pages 项目：`starcardhomepage`。

```bash
npx wrangler pages deploy . --project-name starcardhomepage --branch main
```

不要提交任何 Cloudflare 凭据。站点是纯静态页面，没有构建步骤。
