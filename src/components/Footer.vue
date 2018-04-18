<template>
  <div class="w-100 fixed-bottom bg-dark">
    <div class="container my-2">
      <div class="form-group row justify-content-center">
        <div class="col-10">
          <input type="text" placeholder="input" class="form-control" id="postContents" v-model="newMessage" @keyup.enter="onClickSend" autocomplete="off">
        </div>
        <div class="col-2 d-flex justify-content-center">
          <button type="button" class="btn btn-primary" @click="onClickSend">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data: function() {
    return {
      newMessage: ""
    };
  },
  methods: {
    onClickSend: function() {
      this.$emit("addMessage", { newMessage: this.newMessage });
    }
  }
};
</script>
