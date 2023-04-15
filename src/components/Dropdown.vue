<template>
  <div>
    <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        Hover me <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        Cascading menu <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>1st menu item</a-menu-item>
        <a-menu-item>2nd menu item</a-menu-item>
        <a-sub-menu key="test" title="sub menu">
          <a-menu-item>3rd menu item</a-menu-item>
          <a-menu-item>4th menu item</a-menu-item>
        </a-sub-menu>
        <a-sub-menu title="disabled sub menu" disabled>
          <a-menu-item>5d menu item</a-menu-item>
          <a-menu-item>6th menu item</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-dropdown>
    <a-dropdown-button @click="handleButtonClick">
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
    </a-dropdown-button>
    <a-dropdown-button>
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-icon slot="icon" type="user" />
    </a-dropdown-button>
    <a-dropdown-button
      disabled
      style="margin-left: 8px"
      @click="handleButtonClick"
    >
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
    </a-dropdown-button>
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-button style="margin-left: 8px">
        Button <a-icon type="down" />
      </a-button>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(e) {
      console.log("click left button", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    },
  },
};
</script>
