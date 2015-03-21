var Marionette;

import
  {
    bindEntityEvents,
    unbindEntityEvents,
    proxyBindEntityEvents,
    proxyUnbindEntityEvents
  } from './bind-entity-events';

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
import
  {
    triggerMethod,
    triggerMethodOn,
    triggerMethodMany
  } from './trigger-method';

import { FEATURES, isEnabled, setEnabled } from './features';

import MarionetteError from './error';

Marionette = Marionette || {};

// extend Marionette in the meantime
Object.assign(Marionette, {
  bindEntityEvents,
  unbindEntityEvents,
  proxyBindEntityEvents,
  proxyUnbindEntityEvents,
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
  FEATURES,
  isEnabled,
  setEnabled,
  MarionetteError
});

export default Marionette;
