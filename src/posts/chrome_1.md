---
title: "Chrome拡張機能の作り方① -ひな形編-"
date: "2025/05/31"
tag: ["Chrome"]
---
___

※<span style="color: purple">[Chrome拡張機能](https://developer.chrome.com/docs/extensions?hl=ja)</span>の公式リファレンスを参考にしています。

最初に適当な名前のフォルダーをつくります。

そのなかに**manifest.json**という名前のファイルを作ります。これがないと拡張機能として認識してくれません。

```json
{
    "name": "拡張機能の名前",
    "version": "1.0",
    "manifest_version": 3,
    "description": "拡張機能の説明文",
    "action": {
        "default_popup": "hello.html"
    },
    "author": "作った人の名前"
}
```
拡張機能をクリックすると**action**の中に入っている要素が動きます。今回は**hello.html**が動くので確認したいなら作りましょう。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```
そのあと、拡張機能を管理から、開発者モード、パッケージ化されていない拡張機能を読み込むから自分が作ったフォルダーを選択。

エラーが出てなければ成功！

文字は違うけど結果はこうなります
![helloworldの画像](/images/hello-world-extension-27a679d21340d_856.png)

次回に続く