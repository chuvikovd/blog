import { a as _inherits, b as _classCallCheck, c as _possibleConstructorReturn, d as _getPrototypeOf, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as element, t as text, j as claim_element, k as children, l as claim_text, m as detach_dev, n as attr_dev, o as add_location, p as insert_dev, q as append_dev, r as noop, u as space, v as claim_space, w as _slicedToArray, x as destroy_each, y as day, z as svg_element, A as listen_dev, B as create_slot, C as create_component, D as claim_component, E as mount_component, F as get_slot_context, G as get_slot_changes, H as transition_in, I as transition_out, J as destroy_component, K as globals, L as set_data_dev, M as empty, N as assign, O as get_spread_update, P as get_spread_object, Q as setContext, R as group_outros, T as check_outros, U as writable, _ as _typeof } from './store.1874f07d.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator.70298a61.js';

var CONTEXT_KEY = {};

var file = "src\\components\\Nav.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (15:2) {#if !segment}


function create_if_block(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("Hey there. My name is Dmitrijs and this is my blog. Here I write about my\r\n      journeys in web development.");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Hey there. My name is Dmitrijs and this is my blog. Here I write about my\r\n      journeys in web development.");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "mt-4");
      add_location(p, file, 15, 4, 433);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(15:2) {#if !segment}",
    ctx: ctx
  });
  return block;
} // (25:4) {#each sortedCategories as category}


function create_each_block(ctx) {
  var li;
  var a;
  var t_value =
  /*category*/
  ctx[3] + "";
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "blog/category/".concat(
      /*category*/
      ctx[3]));
      attr_dev(a, "class", "hover:text-red");
      add_location(a, file, 26, 8, 816);
      attr_dev(li, "class", "mr-6");
      add_location(li, file, 25, 6, 789);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(25:4) {#each sortedCategories as category}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var a0;
  var h1;
  var t0;
  var span;
  var t1;
  var t2;
  var div_class_value;
  var t3;
  var nav;
  var ul;
  var t4;
  var li0;
  var t5;
  var t6;
  var li1;
  var a1;
  var t7;
  var nav_class_value;
  var if_block = !
  /*segment*/
  ctx[0] && create_if_block(ctx);
  var each_value =
  /*sortedCategories*/
  ctx[1];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      div = element("div");
      a0 = element("a");
      h1 = element("h1");
      t0 = text("chuva\r\n      ");
      span = element("span");
      t1 = text(".dev");
      t2 = space();
      if (if_block) if_block.c();
      t3 = space();
      nav = element("nav");
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t4 = space();
      li0 = element("li");
      t5 = text("|");
      t6 = space();
      li1 = element("li");
      a1 = element("a");
      t7 = text("About");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a0 = claim_element(div_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      h1 = claim_element(a0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "chuva\r\n      ");
      span = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, ".dev");
      span_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      a0_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      nav = claim_element(nodes, "NAV", {
        class: true
      });
      var nav_nodes = children(nav);
      ul = claim_element(nav_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      t4 = claim_space(ul_nodes);
      li0 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li0_nodes = children(li0);
      t5 = claim_text(li0_nodes, "|");
      li0_nodes.forEach(detach_dev);
      t6 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t7 = claim_text(a1_nodes, "About");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      nav_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-red -ml-5");
      add_location(span, file, 11, 6, 350);
      attr_dev(h1, "class", "inline-block font-display text-4xl font-bold whitespace-no-wrap");
      add_location(h1, file, 9, 4, 253);
      attr_dev(a0, "href", "/");
      add_location(a0, file, 8, 2, 235);
      attr_dev(div, "class", div_class_value = "w-full md:w-5/12 relative flex-col justify-center transition-padding ".concat(
      /*segment*/
      ctx[0] ? "pt-4" : "pt-10 md:pt-24"));
      add_location(div, file, 6, 0, 105);
      attr_dev(li0, "class", "mr-6");
      add_location(li0, file, 34, 4, 993);
      attr_dev(a1, "rel", "prefetch");
      attr_dev(a1, "href", "blog/hello-world");
      attr_dev(a1, "class", "hover:text-red");
      add_location(a1, file, 36, 6, 1047);
      attr_dev(li1, "class", "mr-6");
      add_location(li1, file, 35, 4, 1022);
      attr_dev(ul, "class", "list-none flex text-sm font-display");
      add_location(ul, file, 23, 2, 691);
      attr_dev(nav, "class", nav_class_value = "w-full border-b transition-padding ".concat(
      /*segment*/
      ctx[0] ? "mt-4 pb-4" : "mt-8 pb-8"));
      add_location(nav, file, 21, 0, 595);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, a0);
      append_dev(a0, h1);
      append_dev(h1, t0);
      append_dev(h1, span);
      append_dev(span, t1);
      append_dev(div, t2);
      if (if_block) if_block.m(div, null);
      insert_dev(target, t3, anchor);
      insert_dev(target, nav, anchor);
      append_dev(nav, ul);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }

      append_dev(ul, t4);
      append_dev(ul, li0);
      append_dev(li0, t5);
      append_dev(ul, t6);
      append_dev(ul, li1);
      append_dev(li1, a1);
      append_dev(a1, t7);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!
      /*segment*/
      ctx[0]) {
        if (!if_block) {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*segment*/
      1 && div_class_value !== (div_class_value = "w-full md:w-5/12 relative flex-col justify-center transition-padding ".concat(
      /*segment*/
      ctx[0] ? "pt-4" : "pt-10 md:pt-24"))) {
        attr_dev(div, "class", div_class_value);
      }

      if (dirty &
      /*sortedCategories*/
      2) {
        each_value =
        /*sortedCategories*/
        ctx[1];

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, t4);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*segment*/
      1 && nav_class_value !== (nav_class_value = "w-full border-b transition-padding ".concat(
      /*segment*/
      ctx[0] ? "mt-4 pb-4" : "mt-8 pb-8"))) {
        attr_dev(nav, "class", nav_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (if_block) if_block.d();
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(nav);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var segment = $$props.segment,
      categories = $$props.categories;
  var sortedCategories = categories.sort();
  var writable_props = ["segment", "categories"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Nav> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("categories" in $$props) $$invalidate(2, categories = $$props.categories);
  };

  $$self.$capture_state = function () {
    return {
      segment: segment,
      categories: categories
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("categories" in $$props) $$invalidate(2, categories = $$props.categories);
  };

  return [segment, sortedCategories, categories];
}

var Nav =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Nav, _SvelteComponentDev);

  function Nav(options) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      segment: 0,
      categories: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Nav",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<Nav> was created without expected prop 'segment'");
    }

    if (
    /*categories*/
    ctx[2] === undefined && !("categories" in props)) {
      console.warn("<Nav> was created without expected prop 'categories'");
    }

    return _this;
  }

  _createClass(Nav, [{
    key: "segment",
    get: function get() {
      throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "categories",
    get: function get() {
      throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Nav;
}(SvelteComponentDev);

var file$1 = "src\\components\\ModeSwitch.svelte";

function create_fragment$1(ctx) {
  var div;
  var svg0;
  var path0;
  var t;
  var svg1;
  var path1;
  var div_class_value;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t = space();
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      svg0 = claim_element(div_nodes, "svg", {
        viewBox: true,
        class: true
      }, 1);
      var svg0_nodes = children(svg0);
      path0 = claim_element(svg0_nodes, "path", {
        class: true,
        d: true
      }, 1);
      children(path0).forEach(detach_dev);
      svg0_nodes.forEach(detach_dev);
      t = claim_space(div_nodes);
      svg1 = claim_element(div_nodes, "svg", {
        viewBox: true,
        class: true
      }, 1);
      var svg1_nodes = children(svg1);
      path1 = claim_element(svg1_nodes, "path", {
        class: true,
        d: true
      }, 1);
      children(path1).forEach(detach_dev);
      svg1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path0, "class", "fill-yellow");
      attr_dev(path0, "d", "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1\r\n      96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3\r\n      33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4\r\n      33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7\r\n      70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6\r\n      0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3\r\n      94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4\r\n      21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9\r\n      49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181\r\n      0 49.9 49.9 49.9 131.1 0 181z");
      add_location(path0, file$1, 16, 4, 461);
      attr_dev(svg0, "viewBox", "0 0 512 512");
      attr_dev(svg0, "class", "w-6 mr-4");
      add_location(svg0, file$1, 15, 2, 411);
      attr_dev(path1, "class", "fill-pink");
      attr_dev(path1, "d", "M283.211 512c78.962 0 151.079-35.925 198.857-94.792\r\n      7.068-8.708-.639-21.43-11.562-19.35-124.203\r\n      23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635\r\n      101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0\r\n      283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z");
      add_location(path1, file$1, 30, 4, 1217);
      attr_dev(svg1, "viewBox", "0 0 512 512");
      attr_dev(svg1, "class", "w-5");
      add_location(svg1, file$1, 29, 2, 1172);
      attr_dev(div, "class", div_class_value = "flex p-5 fixed top-0 right-0 z-10 after:empty-content after:absolute after:bg-cyan after:w-6 after:h-6 cursor-pointer transition-mode ".concat(
      /*dayValue*/
      ctx[0] ? "active" : ""));
      add_location(div, file$1, 12, 0, 206);
      dispose = listen_dev(div, "click",
      /*toggle*/
      ctx[1], false, false, false);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, svg0);
      append_dev(svg0, path0);
      append_dev(div, t);
      append_dev(div, svg1);
      append_dev(svg1, path1);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*dayValue*/
      1 && div_class_value !== (div_class_value = "flex p-5 fixed top-0 right-0 z-10 after:empty-content after:absolute after:bg-cyan after:w-6 after:h-6 cursor-pointer transition-mode ".concat(
      /*dayValue*/
      ctx[0] ? "active" : ""))) {
        attr_dev(div, "class", div_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var dayValue;
  var unsubscribe = day.subscribe(function (value) {
    $$invalidate(0, dayValue = value);
  });

  var toggle = function toggle() {
    return day.update(function (day) {
      return !day;
    });
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("dayValue" in $$props) $$invalidate(0, dayValue = $$props.dayValue);
  };

  return [dayValue, toggle];
}

var ModeSwitch =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(ModeSwitch, _SvelteComponentDev);

  function ModeSwitch(options) {
    var _this;

    _classCallCheck(this, ModeSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModeSwitch).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ModeSwitch",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return ModeSwitch;
}(SvelteComponentDev);

function create_fragment$2(ctx) {
  var block = {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var Tailwindcss =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Tailwindcss, _SvelteComponentDev);

  function Tailwindcss(options) {
    var _this;

    _classCallCheck(this, Tailwindcss);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tailwindcss).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Tailwindcss",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Tailwindcss;
}(SvelteComponentDev);

var file$2 = "src\\components\\Copyright.svelte";

function create_fragment$3(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("© 2020 Dmitrijs Čuvikovs");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "© 2020 Dmitrijs Čuvikovs");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "w-full border-t text-center pt-8");
      add_location(p, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var Copyright =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Copyright, _SvelteComponentDev);

  function Copyright(options) {
    var _this;

    _classCallCheck(this, Copyright);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Copyright).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Copyright",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  return Copyright;
}(SvelteComponentDev);

var file$3 = "src\\routes\\_layout.svelte";

function create_fragment$4(ctx) {
  var t0;
  var main;
  var t1;
  var div;
  var t2;
  var t3;
  var main_class_value;
  var current;
  var tailwindcss = new Tailwindcss({
    $$inline: true
  });
  var modeswitch = new ModeSwitch({
    $$inline: true
  });
  var nav = new Nav({
    props: {
      segment:
      /*segment*/
      ctx[0],
      categories:
      /*categories*/
      ctx[1]
    },
    $$inline: true
  });
  var default_slot_template =
  /*$$slots*/
  ctx[5].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[4], null);
  var copyright = new Copyright({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(tailwindcss.$$.fragment);
      t0 = space();
      main = element("main");
      create_component(modeswitch.$$.fragment);
      t1 = space();
      div = element("div");
      create_component(nav.$$.fragment);
      t2 = space();
      if (default_slot) default_slot.c();
      t3 = space();
      create_component(copyright.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      claim_component(tailwindcss.$$.fragment, nodes);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      claim_component(modeswitch.$$.fragment, main_nodes);
      t1 = claim_space(main_nodes);
      div = claim_element(main_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(nav.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      if (default_slot) default_slot.l(div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(copyright.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "container max-w-5xl m-auto flex flex-wrap px-4 pb-8");
      add_location(div, file$3, 28, 2, 742);
      attr_dev(main, "class", main_class_value = "min-h-screen ".concat(
      /*dayValue*/
      ctx[2] ? "" : "bg-black text-white"));
      add_location(main, file$3, 26, 0, 650);
    },
    m: function mount(target, anchor) {
      mount_component(tailwindcss, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, main, anchor);
      mount_component(modeswitch, main, null);
      append_dev(main, t1);
      append_dev(main, div);
      mount_component(nav, div, null);
      append_dev(div, t2);

      if (default_slot) {
        default_slot.m(div, null);
      }

      append_dev(div, t3);
      mount_component(copyright, div, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var nav_changes = {};
      if (dirty &
      /*segment*/
      1) nav_changes.segment =
      /*segment*/
      ctx[0];
      if (dirty &
      /*categories*/
      2) nav_changes.categories =
      /*categories*/
      ctx[1];
      nav.$set(nav_changes);

      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      16) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[4], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[4], dirty, null));
      }

      if (!current || dirty &
      /*dayValue*/
      4 && main_class_value !== (main_class_value = "min-h-screen ".concat(
      /*dayValue*/
      ctx[2] ? "" : "bg-black text-white"))) {
        attr_dev(main, "class", main_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tailwindcss.$$.fragment, local);
      transition_in(modeswitch.$$.fragment, local);
      transition_in(nav.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(copyright.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tailwindcss.$$.fragment, local);
      transition_out(modeswitch.$$.fragment, local);
      transition_out(nav.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(copyright.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tailwindcss, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(main);
      destroy_component(modeswitch);
      destroy_component(nav);
      if (default_slot) default_slot.d(detaching);
      destroy_component(copyright);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_ref3) {
  var params = _ref3.params,
      query = _ref3.query;
  return this.fetch("blog/categories.json").then(function (c) {
    return c.json();
  }).then(function (categories) {
    return {
      categories: categories
    };
  });
}

function instance$2($$self, $$props, $$invalidate) {
  var segment = $$props.segment,
      categories = $$props.categories;
  var dayValue;
  var unsubscribe = day.subscribe(function (value) {
    $$invalidate(2, dayValue = value);
  });
  var writable_props = ["segment", "categories"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("categories" in $$props) $$invalidate(1, categories = $$props.categories);
    if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      segment: segment,
      categories: categories,
      dayValue: dayValue
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("categories" in $$props) $$invalidate(1, categories = $$props.categories);
    if ("dayValue" in $$props) $$invalidate(2, dayValue = $$props.dayValue);
  };

  return [segment, categories, dayValue, unsubscribe, $$scope, $$slots];
}

var Layout =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$4, safe_not_equal, {
      segment: 0,
      categories: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment$4.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<Layout> was created without expected prop 'segment'");
    }

    if (
    /*categories*/
    ctx[1] === undefined && !("categories" in props)) {
      console.warn("<Layout> was created without expected prop 'categories'");
    }

    return _this;
  }

  _createClass(Layout, [{
    key: "segment",
    get: function get() {
      throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "categories",
    get: function get() {
      throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Layout;
}(SvelteComponentDev);

var Error_1 = globals.Error;
var file$4 = "src\\routes\\_error.svelte"; // (17:0) {#if dev && error.stack}

function create_if_block$1(ctx) {
  var pre;
  var t_value =
  /*error*/
  ctx[1].stack + "";
  var t;
  var block = {
    c: function create() {
      pre = element("pre");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      pre = claim_element(nodes, "PRE", {});
      var pre_nodes = children(pre);
      t = claim_text(pre_nodes, t_value);
      pre_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(pre, file$4, 17, 2, 453);
    },
    m: function mount(target, anchor) {
      insert_dev(target, pre, anchor);
      append_dev(pre, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*error*/
      2 && t_value !== (t_value =
      /*error*/
      ctx[1].stack + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(pre);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(17:0) {#if dev && error.stack}",
    ctx: ctx
  });
  return block;
}

function create_fragment$5(ctx) {
  var title_value;
  var t0;
  var div;
  var h1;
  var t1;
  var t2;
  var span;
  var t3;
  var t4_value =
  /*error*/
  ctx[1].message + "";
  var t4;
  var t5;
  var if_block_anchor;
  document.title = title_value = "" + (
  /*status*/
  ctx[0] + " - " +
  /*error*/
  ctx[1].message);
  var if_block =
  /*dev*/
  ctx[2] &&
  /*error*/
  ctx[1].stack && create_if_block$1(ctx);
  var block = {
    c: function create() {
      t0 = space();
      div = element("div");
      h1 = element("h1");
      t1 = text(
      /*status*/
      ctx[0]);
      t2 = space();
      span = element("span");
      t3 = text("- ");
      t4 = text(t4_value);
      t5 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes,
      /*status*/
      ctx[0]);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      span = claim_element(div_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t3 = claim_text(span_nodes, "- ");
      t4 = claim_text(span_nodes, t4_value);
      span_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "font-display font-bold text-pink text-20xl");
      add_location(h1, file$4, 13, 2, 273);
      attr_dev(span, "class", "font-display font-bold text-6xl");
      add_location(span, file$4, 14, 2, 345);
      attr_dev(div, "class", "w-full mt-8 pb-8 text-center flex justify-center items-center");
      add_location(div, file$4, 11, 0, 191);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, h1);
      append_dev(h1, t1);
      append_dev(div, t2);
      append_dev(div, span);
      append_dev(span, t3);
      append_dev(span, t4);
      insert_dev(target, t5, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*status, error*/
      3 && title_value !== (title_value = "" + (
      /*status*/
      ctx[0] + " - " +
      /*error*/
      ctx[1].message))) {
        document.title = title_value;
      }

      if (dirty &
      /*status*/
      1) set_data_dev(t1,
      /*status*/
      ctx[0]);
      if (dirty &
      /*error*/
      2 && t4_value !== (t4_value =
      /*error*/
      ctx[1].message + "")) set_data_dev(t4, t4_value);

      if (
      /*dev*/
      ctx[2] &&
      /*error*/
      ctx[1].stack) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      if (detaching) detach_dev(t5);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var status = $$props.status;
  var error = $$props.error;
  var dev = "development" === "development";
  var writable_props = ["status", "error"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Error> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("status" in $$props) $$invalidate(0, status = $$props.status);
    if ("error" in $$props) $$invalidate(1, error = $$props.error);
  };

  $$self.$capture_state = function () {
    return {
      status: status,
      error: error
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("status" in $$props) $$invalidate(0, status = $$props.status);
    if ("error" in $$props) $$invalidate(1, error = $$props.error);
  };

  return [status, error, dev];
}

var Error$1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Error, _SvelteComponentDev);

  function Error(options) {
    var _this;

    _classCallCheck(this, Error);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Error).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$5, safe_not_equal, {
      status: 0,
      error: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Error",
      options: options,
      id: create_fragment$5.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*status*/
    ctx[0] === undefined && !("status" in props)) {
      console.warn("<Error> was created without expected prop 'status'");
    }

    if (
    /*error*/
    ctx[1] === undefined && !("error" in props)) {
      console.warn("<Error> was created without expected prop 'error'");
    }

    return _this;
  }

  _createClass(Error, [{
    key: "status",
    get: function get() {
      throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "error",
    get: function get() {
      throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Error;
}(SvelteComponentDev);

var Error_1$1 = globals.Error;

function create_else_block(ctx) {
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [
  /*level1*/
  ctx[4].props];
  var switch_value =
  /*level1*/
  ctx[4].component;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props());
  }

  var block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var switch_instance_changes = dirty &
      /*level1*/
      16 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
      /*level1*/
      ctx[4].props)]) : {};

      if (switch_value !== (switch_value =
      /*level1*/
      ctx[4].component)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(21:1) {:else}",
    ctx: ctx
  });
  return block;
} // (19:1) {#if error}


function create_if_block$2(ctx) {
  var current;
  var error_1 = new Error$1({
    props: {
      error:
      /*error*/
      ctx[0],
      status:
      /*status*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(error_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(error_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(error_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var error_1_changes = {};
      if (dirty &
      /*error*/
      1) error_1_changes.error =
      /*error*/
      ctx[0];
      if (dirty &
      /*status*/
      2) error_1_changes.status =
      /*status*/
      ctx[1];
      error_1.$set(error_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(error_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(error_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(error_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$2.name,
    type: "if",
    source: "(19:1) {#if error}",
    ctx: ctx
  });
  return block;
} // (18:0) <Layout segment="{segments[0]}" {...level0.props}>


function create_default_slot(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block$2, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*error*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(18:0) <Layout segment=\\\"{segments[0]}\\\" {...level0.props}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$6(ctx) {
  var current;
  var layout_spread_levels = [{
    segment:
    /*segments*/
    ctx[2][0]
  },
  /*level0*/
  ctx[3].props];
  var layout_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < layout_spread_levels.length; i += 1) {
    layout_props = assign(layout_props, layout_spread_levels[i]);
  }

  var layout = new Layout({
    props: layout_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(layout.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(layout.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var layout_changes = dirty &
      /*segments, level0*/
      12 ? get_spread_update(layout_spread_levels, [dirty &
      /*segments*/
      4 && {
        segment:
        /*segments*/
        ctx[2][0]
      }, dirty &
      /*level0*/
      8 && get_spread_object(
      /*level0*/
      ctx[3].props)]) : {};

      if (dirty &
      /*$$scope, error, status, level1*/
      83) {
        layout_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      layout.$set(layout_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(layout, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$4($$self, $$props, $$invalidate) {
  var stores = $$props.stores;
  var error = $$props.error;
  var status = $$props.status;
  var segments = $$props.segments;
  var level0 = $$props.level0;
  var _$$props$level = $$props.level1,
      level1 = _$$props$level === void 0 ? null : _$$props$level;
  setContext(CONTEXT_KEY, stores);
  var writable_props = ["stores", "error", "status", "segments", "level0", "level1"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<App> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("stores" in $$props) $$invalidate(5, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
  };

  $$self.$capture_state = function () {
    return {
      stores: stores,
      error: error,
      status: status,
      segments: segments,
      level0: level0,
      level1: level1
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("stores" in $$props) $$invalidate(5, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
  };

  return [error, status, segments, level0, level1, stores];
}

var App =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(App, _SvelteComponentDev);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, options));
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$6, safe_not_equal, {
      stores: 5,
      error: 0,
      status: 1,
      segments: 2,
      level0: 3,
      level1: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "App",
      options: options,
      id: create_fragment$6.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*stores*/
    ctx[5] === undefined && !("stores" in props)) {
      console.warn("<App> was created without expected prop 'stores'");
    }

    if (
    /*error*/
    ctx[0] === undefined && !("error" in props)) {
      console.warn("<App> was created without expected prop 'error'");
    }

    if (
    /*status*/
    ctx[1] === undefined && !("status" in props)) {
      console.warn("<App> was created without expected prop 'status'");
    }

    if (
    /*segments*/
    ctx[2] === undefined && !("segments" in props)) {
      console.warn("<App> was created without expected prop 'segments'");
    }

    if (
    /*level0*/
    ctx[3] === undefined && !("level0" in props)) {
      console.warn("<App> was created without expected prop 'level0'");
    }

    return _this;
  }

  _createClass(App, [{
    key: "stores",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "error",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "status",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "segments",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level0",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level1",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return App;
}(SvelteComponentDev);

// This file is generated by Sapper — do not edit it!
var ignore = [/^\/blog.json$/, /^\/blog\/categories.json$/, /^\/blog\/category\/([^\/]+?).json$/, /^\/blog\/posts\/hello-world\/?$/, /^\/blog\/([^\/]+?).json$/];
var components = [{
  js: function js() {
    return import('./index.8cafc28d.js');
  },
  css: []
}, {
  js: function js() {
    return import('./index.d5cff979.js');
  },
  css: []
}, {
  js: function js() {
    return import('./[category].19e40dc0.js');
  },
  css: []
}, {
  js: function js() {
    return import('./[slug].f8e60dff.js');
  },
  css: []
}];
var routes = function (d) {
  return [{
    // index.svelte
    pattern: /^\/$/,
    parts: [{
      i: 0
    }]
  }, {
    // blog/index.svelte
    pattern: /^\/blog\/?$/,
    parts: [{
      i: 1
    }]
  }, {
    // blog/category/[category].svelte
    pattern: /^\/blog\/category\/([^\/]+?)\/?$/,
    parts: [null, null, {
      i: 2,
      params: function params(match) {
        return {
          category: d(match[1])
        };
      }
    }]
  }, {
    // blog/[slug].svelte
    pattern: /^\/blog\/([^\/]+?)\/?$/,
    parts: [null, {
      i: 3,
      params: function params(match) {
        return {
          slug: d(match[1])
        };
      }
    }]
  }];
}(decodeURIComponent);

function goto(href) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    replaceState: false
  };
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    _history[opts.replaceState ? 'replaceState' : 'pushState']({
      id: cid
    }, '', href);

    return navigate(target, null).then(function () {});
  }

  location.href = href;
  return new Promise(function (f) {}); // never resolves
}

var initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
var ready = false;
var root_component;
var current_token;
var root_preloaded;
var current_branch = [];
var current_query = '{}';
var stores = {
  page: writable({}),
  preloading: writable(null),
  session: writable(initial_data && initial_data.session)
};
var $session;
var session_dirty;
stores.session.subscribe(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(value) {
    var target, token, _ref2, redirect, props, branch;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $session = value;

            if (ready) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            session_dirty = true;
            target = select_target(new URL(location.href));
            token = current_token = {};
            _context.next = 8;
            return hydrate_target(target);

          case 8:
            _ref2 = _context.sent;
            redirect = _ref2.redirect;
            props = _ref2.props;
            branch = _ref2.branch;

            if (!(token !== current_token)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return");

          case 14:
            _context.next = 16;
            return render(redirect, branch, props, target.page);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var prefetching = null;

function set_prefetching(href, promise) {
  prefetching = {
    href: href,
    promise: promise
  };
}

var target;

function set_target(element) {
  target = element;
}

var uid = 1;

function set_uid(n) {
  uid = n;
}

var cid;

function set_cid(n) {
  cid = n;
}

var _history = typeof history !== 'undefined' ? history : {
  pushState: function pushState(state, title, href) {},
  replaceState: function replaceState(state, title, href) {},
  scrollRestoration: ''
};

var scroll_history = {};

function extract_query(search) {
  var query = Object.create(null);

  if (search.length > 0) {
    search.slice(1).split('&').forEach(function (searchParam) {
      var _$exec = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' '))),
          _$exec2 = _slicedToArray(_$exec, 3),
          key = _$exec2[1],
          _$exec2$ = _$exec2[2],
          value = _$exec2$ === void 0 ? '' : _$exec2$;

      if (typeof query[key] === 'string') query[key] = [query[key]];
      if (_typeof(query[key]) === 'object') query[key].push(value);else query[key] = value;
    });
  }

  return query;
}

function select_target(url) {
  if (url.origin !== location.origin) return null;
  if (!url.pathname.startsWith(initial_data.baseUrl)) return null;
  var path = url.pathname.slice(initial_data.baseUrl.length);

  if (path === '') {
    path = '/';
  } // avoid accidental clashes between server routes and page routes


  if (ignore.some(function (pattern) {
    return pattern.test(path);
  })) return;

  for (var i = 0; i < routes.length; i += 1) {
    var route = routes[i];
    var match = route.pattern.exec(path);

    if (match) {
      var query = extract_query(url.search);
      var part = route.parts[route.parts.length - 1];
      var params = part.params ? part.params(match) : {};
      var page = {
        host: location.host,
        path: path,
        query: query,
        params: params
      };
      return {
        href: url.href,
        route: route,
        match: match,
        page: page
      };
    }
  }
}

function handle_error(url) {
  var _location = location,
      host = _location.host,
      pathname = _location.pathname,
      search = _location.search;
  var session = initial_data.session,
      preloaded = initial_data.preloaded,
      status = initial_data.status,
      error = initial_data.error;

  if (!root_preloaded) {
    root_preloaded = preloaded && preloaded[0];
  }

  var props = {
    error: error,
    status: status,
    session: session,
    level0: {
      props: root_preloaded
    },
    level1: {
      props: {
        status: status,
        error: error
      },
      component: Error$1
    },
    segments: preloaded
  };
  var query = extract_query(search);
  render(null, [], props, {
    host: host,
    path: pathname,
    query: query,
    params: {}
  });
}

function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}

function navigate(_x2, _x3, _x4, _x5) {
  return _navigate.apply(this, arguments);
}

function _navigate() {
  _navigate = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2(target, id, noscroll, hash) {
    var current_scroll, loaded, token, _ref3, redirect, props, branch, scroll, deep_linked;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (id) {
              // popstate or initial navigation
              cid = id;
            } else {
              current_scroll = scroll_state(); // clicked on a link. preserve scroll state

              scroll_history[cid] = current_scroll;
              id = cid = ++uid;
              scroll_history[cid] = noscroll ? current_scroll : {
                x: 0,
                y: 0
              };
            }

            cid = id;
            if (root_component) stores.preloading.set(true);
            loaded = prefetching && prefetching.href === target.href ? prefetching.promise : hydrate_target(target);
            prefetching = null;
            token = current_token = {};
            _context2.next = 8;
            return loaded;

          case 8:
            _ref3 = _context2.sent;
            redirect = _ref3.redirect;
            props = _ref3.props;
            branch = _ref3.branch;

            if (!(token !== current_token)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return");

          case 14:
            _context2.next = 16;
            return render(redirect, branch, props, target.page);

          case 16:
            if (document.activeElement) document.activeElement.blur();

            if (!noscroll) {
              scroll = scroll_history[id];

              if (hash) {
                // scroll is an element id (from a hash), we need to compute y.
                deep_linked = document.getElementById(hash.slice(1));

                if (deep_linked) {
                  scroll = {
                    x: 0,
                    y: deep_linked.getBoundingClientRect().top
                  };
                }
              }

              scroll_history[cid] = scroll;
              if (scroll) scrollTo(scroll.x, scroll.y);
            }

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _navigate.apply(this, arguments);
}

function render(_x6, _x7, _x8, _x9) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee3(redirect, branch, props, page) {
    var _start, end;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!redirect) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", goto(redirect.location, {
              replaceState: true
            }));

          case 2:
            stores.page.set(page);
            stores.preloading.set(false);

            if (!root_component) {
              _context3.next = 8;
              break;
            }

            root_component.$set(props);
            _context3.next = 17;
            break;

          case 8:
            props.stores = {
              page: {
                subscribe: stores.page.subscribe
              },
              preloading: {
                subscribe: stores.preloading.subscribe
              },
              session: stores.session
            };
            _context3.next = 11;
            return root_preloaded;

          case 11:
            _context3.t0 = _context3.sent;
            props.level0 = {
              props: _context3.t0
            };
            // first load — remove SSR'd <head> contents
            _start = document.querySelector('#sapper-head-start');
            end = document.querySelector('#sapper-head-end');

            if (_start && end) {
              while (_start.nextSibling !== end) {
                detach(_start.nextSibling);
              }

              detach(_start);
              detach(end);
            }

            root_component = new App({
              target: target,
              props: props,
              hydrate: true
            });

          case 17:
            current_branch = branch;
            current_query = JSON.stringify(page.query);
            ready = true;
            session_dirty = false;

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _render.apply(this, arguments);
}

function part_changed(i, segment, match, stringified_query) {
  // TODO only check query string changes for preload functions
  // that do in fact depend on it (using static analysis or
  // runtime instrumentation)
  if (stringified_query !== current_query) return true;
  var previous = current_branch[i];
  if (!previous) return false;
  if (segment !== previous.segment) return true;

  if (previous.match) {
    if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
      return true;
    }
  }
}

function hydrate_target(_x10) {
  return _hydrate_target.apply(this, arguments);
}

function _hydrate_target() {
  _hydrate_target = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee5(target) {
    var route, page, segments, _redirect, props, preload_context, branch, l, stringified_query, match, segment_dirty;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            route = target.route, page = target.page;
            segments = page.path.split('/').filter(Boolean);
            _redirect = null;
            props = {
              error: null,
              status: 200,
              segments: [segments[0]]
            };
            preload_context = {
              fetch: function (_fetch) {
                function fetch(_x11, _x12) {
                  return _fetch.apply(this, arguments);
                }

                fetch.toString = function () {
                  return _fetch.toString();
                };

                return fetch;
              }(function (url, opts) {
                return fetch(url, opts);
              }),
              redirect: function redirect(statusCode, location) {
                if (_redirect && (_redirect.statusCode !== statusCode || _redirect.location !== location)) {
                  throw new Error("Conflicting redirects");
                }

                _redirect = {
                  statusCode: statusCode,
                  location: location
                };
              },
              error: function error(status, _error) {
                props.error = typeof _error === 'string' ? new Error(_error) : _error;
                props.status = status;
              }
            };

            if (!root_preloaded) {
              root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
                host: page.host,
                path: page.path,
                query: page.query,
                params: {}
              }, $session);
            }

            l = 1;
            _context5.prev = 7;
            stringified_query = JSON.stringify(page.query);
            match = route.pattern.exec(page.path);
            segment_dirty = false;
            _context5.next = 13;
            return Promise.all(route.parts.map(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee4(part, i) {
                var segment, j, _ref5, component, preload, preloaded;

                return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        segment = segments[i];
                        if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;
                        props.segments[l] = segments[i + 1]; // TODO make this less confusing

                        if (part) {
                          _context4.next = 5;
                          break;
                        }

                        return _context4.abrupt("return", {
                          segment: segment
                        });

                      case 5:
                        j = l++;

                        if (!(!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i)) {
                          _context4.next = 8;
                          break;
                        }

                        return _context4.abrupt("return", current_branch[i]);

                      case 8:
                        segment_dirty = false;
                        _context4.next = 11;
                        return load_component(components[part.i]);

                      case 11:
                        _ref5 = _context4.sent;
                        component = _ref5.default;
                        preload = _ref5.preload;

                        if (!(ready || !initial_data.preloaded[i + 1])) {
                          _context4.next = 25;
                          break;
                        }

                        if (!preload) {
                          _context4.next = 21;
                          break;
                        }

                        _context4.next = 18;
                        return preload.call(preload_context, {
                          host: page.host,
                          path: page.path,
                          query: page.query,
                          params: part.params ? part.params(target.match) : {}
                        }, $session);

                      case 18:
                        _context4.t0 = _context4.sent;
                        _context4.next = 22;
                        break;

                      case 21:
                        _context4.t0 = {};

                      case 22:
                        preloaded = _context4.t0;
                        _context4.next = 26;
                        break;

                      case 25:
                        preloaded = initial_data.preloaded[i + 1];

                      case 26:
                        return _context4.abrupt("return", props["level".concat(j)] = {
                          component: component,
                          props: preloaded,
                          segment: segment,
                          match: match,
                          part: part.i
                        });

                      case 27:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x13, _x14) {
                return _ref4.apply(this, arguments);
              };
            }()));

          case 13:
            branch = _context5.sent;
            _context5.next = 21;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](7);
            props.error = _context5.t0;
            props.status = 500;
            branch = [];

          case 21:
            return _context5.abrupt("return", {
              redirect: _redirect,
              props: props,
              branch: branch
            });

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[7, 16]]);
  }));
  return _hydrate_target.apply(this, arguments);
}

function load_css(chunk) {
  var href = "client/".concat(chunk);
  if (document.querySelector("link[href=\"".concat(href, "\"]"))) return;
  return new Promise(function (fulfil, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;

    link.onload = function () {
      return fulfil();
    };

    link.onerror = reject;
    document.head.appendChild(link);
  });
}

function load_component(component) {
  // TODO this is temporary — once placeholders are
  // always rewritten, scratch the ternary
  var promises = typeof component.css === 'string' ? [] : component.css.map(load_css);
  promises.unshift(component.js());
  return Promise.all(promises).then(function (values) {
    return values[0];
  });
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function prefetch(href) {
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    if (!prefetching || href !== prefetching.href) {
      set_prefetching(href, hydrate_target(target));
    }

    return prefetching.promise;
  }
}

function start(opts) {
  if ('scrollRestoration' in _history) {
    _history.scrollRestoration = 'manual';
  }

  set_target(opts.target);
  addEventListener('click', handle_click);
  addEventListener('popstate', handle_popstate); // prefetch

  addEventListener('touchstart', trigger_prefetch);
  addEventListener('mousemove', handle_mousemove);
  return Promise.resolve().then(function () {
    var _location2 = location,
        hash = _location2.hash,
        href = _location2.href;

    _history.replaceState({
      id: uid
    }, '', href);

    var url = new URL(location.href);
    if (initial_data.error) return handle_error();
    var target = select_target(url);
    if (target) return navigate(target, uid, true, hash);
  });
}

var mousemove_timeout;

function handle_mousemove(event) {
  clearTimeout(mousemove_timeout);
  mousemove_timeout = setTimeout(function () {
    trigger_prefetch(event);
  }, 20);
}

function trigger_prefetch(event) {
  var a = find_anchor(event.target);
  if (!a || a.rel !== 'prefetch') return;
  prefetch(a.href);
}

function handle_click(event) {
  // Adapted from https://github.com/visionmedia/page.js
  // MIT license https://github.com/visionmedia/page.js#license
  if (which(event) !== 1) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  var a = find_anchor(event.target);
  if (!a) return;
  if (!a.href) return; // check if link is inside an svg
  // in this case, both href and target are always inside an object

  var svg = _typeof(a.href) === 'object' && a.href.constructor.name === 'SVGAnimatedString';
  var href = String(svg ? a.href.baseVal : a.href);

  if (href === location.href) {
    if (!location.hash) event.preventDefault();
    return;
  } // Ignore if tag has
  // 1. 'download' attribute
  // 2. rel='external' attribute


  if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return; // Ignore if <a> has a target

  if (svg ? a.target.baseVal : a.target) return;
  var url = new URL(href); // Don't handle hash changes

  if (url.pathname === location.pathname && url.search === location.search) return;
  var target = select_target(url);

  if (target) {
    var noscroll = a.hasAttribute('sapper-noscroll');
    navigate(target, null, noscroll, url.hash);
    event.preventDefault();

    _history.pushState({
      id: cid
    }, '', url.href);
  }
}

function which(event) {
  return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
  while (node && node.nodeName.toUpperCase() !== 'A') {
    node = node.parentNode;
  } // SVG <a> elements have a lowercase name


  return node;
}

function handle_popstate(event) {
  scroll_history[cid] = scroll_state();

  if (event.state) {
    var url = new URL(location.href);

    var _target = select_target(url);

    if (_target) {
      navigate(_target, event.state.id);
    } else {
      location.href = location.href;
    }
  } else {
    // hashchange
    set_uid(uid + 1);
    set_cid(uid);

    _history.replaceState({
      id: cid
    }, '', location.href);
  }
}

start({
  target: document.querySelector('#sapper')
});
