# Nihon's Kitchen

Nihon's Kitchenへようこそ！このプロジェクトは、日本に住んでいる英語圏の人たちが、日本の食材を使った素晴らしいレシピを共有できるようにするために作られました。日本に来たばかりの人にとって、日本の食品ラベルのパッケージを読んで理解するのは難しいかもしれません。そこで、ユーザーがバーコードをスキャンして英訳を入力することで、他の人たちを助けるためのデータベースを作りました。

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

## Current Features
1. Create and view recipes
2. Find and share product information via the barcode scanner
3. Add recipe ingredients to your shopping list and buy them online
4. Create and manage your user profile
5. Search to find specific recipes

## Future Features
1. Add recipes to your "Favorites" list
2. Comment on recipes
3. Give great recipes a thumbs up, or not-so-great ones a thumbs down
4. Show recipe prices
5. Recipe suggestions based on what you currently have in your refrigerator!

## Technologies Used

1. Vue.js: https://vuejs.org
2. NuxtJS: https://nuxtjs.org
3. QuaggaJS: https://serratus.github.io/quaggaJS
5. Firebase: https://firebase.google.com  
    * Firebase Hosting
    * Firebase Authentication
    * Cloud Storage
    * Cloud Firestore

