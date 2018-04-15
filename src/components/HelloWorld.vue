<template>
  <div>
    <div class="navbar sticky-top bg-dark">
      <span class="navbar-brand text-white">Chat</span>
    </div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-6">
          <div class="text-left">太郎</div>
          <div class="card">
            <div class="card-body">
              <p>Change text alignment, transform, style, weight, and color with our text utilities and color utilities.</p>
            </div>
          </div>
          <div class="text-left">9:00</div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-6">
          <div class="text-right">花子</div>
          <div class="card">
            <div class="card-body">
              <p>Change text alignment, transform, style, weight, and color with our text utilities and color utilities.</p>
            </div>
          </div>
          <div class="text-right">10:00</div>
        </div>
      </div>
    </div>
    <div class="w-100 fixed-bottom bg-dark">
      <form>
        <div class="container my-2">
          <div class="form-group row justify-content-center">
            <div class="col-10">
              <input type="text" placeholder="input" class="form-control" id="postContents" v-model="newMessage">
            </div>
            <div class="col-2 d-flex justify-content-center">
              <button class="btn btn-primary" @click="addMessage('test')">Send</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: {
    messages: [],
    newMessage: ""
  },
  methods: {
    addMessage: function() {
      this.messages.push({
        id: "",
        Name: "",
        message: "test",
        timeStamp: ""
      });
    }
  }
};
</script>