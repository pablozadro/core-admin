import types from '@/utils/types';

export default {
  topics: {},
  tokenID: 0,
  subscribe: function(topic, callback) {
    if(!types.is(topic).string()) {
      console.warn('topic must be a string');
      return;
    }

    if(!types.is(callback).function()) {
      console.warn('callback should be a function');
      return;
    }

    if(!this.topics[topic]) {
      this.topics[topic] = [];
    }

    const token = this.tokenID++;
    this.topics[topic].push({token: token, callback: callback});

    return token;
  },
  publish: function(topic, context={}) {
    if(!types.is(topic).string()) {
      console.warn('topic must be a string');
      return;
    }

    if(!this.topics[topic]) {
      console.warn(`there is no subscriber to the topic ${topic}`);
      return;
    }
    this.topics[topic].forEach(callback => {
      callback.callback(context);
    });
  },
  unsubscribe: function(topic, token) {
    if(!types.is(topic).string()) {
      console.warn('topic must be a string');
      return;
    }

    if(!types.is(token).number()) {
      console.warn('token must be a number');
      return;
    }

    if(!this.topics[topic]) {
      console.warn(`topic ${topic} does not exists`);
      return;
    }
    
    this.topics[topic].forEach(callback => {
      if(callback.token === token) {
        this.topics[topic].splice(this.tokenID-1, 1);
      }
    });
  },
  restore: function() {
    this.topics = {};
    this.tokenID = 0;
  }
};
