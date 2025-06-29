---
title: "【Vercel】とは？Gitのインストールからデプロイの仕方まで徹底解説"
date: "2025-06-29"
thumbnail: "/thumbnails/vercel.webp"
tag: ["vercel","Next.js","Git"]
---

Vercelのデプロイの仕方や注意点を解説します。このサイトにもVercelが使われています。

**使用環境：Windows11**

# Vercelの概要

Vercelとは、Reactのフレームワーク言語『Next.js』運営元が軸となってるサービスです！

..簡単に言うと無料で高品質なサイトが作れるサービスです。ただ、基本的にNext.jsとGitHubを必要とします。

またGitHubを多用することになるので先にGitの操作に慣れておいた方がいいかもしれません。Gitの最低限の操作も教えます。

## Q：Git・GitHubって同じ？

A：**家と体育館ぐらい違います。** Gitで自分の環境からバージョンを管理した後に色んなサービスに接続してバージョンを管理するってだけなので、GitHubはそのつなげられるサービスのひとつってだけです。

# Gitのインストール

まず、Gitを自分の環境に入れます。

[公式サイトからダウンロード](https://git-scm.com/downloads)してください。2025現在だと右側のモニターからできそう。

![gitダウンロード画像](/blog/git_download.png)

ターミナル等でバージョンを確認してください
``` bash
git --version
```
git version 数字が出てくれば成功です！

# Next.jsのインストール

## その前にNode.jsのインストール

Next.jsを使うには、「Node.js」がいるため先に[公式からインストール](https://nodejs.org/)します。LTS版がおすすめ。

その後、コマンドで実行してください。
```bash
node -v
```
``` bash
npm -v
```
これで両方バージョンが出たらOKです！とてもややこしい！

## Next.jsプロジェクトの作成

プロジェクトフォルダを生成するためのコマンドを実行します。必要ならディレクトリを選びましょう。

latestの後がプロジェクトの名前になるので、好きな名前に変えましょう。

``` bash
npx create-next-app@latest my-next-app
```

成功するとコマンドに選択肢がでてきますが下の様にしてください。

矢印で操作してEnterキーで決定します。

``` bash
✔ Would you like to use TypeScript? … Yes

✔ Would you like to use ESLint? … Yes

✔ Would you like to use Tailwind CSS? … Yes

✔ Would you like to use `src/` directory? … Yes

✔ Would you like to use App Router? (recommended) … Yes

✔ Would you like to customize the default import alias (@/*)? … No
```
これでNext.jsの初期テンプレートが完了しました！

## Next.jsをローカルサーバーで動かす

プロジェクトが完成したら、試しに動かしましょう！

``` bash
npm run dev
```

これでlocalhost:3000のリンクに「ctrl+クリック？」で飛んで、黒い丸の中に▲みたいなマークが出ていれば成功です！

# GitHubのアカウント登録・リポジトリ登録

[GitHub](https://github.com/)からアカウントを登録します。ユーザー名を登録出来たら、分厚い緑の本「New」をクリックして、画像の説明のようにリポジトリ名をつけます。英語のほうがいいです。次に公開か非公開か決めるのですが、最初はPublicのほうが制限がないのでおすすめです。

![リポジトリ説明](/blog/github_newrepository.png)

あとは変更せずに、Create repositoryをクリックすると、以下の画面になると思います。ならなかったらリポジトリ一覧からどうにか戻ってきてください。

その後、Gitの操作に入るために以下の画像の場所にあるリンクを片隅に覚えていてください。

![リンク](/blog/github_init.png)

# Gitの操作

次にGitを使うので、コマンドの実行ディレクトリをNext.jsで作ったプロジェクトに移動しておいてください。

また、これらのコマンドは暗記しといて損はないです。

## 初回のみ使うコマンド

初期化コマンド。初期化って言っても全部消える訳じゃないのでご安心を。
``` bash
git init
```
サービス(今回はGitHub)に接続するためのコマンド。さっきGitHubで作ったユーザー名、リポジトリを入力。下のこのままじゃ使えないので注意。
``` bash
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
```

![これをリンクにする](/blog/github_init.png)

もしかしたらこれを実行した後パスワードが求められるかもしれないので、そしたらGitHubアカウントのパスワードを入力して下さい。

## 毎回の作業の流れ

1.ファイルを変更する。自分はいつも「git add -A」（非推奨）すれば強制的に変更してくれるらしいので使っています。
``` bash
git add .
```
2.コミットする。コメントみたいなものでGitHubに送信するとバージョンごとに書いてきたコメントが見えるため、なるべく同じコメントは書かない方がいい。
``` bash
git commit -m "やったことを書く"
```
3.GitHubへ送信。「origin main」は2回目から省いてもいいが、Vercelを使う場合mainブランチに送信されないと反映されないので注意。
``` bash
git push origin main
```
これでGitHubのリポジトリにプロジェクトが入ってるはずです！

補足：ちなみに今のブランチを確認するには、
``` bash
git branch
```
と打って「*」が横についているところが今いるブランチ名になります。変更したいなら上記のように「origin main」とすればいいです。

他にもチーム連携で必要なコマンドは後日記事にします。

# Vercelアカウント登録

やっと本題に来ました！超長いけどあと2割くらい！！！次に[Vercelのアカウントを登録](https://vercel.com)したら、名前は何でもいいのでTeamを作って『Add New...』から「Project」を選択。GitHubと連携していたらさっき作ったリポジトリが出てきます。

![vercelinit](/blog/vercel_git.png)

importを押したら、自動でNext.jsになっていると思うのでそのまま『Deploy』！

1分ほど待ったらデプロイが完了します！もしできてたらおめでとう！！できてなかったらあと1時間は頑張ってください！

# まとめ

Vercelでデプロイする方法を解説しました。最初やったとき2回ぐらい挫折しましたが結局は諦めなければ何とかなります！皆さんもNext.jsの沼にハマりましょう！