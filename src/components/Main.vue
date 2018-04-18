<template>
  <div>
    <MessageThread :messages="messages" :my-name="myName" />
    <ChatFormBar v-on:add-message="addMessage" />
  </div>
</template>
<script>
import MessageThread from "./MessageThread.vue";
import ChatFormBar from "./ChatFormBar";

export default {
  name: "Main",
  components: {
    MessageThread,
    ChatFormBar
  },
  data: function() {
    return {
      myName: "Me",
      messages: [
        {
          id: "",
          name: "Taro",
          message: "Hello!",
          timeStamp: "2018/4/16 23:38:16"
        }
      ]
    };
  },
  methods: {
    addMessage: function(payload) {
      var value = payload.newMessage;
      if (!value) {
        return;
      }
      var timeStamp = new Date();
      this.messages.push({
        id: "",
        name: this.myName,
        message: value,
        timeStamp: timeStamp.toLocaleString()
      });
    }
  }
};
</script>

