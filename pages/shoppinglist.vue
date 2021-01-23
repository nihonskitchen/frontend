<template>
  <div class="container">
    <div class="shoppinglist-card">
      <h1>Shopping List</h1>
      <!-- <div><h2>Ingredients</h2></div> -->
      <!-- <div><button @click="amazonFresh">Amazon Fresh?</button></div> -->
      <div
        class="grid-item grid-padding"
        v-for="list in this.$store.state.shoppinglist.shoppingList"
        :key="list.ingredient_id"
      >
        <ul>
          <li class="flexbox">
            <div class="item-amount">{{ list.amount }}</div>
            <div class="item-units">{{ list.unit }}</div>
            <div class="item-name">{{ list.name }}</div>
            <div class="item-button">
              <!-- <object type="image/svg+xml" data="~/assets/resources/rakuten.svg" width="166" height="50"></object> -->
              <a :href="list.itemUrl" target="_blank">
              <button @click="rakutenURL(list.itemUrl)">
                Rakuten
              </button>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      itemList: this.$store.state.shoppinglist.shoppingList
    }
  },
  methods: {
    rakutenURL (url) {
      window.open(`https://search.rakuten.co.jp/search/mall/${url}/100227/?st=O`, '_blank')
    }
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
h1 {
    text-align: center;
    padding: 10px;
}
.ingredients-list {
  /* left: 50%; */
  display: grid;
  grid-template-columns: auto;
  max-width: 360px;
  /* justify-content: center; */
}
.grid-item {
  justify-content: center;
  /* margin-bottom: 10px; */
  margin: 0px;
  /* padding: 10px; */
  /* left: 50%; */
}
button {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #e76c73;
  border: 0px;
  font-size: 15px;
  border-radius: 8px;
  height: 20px
}
.flexbox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.item-check {
  flex-basis: 20px;
}
.item-amount {
  flex-basis: 40px;
}
.item-units {
  flex-basis: 70px;
}
.item-ingredient_name {
  flex-basis: 180px;
}
.item-button {
  flex-basis: 70px;
}
.item-button button {
  width: 70px;
}
</style>