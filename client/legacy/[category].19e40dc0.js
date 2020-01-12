import { a as _inherits, b as _classCallCheck, c as _possibleConstructorReturn, d as _getPrototypeOf, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, C as create_component, D as claim_component, E as mount_component, H as transition_in, I as transition_out, J as destroy_component, u as space, h as element, v as claim_space, j as claim_element, k as children, m as detach_dev, n as attr_dev, o as add_location, p as insert_dev, w as _slicedToArray, R as group_outros, T as check_outros, x as destroy_each } from './store.1874f07d.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator.70298a61.js';
import { I as Item } from './Item.6eaa925e.js';

var file = "src\\routes\\blog\\category\\[category].svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (25:2) {#each posts as post}


function create_each_block(ctx) {
  var current;
  var item = new Item({
    props: {
      post:
      /*post*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(item.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item_changes = {};
      if (dirty &
      /*posts*/
      1) item_changes.post =
      /*post*/
      ctx[1];
      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(25:2) {#each posts as post}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t;
  var div;
  var current;
  var each_value =
  /*posts*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t = space();
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div_nodes);
      }

      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Blog";
      attr_dev(div, "class", "w-full mt-8 pb-8");
      add_location(div, file, 23, 0, 492);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      insert_dev(target, div, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*posts*/
      1) {
        each_value =
        /*posts*/
        ctx[0];

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div);
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
            return this.fetch("blog/category/".concat(params.category, ".json"));

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
              posts: data
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
  var posts = $$props.posts;
  var writable_props = ["posts"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bcategoryu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
  };

  $$self.$capture_state = function () {
    return {
      posts: posts
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
  };

  return [posts];
}

var U5Bcategoryu5D =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(U5Bcategoryu5D, _SvelteComponentDev);

  function U5Bcategoryu5D(options) {
    var _this;

    _classCallCheck(this, U5Bcategoryu5D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(U5Bcategoryu5D).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      posts: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bcategoryu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*posts*/
    ctx[0] === undefined && !("posts" in props)) {
      console.warn("<U5Bcategoryu5D> was created without expected prop 'posts'");
    }

    return _this;
  }

  _createClass(U5Bcategoryu5D, [{
    key: "posts",
    get: function get() {
      throw new Error("<U5Bcategoryu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bcategoryu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bcategoryu5D;
}(SvelteComponentDev);

export default U5Bcategoryu5D;
export { preload };
