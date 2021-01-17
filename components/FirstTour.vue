<template>
 <div>
   <h2 class="visible">Toutorial Tour</h2>
   <button @click="show" class="visible">START</button>

    <modal name="modal-content" width="50%" height="300px">
      <p>Welcome to Nihon's Kitchen!<br />Let you show how to use here!</p>
      <div class="btn-area">
        <button @click="show12" class="btn-control">&gt;</button>
      </div>
    </modal>

    <modal name="modal-content2" width="50%" height="300px">
      <p>
        Please enter the name of the dish or ingredients in the search area.<br />
        You can also look up products by barcode.<br />
        <img src="~/assets/resources/temp-tour01.png">
      </p>
      <div class="btn-area">
        <button @click="show21" class="btn-control">&lt;</button>
        <button @click="show23" class="btn-control">&gt;</button>
      </div>
    </modal>

    <modal name="modal-content3" width="50%" height="300px">
      <p>
        To view favorite or submitted recipes, click the "Cookbook" button.<br />
        If you want to see registrationor watch this tutorial again, click on the "Profile" button.<br />
        <img src="~/assets/resources/temp-tour02.png">
      </p>
      <div class="btn-area">
        <button @click="show32" class="btn-control">&lt;</button>
        <button @click="show34" class="btn-control">&gt;</button>
      </div>
    </modal>

    <modal name="modal-content4" width="50%" height="300px">
      <p>
        Okay, Let's enjoy Nihon's Kitchen!
      </p>
      <div class="btn-area">
        <button @click="show43" class="btn-control">&lt;</button>
        <button @click="hide" class="btn-control end">end</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show("modal-content");
    },
    show12() {
      this.$modal.hide("modal-content");
      this.$modal.show("modal-content2");
    },
    show21() {
      this.$modal.hide("modal-content2");
      this.$modal.show("modal-content");
    },
    show23() {
      this.$modal.hide("modal-content2");
      this.$modal.show("modal-content3");
    },
    show32() {
      this.$modal.hide("modal-content3");
      this.$modal.show("modal-content2");
    },
    show34() {
      this.$modal.hide("modal-content3");
      this.$modal.show("modal-content4");
    },
    show43() {
      this.$modal.hide("modal-content4");
      this.$modal.show("modal-content3");
    },
    hide() {
      this.$modal.hide("modal-content4");
    }
  }
};
</script>

<style scoped>
.btn-area{
  display: flex;
  justify-content: flex-end;
  padding: 7px;
}
.btn-control {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 0px;
  background-color: #F7B981;
  color: #F4F2EE;
  text-align: center;
  font-size: 40px;
  margin: 5px;
}
.end {
  font-size: 12px;
}

</style>