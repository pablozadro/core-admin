export default {
  _type: null,
  is: function(el) {
    this._type = el.constructor.name.toString();
    return this;
  },
  string: function(){
    return this._type === 'String';
  },
  number: function(){
    return this._type === 'Number';
  },
  array: function(){
    return this._type === 'Array';
  },
  object: function(){
    return this._type === 'Object';
  },
  function: function(){
    return this._type === 'Function';
  }
};
