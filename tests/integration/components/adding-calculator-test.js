import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('adding-calculator', 'Integration | Component | adding calculator', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{adding-calculator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#adding-calculator}}
      template block text
    {{/adding-calculator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
