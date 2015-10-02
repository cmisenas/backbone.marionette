var Marionette;

import
  {
    bindEntityEvents,
    unbindEntityEvents,
    proxyBindEntityEvents,
    proxyUnbindEntityEvents
  } from './bind-entity-events';

import
  {
    proxyRadioHandlers,
    unproxyRadioHandlers
  } from './radio-helpers';

import
  {
    triggerMethod,
    triggerMethodOn,
    triggerMethodMany
  } from './trigger-method';

import extend             from './utils/extend';
import isNodeAttached     from './utils/isNodeAttached';
import mergeOptions       from './utils/mergeOptions';
import getOption          from './utils/getOption';
import proxyGetOption     from './utils/proxyGetOption';
import normalizeMethods   from './utils/normalizeMethods';
import normalizeUIString  from './utils/normalizeUIString';
import normalizeUIKeys    from './utils/normalizeUIKeys';
import normalizeUIValues  from './utils/normalizeUIValues';
import actAsCollection    from './utils/actAsCollection';
import deprecate          from './utils/deprecate';

import MonitorDOMRefresh from './dom-refresh';
import MNObject      from './object';
import Renderer      from './renderer';
import TemplateCache from './template-cache';
import AbstractView  from './abstract-view';
import View          from './view';
import CollectionView from './collection-view';
import CompositeView from './composite-view';
import Behavior      from './behavior';
import Behaviors     from './behaviors';
import Region        from './region';
import RegionManager from './region-manager';

import Application   from './application';
import AppRouter     from './app-router';

import metalSetup    from './metal';

import { FEATURES, isEnabled, setEnabled } from './features';

import MarionetteError from './error';

Marionette = Marionette || {};

// extend Marionette in the meantime
Object.assign(Marionette, {
  bindEntityEvents,
  unbindEntityEvents,
  proxyBindEntityEvents,
  proxyUnbindEntityEvents,
  proxyRadioHandlers,
  unproxyRadioHandlers,
  extend,
  isNodeAttached,
  mergeOptions,
  getOption,
  proxyGetOption,
  normalizeMethods,
  normalizeUIString,
  normalizeUIKeys,
  normalizeUIValues,
  actAsCollection,
  deprecate,
  MonitorDOMRefresh,
  triggerMethod,
  triggerMethodOn,
  triggerMethodMany,
  MarionetteError,
  FEATURES,
  isEnabled,
  setEnabled,
  Application,
  AppRouter,
  MonitorDOMRefresh,
  MNObject,
  Renderer,
  TemplateCache,
  AbstractView,
  View,
  CollectionView,
  CompositeView,
  Behavior,
  Behaviors,
  Region,
  RegionManager
});

Marionette.Object = MNObject;

metalSetup(Marionette);

export default Marionette;
