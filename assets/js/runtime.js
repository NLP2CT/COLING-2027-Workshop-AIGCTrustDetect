/*
 * AIGCTrustDetect site runtime.
 * Renders the <template id="page-template"> markup with the page's Component:
 *   {{path}}            text or attribute values from renderVals()
 *   <sc-for list as>    repeat children for each item
 *   <sc-if value>       render children when the value is truthy
 *   onClick="{{fn}}"    click handler
 * The whole page re-renders on setState; pages are small, so this stays fast.
 */
(function () {
  'use strict';

  var HOLE = /\{\{\s*([\w.$]+)\s*\}\}/g;
  var EXACT = /^\{\{\s*([\w.$]+)\s*\}\}$/;

  function lookup(scope, path) {
    var parts = path.split('.');
    var cur = scope;
    for (var i = 0; i < parts.length; i++) {
      if (cur === null || cur === undefined) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function interpolate(str, scope) {
    return str.replace(HOLE, function (_, path) {
      var v = lookup(scope, path);
      return v === null || v === undefined ? '' : String(v);
    });
  }

  function DCLogic(props) {
    this.props = props || {};
    this.state = {};
  }
  DCLogic.prototype.setState = function (patch) {
    var next = typeof patch === 'function' ? patch(this.state) : patch;
    this.state = Object.assign({}, this.state, next);
    if (this.__render) this.__render();
  };

  var prevKeys = new Set();
  var nextKeys = null;

  function renderChildren(parent, target, scope, keyPrefix) {
    var kids = parent.childNodes;
    for (var i = 0; i < kids.length; i++) {
      renderNode(kids[i], target, scope, keyPrefix + '.' + i);
    }
  }

  function renderNode(node, target, scope, key) {
    if (node.nodeType === 3) {
      target.appendChild(document.createTextNode(interpolate(node.nodeValue, scope)));
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.localName;

    if (tag === 'sc-for') {
      var list = lookup(scope, (node.getAttribute('list') || '').replace(/[{}\s]/g, '')) || [];
      var as = node.getAttribute('as') || 'item';
      for (var j = 0; j < list.length; j++) {
        var inner = Object.create(scope);
        inner[as] = list[j];
        renderChildren(node, target, inner, key + '[' + j + ']');
      }
      return;
    }
    if (tag === 'sc-if') {
      var val = lookup(scope, (node.getAttribute('value') || '').replace(/[{}\s]/g, ''));
      if (val) renderChildren(node, target, scope, key);
      return;
    }

    var el = node.cloneNode(false);
    var attrs = Array.prototype.slice.call(node.attributes);
    for (var a = 0; a < attrs.length; a++) {
      var name = attrs[a].name;
      var value = attrs[a].value;
      if (name.indexOf('hint-') === 0) { el.removeAttribute(name); continue; }
      if (name.length > 2 && name.slice(0, 2) === 'on' && EXACT.test(value)) {
        el.removeAttribute(name);
        var fn = lookup(scope, value.match(EXACT)[1]);
        if (typeof fn === 'function') {
          el.addEventListener(name.slice(2).toLowerCase(), fn);
        }
        continue;
      }
      var exact = value.match(EXACT);
      if (exact) {
        var raw = lookup(scope, exact[1]);
        if (raw === false || raw === null || raw === undefined) {
          el.removeAttribute(name);
        } else if (raw === true) {
          el.setAttribute(name, '');
        } else {
          el.setAttribute(name, String(raw));
        }
      } else if (value.indexOf('{{') !== -1) {
        el.setAttribute(name, interpolate(value, scope));
      }
    }

    var cls = el.getAttribute('class') || '';
    if (/\b(rise|unfold)\b/.test(cls)) {
      nextKeys.add(key);
      if (prevKeys.has(key)) el.style.animation = 'none';
    }

    var source = tag === 'template' ? node.content : node;
    renderChildren(source, el, scope, key);
    target.appendChild(el);
  }

  function focusIndex(root) {
    var active = document.activeElement;
    if (!active || !root.contains(active)) return -1;
    var items = root.querySelectorAll('button, a, [tabindex]');
    return Array.prototype.indexOf.call(items, active);
  }

  function mount(ComponentClass) {
    var root = document.getElementById('app');
    var tpl = document.getElementById('page-template');
    var comp = new ComponentClass({});
    comp.__render = function () {
      var idx = focusIndex(root);
      var vals = comp.renderVals();
      var frag = document.createDocumentFragment();
      nextKeys = new Set();
      renderChildren(tpl.content, frag, vals, 'r');
      prevKeys = nextKeys;
      root.replaceChildren(frag);
      if (idx >= 0) {
        var items = root.querySelectorAll('button, a, [tabindex]');
        if (items[idx]) items[idx].focus({ preventScroll: true });
      }
    };
    comp.__render();
  }

  window.DCLogic = DCLogic;
  window.AIGC = { mount: mount };
})();
