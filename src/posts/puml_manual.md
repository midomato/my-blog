---
title: "【初心者向け】PlantUMLの使い方【徹底解説】"
date: "2025-05-13"
tag: ["PlantUML","puml","UML"]
---

# PlantUMLとは

> PlantUMLは、テキストベースのユーザーフレンドリーなモデリングツールで、

> <span style="color:rgb(59, 151, 226)">UML(Unified Modeling Language)</span>図を作成することができるソフトウェアです。

### 開発者にとって次のようなメリットがあります：

- コードのように設計図を書ける
- Git管理に強い、変更点の管理がしやすい
- <span style="color: purple">[**Github**](https://github.com/)</span>や<span style="color:purple">[**VSCode**](https://code.visualstudio.com/)</span>と連携することができる

そのため、チーム開発や大規模プロジェクトでは特に重宝されます。

もちろん個人プロジェクトでも十分活躍が期待できます。

# 導入方法

1. PlantUMLはJavaで動作するため、最初にJavaをインストールする必要があります。

> <span style="color: purple">[**Oracleの公式ウェブサイト**](https://github.com/)</span>から最新のJDKをダウンロードしてインストールします。

2. 図形の描画機能も必要なので<span style="color: purple">[**Graphvizをインストール**](https://www.graphviz.org/download/)</span>します。これがなくても一応書けるのですが、

> 容量が少しでも圧迫されるのが嫌だ！という人以外は導入しといて損はないです。

3. 最後にVSCodeの拡張機能から**PlantUML**と検索してインストールすれば完了です。

# 使用方法

新しくファイルを作って、「〇〇.puml」にすればUML図を記述できます。PlantUMLでは、
テキストファイル内でUML図を記述します。

```java
@startuml
class MyClass {
    + attribute1: type
    - attribute2: type
    + operation1()
    - operation2()
}
@enduml
```

飽きたのでここら辺で終わります。<span style="transform: rotate(30deg); display: inline-block;color: teal">..zzz</span>