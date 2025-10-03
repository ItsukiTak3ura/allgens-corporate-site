# オールジェンス株式会社 コーポレートサイト

GitHub Pagesでホスティングされる静的コーポレートサイトです。

## 🚀 技術スタック

- **HTML**: HTML5
- **CSS**: カスタムCSS（レスポンシブ対応）
- **JavaScript**: バニラJavaScript
- **フォント**: Google Fonts（Noto Sans JP, Inter）
- **アイコン**: Font Awesome
- **ホスティング**: GitHub Pages

## 📁 プロジェクト構造

```
allgens-corporate-site/
├── .git/                    # Gitリポジトリ
├── .github/                 # GitHub設定
├── .gitignore              # Git除外ファイル
├── .nojekyll               # Jekyll無効化
├── README.md               # このファイル
├── css/                    # スタイルシート
│   └── style.css          # メインCSS
├── js/                     # JavaScript
│   └── main.js            # メインJavaScript
├── index.html              # ホームページ
├── about.html              # 会社概要
├── contact.html            # お問い合わせ
├── message.html            # 代表挨拶
├── privacy.html            # プライバシーポリシー
├── results.html            # 実績
└── services.html           # サービス
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: Blue (#0284c7)
- **Accent**: Amber (#f59e0b)
- **Dark**: Slate (#0f172a)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### タイポグラフィ
- **日本語**: Noto Sans JP
- **英語**: Inter
- **フォールバック**: sans-serif

### レスポンシブ対応
- **Mobile First**: モバイルファーストデザイン
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 セットアップ

### 1. リポジトリのクローン
```bash
git clone https://github.com/ItsukiTak3ura/allgens-corporate-site.git
cd allgens-corporate-site
```

### 2. ローカルでの確認
静的サイトのため、Webサーバーで確認できます：

```bash
# Python 3の場合
python -m http.server 8000

# Node.jsの場合
npx serve .

# PHPの場合
php -S localhost:8000
```

### 3. ブラウザで確認
http://localhost:8000 を開いてサイトを確認

## 📦 ファイル構成

### HTMLファイル
- `index.html` - メインページ（ホーム）
- `about.html` - 会社概要
- `contact.html` - お問い合わせ
- `message.html` - 代表挨拶
- `privacy.html` - プライバシーポリシー
- `results.html` - 実績
- `services.html` - サービス

### CSSファイル
- `css/style.css` - メインスタイルシート
  - リセットCSS
  - レスポンシブデザイン
  - アニメーション
  - ダークモード対応

### JavaScriptファイル
- `js/main.js` - メインJavaScript
  - スムーススクロール
  - モバイルメニュー
  - カウンターアニメーション
  - スクロールエフェクト

## 🔧 開発・編集

### HTMLの編集
各HTMLファイルを直接編集してコンテンツを更新できます。

### CSSの編集
`css/style.css`を編集してスタイルを変更できます。

### JavaScriptの編集
`js/main.js`を編集してインタラクティブな機能を追加できます。

## 🚀 デプロイ

### GitHub Pages
このプロジェクトはGitHub Pagesで自動的にデプロイされます。

1. **リポジトリの設定**
   - GitHubリポジトリのSettings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main" を選択

2. **ファイル構成**
   - `index.html` - メインページ
   - `css/style.css` - スタイルシート
   - `js/main.js` - JavaScript
   - `.nojekyll` - Jekyllを無効化

3. **アクセス**
   - `https://itsukitak3ura.github.io/allgens-corporate-site/` でアクセス可能

### 手動デプロイ
```bash
# 変更をコミット
git add .
git commit -m "Update website"
git push origin main
```

## ⚡ パフォーマンス最適化

- **軽量**: 静的ファイルのみで高速読み込み
- **CDN**: Google Fonts、Font AwesomeをCDNから読み込み
- **最適化**: CSS、JavaScriptの最小化
- **キャッシュ**: ブラウザキャッシュを活用

## 🔍 SEO最適化

- **メタタグ**: 適切なメタタグ設定
- **Open Graph**: SNS共有最適化
- **Twitter Card**: Twitter共有最適化
- **Structured Data**: 構造化データ
- **セマンティックHTML**: 適切なHTML構造

## 🎯 アクセシビリティ

- **Semantic HTML**: セマンティックHTML
- **ARIA Labels**: アクセシビリティラベル
- **Keyboard Navigation**: キーボードナビゲーション
- **Focus Management**: フォーカス管理
- **Color Contrast**: 色コントラスト

## 📱 ブラウザ対応

- **Chrome**: 最新版
- **Firefox**: 最新版
- **Safari**: 最新版
- **Edge**: 最新版
- **Mobile**: iOS Safari, Chrome Mobile

## 🔧 トラブルシューティング

### CSSが読み込まれない場合
1. `.nojekyll`ファイルが存在することを確認
2. ファイルパスが正しいことを確認
3. GitHub Pagesの設定を確認

### JavaScriptが動作しない場合
1. ブラウザのコンソールでエラーを確認
2. ファイルパスが正しいことを確認
3. ブラウザのJavaScriptが有効になっていることを確認

## 📝 ライセンス

© 2024 オールジェンス株式会社. All rights reserved.

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📞 サポート

ご質問やサポートが必要な場合は、以下までお問い合わせください：

- **Email**: info@allgens.co.jp
- **Phone**: 03-1234-5678
- **Website**: https://itsukitak3ura.github.io/allgens-corporate-site/

## 🔄 更新履歴

- **2024年10月**: 静的サイトとして再構築
- **2024年4月**: 初回リリース