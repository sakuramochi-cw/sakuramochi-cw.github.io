# さくらもちのシナリオ置き場 🌸（個人サイト風・別案）

GitHub Pagesにそのまま置ける静的Webサイトです。HTML / CSS / JavaScriptのみで動き、レンタルサーバーやビルド作業は不要です。

## ファイル

- `index.html` : ホーム
- `scenarios.html` : シナリオ一覧・配布リンク
- `about.html` : このサイトについて
- `style.css` : 色・レイアウト・デザイン
- `script.js` : 右から開くオフキャンバスメニュー
- `favicon.svg` : ブラウザタブ用の小さな桜アイコン
- `.nojekyll` : GitHub Pages用（空ファイル）

## まずは公開する

1. GitHubの `sakuramochi-cw/sakuramochi-cw.github.io` を開きます。
2. **Code → Add file → Upload files** を選びます。
3. **ZIPファイルそのものではなく、展開した中身**をアップロードしてください（`index.html` がリポジトリの一番上に来るように）。
4. **Commit changes** を押します。
5. 数十秒〜数分後、`https://sakuramochi-cw.github.io/` を開きます。

※ 既に `README.md` がある場合は、上書きしてもかまいません。GitHub Pagesは `main` ブランチ、`/(root)` に設定済みの想定です。

## 配布用GoogleドライブURLを追加する

`scenarios.html` にある各作品の

```html
<span class="download-pending">配布準備中</span>
```

を、次のようなリンクに置き換えます。

```html
<a class="download-link" href="ここに共有URL" target="_blank" rel="noopener noreferrer">ダウンロード <span aria-hidden="true">↗</span></a>
```

「ここに共有URL」には、Googleドライブで対象ZIPを **「リンクを知っている全員 / 閲覧者」** にして取得したURLを入れます。リンクを入れるまでは、クリックできない「配布準備中」表示になっています。

※ `クイズシナリオ（仮タイトル）` は正式な作品名に差し替えてください。身内向けの4本目は一般公開サイトには載せていません。

## デザインの変更

- 色を変える: `style.css` 冒頭の `:root` を調整
- 文言を変える: 各 `.html` ファイルを編集
- メニュー項目を変える: 各 `.html` の `<nav class="drawer-nav">` を編集

## 確認ポイント

- 公開前にシークレットウィンドウでサイトとZIPのリンクを確認
- Googleドライブの所有者表示名・メールアドレスが公開してよい情報か確認
- 素材の利用条件・クレジット・ReadMeを確認
- GitHubの公開リポジトリに個人情報や身内向けZIPを載せない

## この別案について

参考として挙げてもらったCardWirth個人サイトの構成をヒントに、
ホームに Information・News を追加し、シナリオ一覧に目次を付けています。
メニューは以前の右側オフキャンバスメニューのままです。

**公開前に** `index.html` の News にある「配布サイトを準備中です」を
実際のお知らせに変更してください。シナリオ詳細・対応エンジン・対象レベル・更新履歴など
正確な情報がわかれば、 `scenarios.html` の各作品に追記できます。

※ ダウンロードURLは未設定です。

## CardWirth公式ダウンロードリンク

ホーム（Information）、オフキャンバスメニュー、Aboutに、CardWirth本体の公式ファンサイトDLページ `https://cardwirth.net/office/download.php` へのリンクを設定しています。
