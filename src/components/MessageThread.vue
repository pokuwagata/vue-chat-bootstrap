<template>
  <div class="container">
    <div class="row" v-for="message in messages" :class="{
            'justify-content-start': !isMyName(message.name),
            'justify-content-end': isMyName(message.name)
          }">
      <div class="col-6 mb-3">
        <div class="mb-2" :class="{'text-left': !isMyName(message.name), 'text-right': isMyName(message.name)}">{{message.name}}</div>
        <div class="card mb-2">
          <div class="card-body">
            <span>{{message.message}}</span>
          </div>
        </div>
        <div :class="{'text-left': !isMyName(message.name), 'text-right': isMyName(message.name)}">{{message.timeStamp}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageThread",
  props: ["messages", "myName"],
  methods: {
    isMyName: function(name) {
      return name === this.myName;
    }
  }
};
</script>
