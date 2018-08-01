# MPU6050のセンサー可視化テスト

## 概要
[加速度センサーとジャイロセンサーを可視化](https://temari.co.jp/blog/2017/09/20/iot-programming-extra-45/)で使用したコード。
センサーの勉強用です。
Windows10でテスト。

## 主要ファイル
### /MPU
この中にHTMLなど、ブラウザで表示するファイル一式があります。

### /MPU/index.html
Node.jsでサーバーを立ち上げた後、ブラウザで表示するHTMLです。
http://localhost:3000/index.html

### /MPU/common/css/module.css
画面レイアウトの主要ファイル。

### /MPU/common/js/view.js
サーバーから送られてくる数値を使って、CSSをひたすら書き換えています。

### /MPU.js
サーバーサイドのJS。
3行目、4行目はセンサーの接続に合わせて修正。
コマンドプロントで「node MPU.js」と打って実行。
