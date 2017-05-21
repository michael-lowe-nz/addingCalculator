import Ember from 'ember';

export default Ember.Component.extend({
  currentInput: null,
  numbers: [1,5,7],

  sumNumbers: Ember.computed('numbers', function () {
    return this.get('numbers').reduce((current, sum) => current + sum, 0);
  }),

  actions: {
    add: function() {
      this.set('numbers', 'numbers'.pushObject(4))
    }
  }
});
