<template>
    <div class="shoppinglist-card">
      <h1>Shopping List</h1>
      <div v-if="itemList.length === 0">Your shopping list is currently empty!</div>
      <div
        v-for="(list, index) in itemList"
        :key="list.ingredient_id"
      >
        <ul>
          <li class="flexbox">
            <button class="remove-btn" @click="removeFromShoppingList(index)">x</button>
            <div>{{ list.amount }}</div>
            <div>{{ list.unit }}</div>
            <div>{{ list.name }}</div>
            <div>
              <a :href="list.itemUrl" target="_blank">
              <button @click="rakutenURL(list.itemUrl)">
                Buy on Rakuten
              </button>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return{
      itemList: this.$store.state.shoppinglist.shoppingList,
    }
  },
  methods: {
    rakutenURL (url) {
      window.open(`https://search.rakuten.co.jp/search/mall/${url}/100227/?st=O`, '_blank')
    },
    removeFromShoppingList(index) {
      this.$store.commit(
        "shoppinglist/removeFromShoppingList",
        index
      );
    },
  }
};
</script>

<style>
.shoppinglist-card {
  position: relative;
  top: 80px;
  margin: 0 auto 100px;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  background-color: #f4f2ee;
  border-radius: 8px;
  min-width: 360px;
  max-width: 360px;
}
</style>