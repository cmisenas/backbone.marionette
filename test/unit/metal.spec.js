import {enableMetal, disableMetal} from '../../src/metal';
import Marionette from '../../src/backbone-marionette';
import Bb         from 'backbone';

var foo = Marionette;
var bar = Bb;
describe('metal', function() {
  before(function() {
    enableMetal(Marionette);
  });

  after(function() {
    disableMetal(Marionette);
  });

  describe('classifying backbone primitives', function() {
    it('view instances are instances of classes', function() {
      var view = new Marionette.View();
      expect(view).to.be.instanceof(Backbone.View);
      expect(view).to.be.instanceof(Marionette.View);
      expect(view).to.be.instanceof(Backbone.Metal.Class);
    });

    it('model instances are instances of classes', function() {
      var model = new Marionette.Model();
      expect(model).to.be.instanceof(Backbone.Model);
      expect(model).to.be.instanceof(Marionette.Model);
      expect(model).to.be.instanceof(Backbone.Metal.Class);
    });

    it('collection instances are instances of classes', function() {
      var collection = new Marionette.Collection();
      expect(collection).to.be.instanceof(Backbone.Collection);
      expect(collection).to.be.instanceof(Marionette.Collection);
      expect(collection).to.be.instanceof(Backbone.Metal.Class);
    });

    it('router instances are instances of classes', function() {
      var router = new Marionette.Router()
      expect(router).to.be.instanceof(Backbone.Router);
      expect(router).to.be.instanceof(Marionette.Router);
      expect(router).to.be.instanceof(Backbone.Metal.Class);
    });
  });
});
