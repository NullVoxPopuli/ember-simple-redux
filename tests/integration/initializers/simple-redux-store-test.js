import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupRenderingTest } from 'ember-mocha';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import isReduxStore from '../../utils/is-redux-store';

describe('Integration | Initializer | simple-redux-store', function() {
  setupRenderingTest();

  it('injects `simpleReduxStore` to components', async function() {
    const spy = sinon.spy();
    this.set('spy', spy);

    await render(hbs`{{tests/click-for-instance onClick=spy}}`);
    await click('.test-target');

    expect(spy.calledOnce, 'Spy called exactly once').to.be.true;
    expect(
      isReduxStore(spy.getCall(0).args[0].simpleReduxStore),
      'Spy called with Redux store'
    ).to.be.true;
  });
});
