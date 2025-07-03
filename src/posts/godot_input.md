---
title: "【Godot4.4】InputEventでマウスとキーボードやコントローラーを使えるようにする"
date: "2025-07-03"
thumbnail: "/thumbnails/GodotScript.jpg"
tag: ["Godot"]
---

# Inputで色々な入力を検知する

このコードを入れるとマウスの入力、キーの入力、その他ゲームパッドの入力などほぼ全ての『入力』がでてくる。

``` GDScript
func _input(event):
	print(event.as_text())
```

出力結果はこんな感じ。ゲームパットも反応してくれる。

![コード結果](/blog/inputreturn.png)

# いち早く上下左右操作したい人のために

移動させたいCharacterBody2Dにコードを付けてください。

``` GDScript
extends CharacterBody2D

func _process(delta):
	if Input.is_action_pressed("ui_down"):	position.y += 100 * delta
	if Input.is_action_pressed("ui_up"):	position.y += -100 * delta
	if Input.is_action_pressed("ui_right"):	position.x += 100 * delta
	if Input.is_action_pressed("ui_left"):	position.x += -100 * delta
```

# Inputマップからオリジナルアクションを作ろう

上のプロジェクトから　⇒　プロジェクト設定

![インプットマップ](/blog/inputreturn_2.png)

プロジェクト設定から　⇒　インプットマップ　へ行くとアクションの追加などがあります。

![インプットマップ](/blog/inputreturn_3.png)

ここから『新しいアクションを追加』の部分をクリックして、名前を付けてから右の『追加』でオリジナルアクションを追加できます。自分はtestとしました。

![インプットマップ](/blog/inputreturn_4.png)

次にアクション名（自分だったら「test」）右の＋ボタンを押します。ゴミ箱の隣のやつです。

![インプットマップ](/blog/inputreturn_6.png)

この画面になったら入力を待機していますをクリックしてボタンやらジョイスティックなどを動かすと認識されます。スクリーンショットするときWindowsキー+Shift+Sが認識されて撮るの面倒でした。

これでOKを押せば完成です！

余談ですが、インプットマップのところで『組み込みアクションを表示』をオンにすると"ui_left"などの標準搭載されている入力値？が全部見れます。