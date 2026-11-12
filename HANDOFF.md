# Xuexin Li 学术主页交接

## 换电脑继续

在另一台电脑登录 Dropbox，等 `Xuexin_workspace/personal_web/xuexin-li-site` 同步完成，然后双击 **index.html** 预览。首页可以展开研究摘要和报告记录，也可以打开 CV 和课程讲义。摄影页的小图可以点开看大图。

在 Codex 或编辑器中打开整个 `xuexin-li-site` 文件夹，从这份文档接手。以后请在 Dropbox 里的这份网站目录中修改。保存文件后刷新浏览器即可查看。网站使用普通 HTML、CSS 和 JavaScript，页面链接、字体、照片和 PDF 都随目录保存。

如果需要在本机通过 HTTP 预览，在网站目录打开终端运行下面的命令，然后访问 [本机预览](http://127.0.0.1:8787/)。

```sh
python3 -m http.server 8787 --bind 127.0.0.1
```

## 更新内容

| 内容 | 编辑位置 |
| --- | --- |
| 首页简介、联系方式、报告、研究项目、课程、评价 | index.html |
| Course Materials 课程资料目录 | handouts.html |
| 摄影介绍、选片、顺序、图注 | photography.html |
| 字体、颜色、留白、手机布局 | assets/site.css |
| 照片点开后的展示 | assets/gallery.js |
| CV | 替换 `files/xuexin-li-cv.pdf` |
| 讲义与 Stata Manual | PDF 存在 `files/econ460/` 和 `files/econ702/`。新增讲义时在 `handouts.html` 添加链接 |
| 首页头像 | `assets/images/xuexin-li.jpg` 是 `../Profile/xuexin_profile_big.jpg` 的网页用版本 |
| 波特兰主图与相册 | 图片在 `assets/images/`。添加相册照片时，把缩略图放进 `thumb/`，放大图放进 `full/`，并在 `photography.html` 添加两者的相对路径和图注 |

## 本版内容取舍

- Home 的头像在左、简介在右，头像下方放邮箱和 CV 链接。用 Source Serif 4 排标题和正文，Source Sans 3 排导航与辅助信息。
- Co-production 排在第一篇，采用完整摘要并附 SSRN 和合作者主页链接。Imported Inputs 采用根据新内容整理的摘要。两篇的报告记录在摘要下方。
- 头像下方的 Upcoming Presentation 标注 Midwest Macroeconomics Meeting 的报告日期。会后可从首页移除这条预告，并更新论文报告记录的状态。
- 课程资料页大标题和首页课程入口均为 Course Materials，文件名保留 `handouts.html`，继续使用原有的两列列表。Graduate Macroeconomics 的讲义标为 Spring 2025。Economics Forecasting 包含 Fall 2026 讲义和 Stata Manual，Stata Manual 放在课程资料页中。首页各课程旁只保留 Course Materials 入口。讲义显示名称统一为 Handout 加序号，PDF 原文件名和链接继续沿用。Teaching 下方直接显示第一条学生评价，另外五条可点开查看。
- Photography 采用波特兰主图和九张精选照片，主图标注 “My first photograph.”。黄鸟和火烈鸟地点暂按 San Diego Zoo，2026 年的地热与动物照片沿用 Yellowstone National Park 分组。

原始素材位于同级的 `CV`、`Photo`、`Profile` 和 `Teaching` 文件夹。维护网站时，把用于展示的文件放进网站目录并使用相对路径，这样整站就可以在另一台电脑上打开。

## 线上网址与发布

网站于 2026 年 11 月 10 日通过 GitHub Pages 上线。

- 正式网址为 [https://xuexin-li.github.io/](https://xuexin-li.github.io/)。
- 公开仓库为 [xuexin-li/xuexin-li.github.io](https://github.com/xuexin-li/xuexin-li.github.io)。
- GitHub 用户名为 `xuexin-li`，原用户名为 `Xuexin1180`。
- 发布来源为 `main` 分支的 `/(root)`，仓库 Settings → Pages 中选择了 Deploy from a branch，HTTPS 已启用。
- 首页和所有文件使用相对链接，可以直接在本地预览，或从仓库根目录发布。

## 更新线上网站

先在 Dropbox 里的这份目录中修改并预览，然后把改过的文件上传到 GitHub 仓库里的相同位置，点 Commit changes 提交到 `main`。GitHub Pages 会自动部署。待 Actions 中的 pages build and deployment 显示 success，再刷新正式网址核对。

首次发布已核对的仓库根目录内容为 `index.html`、`photography.html`、`handouts.html`、`assets/`、`files/`，以及 GitHub 初始化生成的 `README.md`。HANDOFF.md 保存在 Dropbox 里，供以后接手使用。

如果有人直接在 GitHub 上编辑文件，继续修改前先把那次改动同步回 Dropbox，之后再上传，避免覆盖其他电脑上的更新。

## 设计参考

- [Mengxi Wan](https://www.mengxiwan.com/)
- [Yutong Zhong](https://yutongzhong223.github.io/)
- [Yu (Alan) Yang](https://www.alanyangecon.com/)
