const custom = {
  cdn: {
    css: ["//cdn.jsdelivr.net/npm/ant-design-vue@1.7.8/dist/antd.min.css"],
    js: [
      "//cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js",
      // "//cdn.jsdelivr.net/npm/vue-router@3.5.3/dist/vue-router.min.js",
      // "//cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js",
      "//cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js",
      "//cdn.jsdelivr.net/npm/moment@2.29.1/locale/zh-cn.js",
      // "//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js",
      "//cdn.jsdelivr.net/npm/ant-design-vue@1.7.8/dist/antd.min.js",
    ],
  },
  externals: {
    vue: "Vue",
    // "vue-router": "VueRouter",
    // vuex: "Vuex",
    moment: "moment",
    // axios: "axios",
    "ant-design-vue": "antd",
  },
};

const getModifyVars = () => {
  const values = {},
    vars = [
      "@component-background", // "@body-background",
      "@layout-body-background",
      "@heading-color",
      "@text-color",
      "@text-color-secondary", // feat:
      "@disabled-color",
      "@input-placeholder-color",
      "@border-color-base",
      "@border-color-split",
      "@border-color-inverse",
      "@primary-1",
      "@primary-2",
      "@table-expanded-row-bg",
      "@page-header-back-color",
      "@shadow-color",
      "@background-color-light", // feat:
      "@background-color-base", // feat:
    ];
  vars.map((item) => (values[item] = `var(--ds-${item.slice(1)})`));

  return {
    ...values,
    "@border-radius-base": "2px",
    "@card-padding-base": "16px", // 24px
    "@body-background": "@component-background",
    "@table-header-sort-active-bg": "var(--ds-custom-color-f2f2f2)", // feat:
    "@table-header-filter-active-bg": "var(--ds-custom-color-e5e5e5)", // feat:
  };
};

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: getModifyVars(),
        javascriptEnabled: true,
      },
    },
  },
  configureWebpack: {
    externals: custom.externals
  },
  chainWebpack(config) {
    config.plugin("html").tap((args) => {
      args[0].assets = custom.cdn;
      return args;
    });
  },
};
