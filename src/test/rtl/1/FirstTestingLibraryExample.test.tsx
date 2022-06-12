import { render, screen } from "@testing-library/react";
import Example from "./FirstTestingLibraryExample";

/*
ここではReactTestingLibraryの基本として、以下の3つのことを学ぶ。
1. コンポーネントをテスト用に描画する。
2. コンポーネントの中から引数に渡した文字列を含む要素を取得する。
3. 取得した要素が描画されているかどうかをテストする。
*/

// 要素が見つからないとエラーになる。
test("getByTextのサンプル", () => {
  render(<Example />);
  const element = screen.getByText("hello");
  expect(element).toBeInTheDocument();
});

// 要素が見つからなかった際にnullを返す。
test("queryByTextのサンプル", () => {
  render(<Example />);
  const element = screen.queryByText("hello");
  expect(element).toBeInTheDocument();
});

// なので要素が存在していないこともテストできる。
test("queryByTextのサンプル。要素が存在しない場合", () => {
  render(<Example />);
  const element = screen.queryByText("ello");
  expect(element).not.toBeInTheDocument();
});

// 非同期処理を扱うことができる。
test("findByTextのサンプル", async () => {
  render(<Example />);
  const element = await screen.findByText("hello");
  expect(element).toBeInTheDocument();
});

/*
要素が複数発見できる場合はAllByTextを使うことができる。
*/

// toBeInTheDocumentは複数要素の場合は使えない。
// toHaveLengthで個数をチェックすることで描画できているかどうか確認する。
test("getAllByTextのサンプル", () => {
  render(<Example />);
  const element = screen.getAllByText("morning");
  expect(element).toHaveLength(2);
});

test("queryAllByTextのサンプル", () => {
  render(<Example />);
  const element = screen.queryAllByText("morning");
  expect(element).toHaveLength(2);
});

test("findAllByTextのサンプル", async () => {
  render(<Example />);
  const element = await screen.findAllByText("morning");
  expect(element).toHaveLength(2);
});

/*
要素を取得する関数は色々種類があります。
概要やどれを優先的に使えば良いかは公式ドキュメントにスッキリまとまっています。
https://testing-library.com/docs/queries/about/#priority
*/