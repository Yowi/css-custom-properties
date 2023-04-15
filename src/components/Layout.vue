<template>
  <a-row :gutter="16">
    <a-col :span="12">
      <a-layout id="components-layout-demo-top-side">
        <a-layout-header class="header">
          <div class="logo" />
          <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['2']"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1"> nav 1 </a-menu-item>
            <a-menu-item key="2"> nav 2 </a-menu-item>
            <a-menu-item key="3"> nav 3 </a-menu-item>
          </a-menu>
        </a-layout-header>
        <a-layout-content style="padding: 0 50px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout style="padding: 24px 0; background: var(--ds-component-background)">
            <a-layout-sider width="200" style="background: var(--ds-component-background)">
              <a-menu
                mode="inline"
                :default-selected-keys="['1']"
                :default-open-keys="['sub1']"
                style="height: 100%"
              >
                <a-sub-menu key="sub1">
                  <span slot="title"><a-icon type="user" />subnav 1</span>
                  <a-menu-item key="1"> option1 </a-menu-item>
                  <a-menu-item key="2"> option2 </a-menu-item>
                  <a-menu-item key="3"> option3 </a-menu-item>
                  <a-menu-item key="4"> option4 </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                  <span slot="title"><a-icon type="laptop" />subnav 2</span>
                  <a-menu-item key="5"> option5 </a-menu-item>
                  <a-menu-item key="6"> option6 </a-menu-item>
                  <a-menu-item key="7"> option7 </a-menu-item>
                  <a-menu-item key="8"> option8 </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                  <span slot="title"
                    ><a-icon type="notification" />subnav 3</span
                  >
                  <a-menu-item key="9"> option9 </a-menu-item>
                  <a-menu-item key="10"> option10 </a-menu-item>
                  <a-menu-item key="11"> option11 </a-menu-item>
                  <a-menu-item key="12"> option12 </a-menu-item>
                </a-sub-menu>
              </a-menu>
            </a-layout-sider>
            <a-layout-content
              :style="{ padding: '0 24px', minHeight: '280px' }"
            >
              Content
            </a-layout-content>
          </a-layout>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-col>
    <a-col :span="12">
      <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
          <div class="logo" />
          <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
            <a-menu-item key="1">
              <a-icon type="user" />
              <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="video-camera" />
              <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="upload" />
              <span>nav 3</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header style="background: var(--ds-component-background); padding: 0">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
          </a-layout-header>
          <a-layout-content
            :style="{
              margin: '24px 16px',
              padding: '24px',
              background: 'var(--ds-component-background)',
              minHeight: '280px',
            }"
          >
            Content
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-col>
  </a-row>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
