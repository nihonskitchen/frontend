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
            <div class="item-units">{{ list.units }}</div>
            <div class="item-name">{{ list.ingredient_name }}</div>
            <div class="item-button">
              <!-- <object type="image/svg+xml" data="~/assets/resources/rakuten.svg" width="166" height="50"></object> -->
              <a :href="list.itemUrl" target="_blank">
              <button @click="rakutenURL, list.itemUrl">
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
  //mountedか何かに変更する必要ありそう
  // async asyncData({ $axios, store }) {
  //     console.log(store.state.shoppinglist.shoppingList);
  //     let lists = store.state.shoppinglist.shoppingList;
  //     const apiUrl = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1060380614247351390&sort=standard&genreId=100227&elements=itemUrl,itemName,itemPrice&availability=1&hits=1&keyword="
  //     for (let i = 0; i < lists.length; i++) {
  //       let getURL = apiUrl + lists[i];
  //       console.log(getURL);
  //       let item = await $axios.$get(getURL);
  //       console.log(item);
  //       lists[i].url = item.Items.Item.itemUrl
  //     }
  //     console.log(lists);
  //     store.commit("shoppinglist/setLists", lists);
  // },
  // 
  methods: {
    rakutenURL (url) {
      window.open(url, '_blank')
    }

    // async amazonFresh () {
    //   const amazonFreshJson = {
    //     ingredients: [],
    //     saved: false,
    //     recipeComposition: {
    //       saved: false
    //     }
    //   };
    //   const listItems = this.$store.state.shoppinglist.shoppingList;
    //   for (const i of listItems) {
    //     const ingredient = {
    //       name: "", componentIndex: 0,
    //       quantityList: [ { unit: "", amount: "" } ]
    //     };
    //     ingredient.name = i.ingredient_name;
    //     ingredient.quantityList[0].amount = i.amount;
    //     ingredient.quantityList[0].units = i.units;
    //     amazonFreshJson.ingredients.push(ingredient);
    //   };
    //   // console.log(amazonFreshJson.ingredients);
    //   // console.log(JSON.stringify(amazonFreshJson));

    //   // JSONで送ってるけど415が返ってくる
    //   // いまいち何を修正したらいいか不明
    //   // 参考：http://limedaley.com/post/amazon-fresh-api
    //   // formデータ作って送信する挙動をかますとうまくいく？かも？
    //   await this.$axios.$post(
    //     "https://www.amazon.co.jp/afx/ingredients/verify",
    //     JSON.stringify(amazonFreshJson),
    //     { 
    //       header : { 'Content-Type': 'application/json;charset=UTF-8' }
    //     }
    //   );

    // },

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
  border-radius: 0px;
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