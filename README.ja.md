# Nihon's Kitchen

Nihon's Kitchenへようこそ！このプロジェクトは、日本に住んでいる英語圏の人たちが、日本の食材を使った素晴らしいレシピを英語で共有できるようにするために作られました。日本に来たばかりの人にとって、日本の食品ラベルのパッケージを読んで理解するのは難しいかもしれません。そこで、ユーザーがバーコードをスキャンして英訳を入力することで、他の人たちを助けるためのデータベースを作りました。

## リンク

Nihon's Kitchenへのアクセスはこちら：

### Staging Server

https://nihonskitchen.web.app

### Production Server

https://nihonskitchen-prod.web.app

## アプリのインストール方法

アプリをインストールしてコードの動作を確認したい場合は、このリポジトリをフォークして以下を実行してください。

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 機能
1. レシピの投稿と閲覧
2. バーコードスキャナによる製品情報の検索と共有
3. レシピの材料をショッピングリストに追加して、オンラインで購入
4. ユーザープロフィールの作成と管理
5. レシピ検索

## 追加予定の機能
1. レシピを「お気に入り」リストに追加
2. レシピへのコメント
3. レシピの評価
4. レシピの価格表示
5. レシピの編集と削除
6. 冷蔵庫にある材料を元にレシピ提案

## 使用した技術
1. Vue.js: https://vuejs.org
2. NuxtJS: https://nuxtjs.org
3. QuaggaJS: https://serratus.github.io/quaggaJS
4. Firebase: https://firebase.google.com
    * Firebase Hosting
    * Firebase Authentication
    * Cloud Storage
    * Cloud Firestore

