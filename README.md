# オールジェンス株式会社 コーポレートサイト

Next.js 14 + TypeScript + Tailwind CSS で構築されたモダンなコーポレートサイトです。

## 🚀 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **フォーム**: React Hook Form + Zod
- **テーマ**: next-themes (ダークモード対応)
- **通知**: React Hot Toast

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # セクションコンポーネント
│   │   ├── HeroSection.tsx
│   │   ├── ChallengeSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── ServiceSection.tsx
│   │   ├── AchievementSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/               # UIコンポーネント
│   │   ├── Counter.tsx
│   │   ├── ParticleBackground.tsx
│   │   └── Preloader.tsx
│   └── providers/        # プロバイダー
│       └── ThemeProvider.tsx
├── lib/                  # ユーティリティ関数
├── types/                # TypeScript型定義
└── styles/               # スタイルファイル
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: Blue (#0ea5e9)
- **Accent**: Amber (#f59e0b)
- **Dark**: Slate (#0f172a)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### タイポグラフィ
- **日本語**: Noto Sans JP
- **英語**: Inter
- **フォールバック**: sans-serif

### アニメーション
- **Framer Motion**: スムーズなアニメーション
- **Intersection Observer**: スクロール連動アニメーション
- **CSS Transitions**: ホバーエフェクト

## 🚀 セットアップ

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバーの起動
```bash
npm run dev
```

### 3. ブラウザで確認
http://localhost:3000 を開いてサイトを確認

## 📦 ビルド

### 本番ビルド
```bash
npm run build
```

### 本番サーバーの起動
```bash
npm start
```

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# リンター実行
npm run lint

# 型チェック
npm run type-check
```

## 📱 レスポンシブ対応

- **Mobile First**: モバイルファーストデザイン
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🌙 ダークモード

- **next-themes**を使用したダークモード対応
- システム設定に応じた自動切り替え
- ユーザー設定の永続化

## ⚡ パフォーマンス最適化

- **Next.js Image**: 画像最適化
- **Font Optimization**: フォント最適化
- **Code Splitting**: コード分割
- **Lazy Loading**: 遅延読み込み
- **Bundle Analysis**: バンドル分析

## 🔍 SEO最適化

- **Metadata API**: 動的メタデータ
- **Open Graph**: SNS共有最適化
- **Twitter Card**: Twitter共有最適化
- **Structured Data**: 構造化データ
- **Sitemap**: サイトマップ自動生成

## 🎯 アクセシビリティ

- **Semantic HTML**: セマンティックHTML
- **ARIA Labels**: アクセシビリティラベル
- **Keyboard Navigation**: キーボードナビゲーション
- **Focus Management**: フォーカス管理
- **Color Contrast**: 色コントラスト

## 📊 分析・監視

- **Google Analytics**: アクセス解析
- **Core Web Vitals**: パフォーマンス監視
- **Error Tracking**: エラー追跡

## 🚀 デプロイ

### Vercel (推奨)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# distフォルダをNetlifyにデプロイ
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

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
- **Website**: https://allgens.co.jp
