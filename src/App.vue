<template>
  <div id="app">
    <a-card :bordered="false" v-for="(item, index) in comps" :key="index">
      <component :is="item" />
    </a-card>
  </div>
</template>

<script>
import comps from "./components";

export default {
  data() {
    return {
      comps,
    };
  },
};
</script>

<style lang="less">
@import "./ant-design-vue-less-lib/dist/antd.less";

// user-select: none;

// resettheme:

// --------------------------------------------------

// @text-color-secondary
// from:
// shade(@text-color-secondary, 40%); --> rgba(0, 0, 0, 0.67)
// to:
// @text-color

// --------------------------------------------------

// @background-color-light
// from:
// @table-header-sort-active-bg: darken(@table-header-bg, 3%); --> #f2f2f2
// @table-header-filter-active-bg: darken(@table-header-sort-active-bg, 5%); --> #e5e5e5
// to:
// @table-header-sort-active-bg: var(--ds-custom-color-f2f2f2);
// @table-header-filter-active-bg: var(--ds-custom-color-e5e5e5);

// --------------------------------------------------

// @background-color-base
// from:
// darken(@disabled-bg, 10%) --> #dbdbdb
// to:
// @border-color-base

html:not(.style-scope) {
  // background
  --ds-component-background: @white;
  --ds-layout-body-background: #f0f2f5;
  --ds-shadow-color: rgba(0, 0, 0, 0.15);
  // text
  --ds-heading-color: fade(@black, 85%);
  --ds-text-color: fade(@black, 65%);
  --ds-disabled-color: fade(@black, 25%);
  --ds-input-placeholder-color: hsv(0, 0, 75%);
  // border
  --ds-border-color-base: hsv(0, 0, 85%);
  --ds-border-color-split: hsv(0, 0, 91%);
  --ds-border-color-inverse: @white; // 选择日期等弹窗边框
  // primary
  --ds-primary-1: #e6f7ff;
  --ds-primary-2: #bae7ff;
  // comps
  --ds-table-expanded-row-bg: #fbfbfb;
  --ds-page-header-back-color: @black;
  // custom replace
  --ds-text-color-secondary: fade(@black, 45%); // @text-color-secondary #999
  --ds-background-color-light: #fafafa; // @background-color-light 98%
  --ds-background-color-base: #f5f5f5; // @background-color-base 96%
  --ds-custom-color-f2f2f2: #f2f2f2; // @table-header-sort-active-bg #f2f2f2
  --ds-custom-color-e5e5e5: #e5e5e5; // @table-header-filter-active-bg #e5e5e5
  --ds-globallayout-nav-dark: #001529;
}

html:not(.style-scope)[data-theme="dark"],
:not(.style-scope)[data-theme="dark"] {
  @ds-dark-primary: #242525;
  // to dark ...
  @ds-dark-2: color(~`colorPalette("@{ds-dark-primary}", 1) `);
  @ds-dark-3: color(~`colorPalette("@{ds-dark-primary}", 2) `);
  @ds-dark-4: color(~`colorPalette("@{ds-dark-primary}", 3) `);
  @ds-dark-5: color(~`colorPalette("@{ds-dark-primary}", 4) `);
  @ds-dark-6: @ds-dark-primary;
  @ds-dark-7: color(~`colorPalette("@{ds-dark-primary}", 6) `);
  @ds-dark-8: color(~`colorPalette("@{ds-dark-primary}", 7) `);

  // background
  --ds-component-background: @ds-dark-6;
  --ds-layout-body-background: #2a2c2c;
  --ds-shadow-color: @ds-dark-8;
  // text
  --ds-heading-color: fade(@white, 85%);
  --ds-text-color: fade(@white, 65%);
  --ds-disabled-color: fade(@white, 25%);
  --ds-input-placeholder-color: @ds-dark-2;
  // border
  --ds-border-color-base: #454847;
  --ds-border-color-split: #2a2b2a;
  --ds-border-color-inverse: @black;
  // primary
  --ds-primary-1: darken(@primary-color, 40%);
  --ds-primary-2: darken(@primary-color, 30%);
  // comps
  --ds-table-expanded-row-bg: @ds-dark-5;
  --ds-page-header-back-color: @white;
  // custom replace
  --ds-text-color-secondary: fade(@white, 45%);
  --ds-background-color-light: @ds-dark-5;
  --ds-background-color-base: @ds-dark-4;
  --ds-custom-color-f2f2f2: @ds-dark-3;
  --ds-custom-color-e5e5e5: @ds-dark-4;
  --ds-globallayout-nav-dark: @ds-dark-6;
}

/*
// ################## fix theme ##################

// 重置渲染出 box-shadow: 0 0 8px var(--ds-shadow-color) \9;
.@{ant-prefix}-popover-inner {
  box-shadow: 0 0 8px var(--ds-shadow-color) !important;
}

// https://developer.mozilla.org/zh-CN/docs/Web/CSS/color-scheme
html:not(.style-scope)[data-theme="dark"],
:not(.style-scope)[data-theme="dark"] {
  color-scheme: dark;

  // alert background
  [class$="-alert"][class*="-alert-"] {
    [class$="-alert-description"] {
      color: fade(@black, 65%);
    }

    [class$="-alert-message"] {
      color: fade(@black, 85%);
    }

    [class$="-alert-close-icon"] .anticon-close,
    [class$="-alert-close-text"] {
      color: fade(@black, 45%);

      &:hover {
        color: fade(@black, 75%); // @icon-color-hover
      }
    }
  }

  // trigger show input
  [class$="-select-tree-dropdown"]
    [class$="-select-dropdown-search"]
    [class$="-select-search__field"],
  [class$="-time-picker-panel-input"] {
    background-color: transparent;
  }

  // 多选框
  [class$="-checkbox"]:not([class*="-checkbox-"]) {
    & > [class$="-checkbox-inner"] {
      background-color: var(--ds-component-background);
    }
  }
}
*/
</style>
