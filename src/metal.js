import _           from 'underscore';
import {isEnabled} from './features';
import Backbone    from 'backbone';

var enableMetal = function(Marionette) {
  // Missing Metal Items
  // 1. Marionette.Class parity
  // 2. Marionette.Deprecate

  Marionette.Class = Metal.Class.extend({});

  function classify(obj) {
    return Marionette.Class.extend(
      _.extend(
        {constructor: obj},
        _.omit(obj.prototype, _.keys(Marionette.Class.prototype))
      )
    );
  }


  Backbone.View         = classify(Backbone.View);
  Marionette.Mixin      = Metal.Mixin;
  Marionette.Events     = Backbone.Events     = new Marionette.Mixin(Backbone.Events);
  Marionette.Model      = Backbone.Model      = classify(Backbone.Model);
  Marionette.Collection = Backbone.Collection = classify(Backbone.Collection);
  Marionette.Router     = Backbone.Router     = classify(Backbone.Router);
  Marionette.History    = Backbone.History    = classify(Backbone.History);
  Marionette.history    = Backbone.history    = new Marionette.History();
};

var disableMetal = function(Marionette) {
  delete Marionette.Class;
  delete Marionette.Mixin;
  delete Marionette.Events;
  delete Marionette.Model;
  delete Marionette.Collection;
  delete Marionette.Router;
  delete Marionette.History;
  delete Marionette.history;
};

export default {
  enableMetal,
  disableMetal
};
