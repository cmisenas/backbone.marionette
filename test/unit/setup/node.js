var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var chaiJq = require('chai-jq');
import Marionette from '../../../src/backbone-marionette';

chai.use(sinonChai);
chai.use(chaiJq);

global.expect = chai.expect;
global.sinon = sinon;

if (!global.document || !global.window) {
  var jsdom = require('jsdom').jsdom;

  global.document = jsdom('<html><head><script></script></head><body></body></html>', null, {
    FetchExternalResources:   ['script'],
    ProcessExternalResources: ['script'],
    MutationEvents:           '2.0',
    QuerySelector:            false
  });

  global.window = document.parentWindow;
  global.navigator = global.window.navigator;

  global.window.Node.prototype.contains = function(node) {
    return this.compareDocumentPosition(node) && 16;
  };
}

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
global.Backbone = require('backbone');
global.Backbone.$ = global.$;
global.Marionette = Backbone.Marionette = Marionette;

global.Metal = require('backbone-metal');

require('backbone.babysitter');
require('backbone.radio');
global.slice = Array.prototype.slice;
