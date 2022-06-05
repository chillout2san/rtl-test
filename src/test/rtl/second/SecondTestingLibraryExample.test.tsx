import { render, screen } from "@testing-library/react";
import Example from "./SecondTestingLibraryExample";

/*
さっきまでは文字列で取得していたが、次はRoleを使って取得する。
各HTML要素にはデフォルトでRole属性が振られている。
これを利用して要素を取得する。
取得方法が異なるだけでやることはfirstと変わらない。
どのタグにどのroleが振られているかは以下を参照のこと。
https://www.w3.org/TR/html-aria/#docconformance
*/

// buttonタグのroleはそのまんまでbutton
test("getByRoleのテスト button", () => {
  render(<Example />);
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});

// h1タグのroleはheading
test("getByRoleのテスト heading", () => {
  render(<Example />);
  // 第二引数で「見出し」というテキストを持っているheadingのものを探す。
  // h2タグもroleはheadingなので付けないと複数要素が発見されてエラーになる。
  // 一つしか要素がないなら、getByRole("heading")だけで良い。
  const element = screen.getByRole("heading", {
    name: "見出し",
  });
  expect(element).toBeInTheDocument();
});

test("getAllByRoleのテスト", () => {
  render(<Example/>)
  // first同様に複数個取得できるメソッドが用意されている。
  const element = screen.getAllByRole("heading")
  // こちらも同様にtoBeInTheDocumentは使えない。
  expect(element).toHaveLength(2)
  // こう書いてもOK。
  expect(element.length).toBe(2)
})

/*
ちなみにfirstのところで掲載した通り、公式ドキュメントではgetByRoleを優先的に使うよう紹介されています。
サンプルでも示した通り、第二引数にタグが持っているテキストを渡せば絞り込みができるので、大体のケースではこれで足りるはずって言うことみたいですね。

公式にはこう書いてます。（Google翻訳してます）

getByRole：これは、アクセシビリティツリーで公開されているすべての要素をクエリするために使用 できます。このnameオプションを使用すると、返された要素を アクセス可能な名前でフィルタリングできます。これは、ほぼすべてのことに対するあなたの最優先事項であるはずです。これで得られないことはあまりありません（得られない場合は、UIにアクセスできない可能性があります）。ほとんどの場合、これは次のnameようなオプション で使用されますgetByRole('button', {name: /submit/i})。役割のリストを確認してください 。
*/

/*
ちなみに最終手段としてテストしたい要素にdata-testidというものを付与して、それで要素を取得してくる方法もあります。
優先順位が一番下なので、あくまで最終手段ですね。
*/
test("getByTestIdのテスト", () => {
  render(<Example/>)
  const element = screen.getByTestId("test")
  expect(element).toBeInTheDocument()
})