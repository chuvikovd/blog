import { _ as _typeof, a as _inherits, b as _classCallCheck, c as _possibleConstructorReturn, d as _getPrototypeOf, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, y as day, h as element, t as text, u as space, j as claim_element, k as children, l as claim_text, v as claim_space, m as detach_dev, n as attr_dev, o as add_location, p as insert_dev, q as append_dev, r as noop, w as _slicedToArray, x as destroy_each } from './store.1874f07d.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator.70298a61.js';

function toVal(mix) {
  var k,
      y,
      str = '';

  if (mix) {
    if (_typeof(mix) === 'object') {
      if (!!mix.push) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k] && (y = toVal(mix[k]))) {
            str && (str += ' ');
            str += y;
          }
        }
      } else {
        for (k in mix) {
          if (mix[k] && (y = toVal(k))) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else if (typeof mix !== 'boolean' && !mix.call) {
      str && (str += ' ');
      str += mix;
    }
  }

  return str;
}

function clsx () {
  var i = 0,
      x,
      str = '';

  while (i < arguments.length) {
    if (x = toVal(arguments[i++])) {
      str && (str += ' ');
      str += x;
    }
  }

  return str;
}

var file = "src\\routes\\blog\\[slug].svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
} // (35:4) {#each categories as category}


function create_each_block(ctx) {
  var a;
  var t0_value =
  /*category*/
  ctx[7] + "";
  var t0;
  var t1;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      t1 = claim_space(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "blog/category/".concat(
      /*category*/
      ctx[7]));
      attr_dev(a, "class", "hover:text-red");
      add_location(a, file, 35, 6, 771);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t0);
      append_dev(a, t1);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(35:4) {#each categories as category}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var title_value;
  var t0;
  var div0;
  var h4;
  var t1;
  var h1;
  var t2;
  var t3;
  var h5;
  var t4;
  var t5;
  var t6;
  var t7;
  var div1;
  var raw_value =
  /*post*/
  ctx[0].html + "";
  var div1_class_value;
  document.title = title_value =
  /*post*/
  ctx[0].title;
  var each_value =
  /*categories*/
  ctx[2];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      t0 = space();
      div0 = element("div");
      h4 = element("h4");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t1 = space();
      h1 = element("h1");
      t2 = text(
      /*title*/
      ctx[3]);
      t3 = space();
      h5 = element("h5");
      t4 = text(
      /*printDate*/
      ctx[4]);
      t5 = text(", ");
      t6 = text(
      /*printReadingTime*/
      ctx[5]);
      t7 = space();
      div1 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h4 = claim_element(div0_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(h4_nodes);
      }

      h4_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t2 = claim_text(h1_nodes,
      /*title*/
      ctx[3]);
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      h5 = claim_element(div0_nodes, "H5", {
        class: true
      });
      var h5_nodes = children(h5);
      t4 = claim_text(h5_nodes,
      /*printDate*/
      ctx[4]);
      t5 = claim_text(h5_nodes, ", ");
      t6 = claim_text(h5_nodes,
      /*printReadingTime*/
      ctx[5]);
      h5_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t7 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h4, "class", "font-display font-bold");
      add_location(h4, file, 33, 2, 692);
      attr_dev(h1, "class", "font-display font-bold text-4xl");
      add_location(h1, file, 43, 2, 932);
      attr_dev(h5, "class", "font-display font-light mt-1");
      add_location(h5, file, 44, 2, 992);
      attr_dev(div0, "class", "w-full mt-8");
      add_location(div0, file, 32, 0, 663);
      attr_dev(div1, "class", div1_class_value = clsx("w-full markdown", {
        night: !
        /*dayValue*/
        ctx[1]
      }));
      add_location(div1, file, 47, 0, 1081);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div0, anchor);
      append_dev(div0, h4);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(h4, null);
      }

      append_dev(div0, t1);
      append_dev(div0, h1);
      append_dev(h1, t2);
      append_dev(div0, t3);
      append_dev(div0, h5);
      append_dev(h5, t4);
      append_dev(h5, t5);
      append_dev(h5, t6);
      insert_dev(target, t7, anchor);
      insert_dev(target, div1, anchor);
      div1.innerHTML = raw_value;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*post*/
      1 && title_value !== (title_value =
      /*post*/
      ctx[0].title)) {
        document.title = title_value;
      }

      if (dirty &
      /*categories*/
      4) {
        each_value =
        /*categories*/
        ctx[2];

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(h4, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*post*/
      1 && raw_value !== (raw_value =
      /*post*/
      ctx[0].html + "")) div1.innerHTML = raw_value;

      if (dirty &
      /*dayValue*/
      2 && div1_class_value !== (div1_class_value = clsx("w-full markdown", {
        night: !
        /*dayValue*/
        ctx[1]
      }))) {
        attr_dev(div1, "class", div1_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div0);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(t7);
      if (detaching) detach_dev(div1);
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

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_ref3) {
    var params, query, res, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params, query = _ref3.query;
            _context.next = 3;
            return this.fetch("blog/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              post: data
            });

          case 11:
            this.error(res.status, data.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;
  var dayValue;
  var unsubscribe = day.subscribe(function (value) {
    $$invalidate(1, dayValue = value);
  });
  var _post = post,
      categories = _post.categories,
      title = _post.title,
      printDate = _post.printDate,
      printReadingTime = _post.printReadingTime;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      post: post,
      dayValue: dayValue
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
    if ("dayValue" in $$props) $$invalidate(1, dayValue = $$props.dayValue);
  };

  return [post, dayValue, categories, title, printDate, printReadingTime];
}

var U5Bslugu5D =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(U5Bslugu5D).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[0] === undefined && !("post" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "post",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };
