var sinon = require('sinon');
var $ = require('jquery');
var $fixtures;

var setFixtures = function() {
  _.each(arguments, function(content) {
    $fixtures.append(content);
  });
};

var clearFixtures = function() {
  $fixtures.empty();
};

before(function() {
  $fixtures = $('<div id="fixtures">');
  $('body').append($fixtures)
  this.checkProperties = function(block, blacklist) {
    blacklist = blacklist ? blacklist.push('cid') : 'cid';
    var props = _.partial(_.omit, _, blacklist);
    block.call(this, props);
  };
});

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
  this.setFixtures   = setFixtures;
  this.clearFixtures = clearFixtures;
});

afterEach(function() {
  this.sinon.restore();
  window.location.hash = '';
  Backbone.history.stop();
  Backbone.history.handlers.length = 0;
  clearFixtures();
});
