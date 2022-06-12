# はじめに

- このリポジトリは以下記事を参考にコードベースで説明をまとめ直したものです。
  - https://reffect.co.jp/react/react-test#i-2
  - https://note.com/narihara/n/nc92a02710ed5#33KUq
- 目的は ReactTestingLibrary を使ったことがない方に第一歩を踏み出してもらうことです。
- 随時更新していく予定です。

# 使い方

- `src/test/jest`に Jest のサンプルコード、`src/test/rtl`に ReactTestingLibrary のサンプルコードを置いています。Jest についてはとても基本的なことのみまとめています。
- 各ディレクトリには一つの tsx ファイルと test.tsx ファイルで構成されています。tsx が実装ファイル、test.tsx がそのテストファイルになります。tsx ファイルを眺めて大体どんな実装か分かったら、具体的にテストの書き方を見てみてください。なお rtl ディレクトリは数字の小さいものほど簡単なものです。

# 目次

- Jest のテスト
  - expect と toBe、toEquals などの基本的な関数について。
- ReactTestingLibrary のテスト
  - 1 のテストで学ぶこと
    - 1. コンポーネントをテスト用に描画する。
    - 2. コンポーネントの中から引数に渡した文字列を含む要素を取得する。
    - 3. 取得した要素が描画されているかどうかをテストする。
  - 2 のテストで学ぶこと
    - Role を使って要素取得する方法。
  - 3 のテストで学ぶこと
    - toEnabled 等の matcher について。
    - userEvent でユーザーの振る舞いをコード化する。
  - 4 のテストで学ぶこと
