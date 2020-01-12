import { a as _inherits, b as _classCallCheck, c as _possibleConstructorReturn, d as _getPrototypeOf, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, y as day, h as element, t as text, j as claim_element, k as children, l as claim_text, m as detach_dev, n as attr_dev, o as add_location, p as insert_dev, q as append_dev, w as _slicedToArray, r as noop, u as space, C as create_component, v as claim_space, D as claim_component, E as mount_component, H as transition_in, I as transition_out, x as destroy_each, J as destroy_component } from './store.1874f07d.js';

var file = "src\\components\\ReadMoreButton.svelte";

function create_fragment(ctx) {
  var a;
  var t;
  var a_class_value;
  var block = {
    c: function create() {
      a = element("a");
      t = text("Continue reading →");
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Continue reading →");
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href",
      /*href*/
      ctx[0]);
      attr_dev(a, "class", a_class_value = "inline-block mt-4 p-2 font-display font-bold transition-button relative z-10\n    before:empty-content before:absolute before:border-2 before:border-red before:inset-0\n    after:empty-content after:absolute after:bg-cyan after:inset-0\n    ".concat(
      /*dayValue*/
      ctx[1] ? "" : "text-black"));
      add_location(a, file, 13, 0, 225);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*href*/
      1) {
        attr_dev(a, "href",
        /*href*/
        ctx[0]);
      }

      if (dirty &
      /*dayValue*/
      2 && a_class_value !== (a_class_value = "inline-block mt-4 p-2 font-display font-bold transition-button relative z-10\n    before:empty-content before:absolute before:border-2 before:border-red before:inset-0\n    after:empty-content after:absolute after:bg-cyan after:inset-0\n    ".concat(
      /*dayValue*/
      ctx[1] ? "" : "text-black"))) {
        attr_dev(a, "class", a_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
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
  var href = $$props.href;
  var dayValue;
  var unsubscribe = day.subscribe(function (value) {
    $$invalidate(1, dayValue = value);
  });

  var writable_props = ["href"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ReadMoreButton> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("href" in $$props) $$invalidate(0, href = $$props.href);
  };

  $$self.$capture_state = function () {
    return {
      href: href,
      dayValue: dayValue
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("href" in $$props) $$invalidate(0, href = $$props.href);
    if ("dayValue" in $$props) $$invalidate(1, dayValue = $$props.dayValue);
  };

  return [href, dayValue];
}

var ReadMoreButton =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(ReadMoreButton, _SvelteComponentDev);

  function ReadMoreButton(options) {
    var _this;

    _classCallCheck(this, ReadMoreButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReadMoreButton).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      href: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ReadMoreButton",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*href*/
    ctx[0] === undefined && !("href" in props)) {
      console.warn("<ReadMoreButton> was created without expected prop 'href'");
    }

    return _this;
  }

  _createClass(ReadMoreButton, [{
    key: "href",
    get: function get() {
      throw new Error("<ReadMoreButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ReadMoreButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ReadMoreButton;
}(SvelteComponentDev);

var file$1 = "src\\components\\Item.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
} // (11:4) {#each categories as category}


function create_each_block(ctx) {
  var a;
  var t_value =
  /*category*/
  ctx[7] + "";
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "blog/category/".concat(
      /*category*/
      ctx[7]));
      attr_dev(a, "class", "hover:text-red");
      add_location(a, file$1, 11, 6, 307);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);
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
    source: "(11:4) {#each categories as category}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var article;
  var h4;
  var t0;
  var a;
  var h2;
  var t1;
  var a_href_value;
  var t2;
  var h5;
  var t3;
  var t4;
  var t5;
  var t6;
  var p;
  var t7;
  var t8;
  var current;
  var each_value =
  /*categories*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var readmorebutton = new ReadMoreButton({
    props: {
      href: "blog/" +
      /*slug*/
      ctx[4]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      article = element("article");
      h4 = element("h4");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t0 = space();
      a = element("a");
      h2 = element("h2");
      t1 = text(
      /*title*/
      ctx[1]);
      t2 = space();
      h5 = element("h5");
      t3 = text(
      /*printDate*/
      ctx[3]);
      t4 = text(", ");
      t5 = text(
      /*printReadingTime*/
      ctx[5]);
      t6 = space();
      p = element("p");
      t7 = text(
      /*excerpt*/
      ctx[2]);
      t8 = space();
      create_component(readmorebutton.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      article = claim_element(nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      h4 = claim_element(article_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(h4_nodes);
      }

      h4_nodes.forEach(detach_dev);
      t0 = claim_space(article_nodes);
      a = claim_element(article_nodes, "A", {
        rel: true,
        href: true
      });
      var a_nodes = children(a);
      h2 = claim_element(a_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes,
      /*title*/
      ctx[1]);
      h2_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      t2 = claim_space(article_nodes);
      h5 = claim_element(article_nodes, "H5", {
        class: true
      });
      var h5_nodes = children(h5);
      t3 = claim_text(h5_nodes,
      /*printDate*/
      ctx[3]);
      t4 = claim_text(h5_nodes, ", ");
      t5 = claim_text(h5_nodes,
      /*printReadingTime*/
      ctx[5]);
      h5_nodes.forEach(detach_dev);
      t6 = claim_space(article_nodes);
      p = claim_element(article_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t7 = claim_text(p_nodes,
      /*excerpt*/
      ctx[2]);
      p_nodes.forEach(detach_dev);
      t8 = claim_space(article_nodes);
      claim_component(readmorebutton.$$.fragment, article_nodes);
      article_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h4, "class", "font-display font-bold");
      add_location(h4, file$1, 9, 2, 228);
      attr_dev(h2, "class", "font-display text-3xl md:text-4xl font-bold text-red leading-tight");
      add_location(h2, file$1, 15, 4, 466);
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "blog/" +
      /*slug*/
      ctx[4]);
      add_location(a, file$1, 14, 2, 423);
      attr_dev(h5, "class", "font-display font-light mt-1");
      add_location(h5, file$1, 20, 2, 590);
      attr_dev(p, "class", "mt-4");
      add_location(p, file$1, 21, 2, 671);
      attr_dev(article, "class", "w-full mt-8 first:mt-0");
      add_location(article, file$1, 8, 0, 184);
    },
    m: function mount(target, anchor) {
      insert_dev(target, article, anchor);
      append_dev(article, h4);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(h4, null);
      }

      append_dev(article, t0);
      append_dev(article, a);
      append_dev(a, h2);
      append_dev(h2, t1);
      append_dev(article, t2);
      append_dev(article, h5);
      append_dev(h5, t3);
      append_dev(h5, t4);
      append_dev(h5, t5);
      append_dev(article, t6);
      append_dev(article, p);
      append_dev(p, t7);
      append_dev(article, t8);
      mount_component(readmorebutton, article, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*categories*/
      1) {
        each_value =
        /*categories*/
        ctx[0];

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
    },
    i: function intro(local) {
      if (current) return;
      transition_in(readmorebutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(readmorebutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(article);
      destroy_each(each_blocks, detaching);
      destroy_component(readmorebutton);
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
  var post = $$props.post;
  var _post = post,
      categories = _post.categories,
      title = _post.title,
      excerpt = _post.excerpt,
      printDate = _post.printDate,
      slug = _post.slug,
      printReadingTime = _post.printReadingTime;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Item> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(6, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      post: post
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(6, post = $$props.post);
  };

  return [categories, title, excerpt, printDate, slug, printReadingTime, post];
}

var Item =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Item, _SvelteComponentDev);

  function Item(options) {
    var _this;

    _classCallCheck(this, Item);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Item).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      post: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Item",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[6] === undefined && !("post" in props)) {
      console.warn("<Item> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(Item, [{
    key: "post",
    get: function get() {
      throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Item;
}(SvelteComponentDev);

export { Item as I };
