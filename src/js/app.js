/*global Vue*/
(function (exports) {

  'use strict';

  exports.app = new Vue({
    el: '.chat-app',
    data: {
      myName: "Me",
      messages: [
        {
          id: "",
          name: 'Taro',
          message: 'Hello!',
          timeStamp: '2018/4/16 23:38:16'
        }],
      newMessage: ""
    },
    computed: {
    },
    methods: {
      addMessage: function () {
        var value = this.newMessage;
        if (!value) {
          return
        }
        var timeStamp = new Date();
        this.messages.push({
          id: "",
          name: this.myName,
          message: value,
          timeStamp: timeStamp.toLocaleString()
        });
        this.newMessage = '';
      },
      isMyName: function (name) {
        return name === this.myName
      }
    }
  });

})(window);