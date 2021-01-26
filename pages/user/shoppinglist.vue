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
              <!-- <button @click="rakutenURL(list.itemUrl)">
                Buy on Rakuten
              </button> -->
              <button class="amazon-fresh" type="submit" @click="amazonURL(list.itemUrl)">
                Amazon Fresh
              </button>
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
    amazonURL(item) {
      window.open(`https://www.amazon.co.jp/s?k=${item}&i=amazonfresh&tag=nihonskitchen-22`) 
    },
    // rakutenURL (url) {
    //   window.open(`https://search.rakuten.co.jp/search/mall/${url}/100227/?st=O`, '_blank')
    // },
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
  max-width: 400px;
}
.amazon-fresh {
  background-color: rgb(106, 216, 106);
}
.remove-btn {
  background-color: #f7b981;
}
.remove-btn:hover {
  background-color: #ffa95d;
}
</style>