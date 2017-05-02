import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNumber(number) {
      this.model.push(number)
    }
  }
});
