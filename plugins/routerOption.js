export default async ({ app }) => {
  app.router.afterEach((to, from) => {
    // ページ遷移ごとに行いたい処理
  });
};
// 参考
// https://qiita.com/tobita0000/items/2478ca8159c861752988
// ページ遷移ごとにやりたい作業のcallback一覧
// https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards