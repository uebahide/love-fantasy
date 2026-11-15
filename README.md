# Love Fantasy

GitHub の練習用に2人で作るシンプルな2Dゲーム。

## 動かし方
1. リポジトリをクローンする
2. `index.html` をダブルクリックしてブラウザで開く
3. 矢印キー / WASD で黄色い四角（プレイヤー）が動けば OK

## ファイルと担当
| ファイル | 担当 | 内容 |
|---|---|---|
| js/player.js | A さん | プレイヤーの動き・見た目 |
| js/world.js | B さん | マップ・地形 |
| js/config.js, js/input.js, js/main.js, index.html | 共通 | 変えるときは相談 |

新しい機能は新しいファイルにする（例: `js/enemy.js`, `js/item.js`）。
ファイルを足したら `index.html` の `<script>` に1行追加する（main.js より上に）。

## ルール（本番プロジェクトと同じ）
- main に直接 push しない。ブランチ → PR → 相手がレビュー → マージ
- ブランチ名: `feature/<内容>` 例: `feature/player-jump`
- コミット: `[Player] Add jump` のように `[担当部分] 何をしたか` を英語で
- 作業前に必ず main を Pull する
- 自分の担当ファイルだけ編集する

## 練習課題のアイデア
- A: プレイヤーの色を変える → 向きを付ける → HP を付ける
- B: マップの中に壁を置く → 危険な床（踏むとダメージ）を作る
- 2人目のファイル: `js/enemy.js`（敵）、`js/item.js`（アイテム）
- わざとコンフリクトを起こす練習: 2人で同時に config.js の同じ行を変えてみる
