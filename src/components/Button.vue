<template>
  <div>
    <div>
      <a-button type="primary"> Primary </a-button>
      <a-button>Default</a-button>
      <a-button type="dashed"> Dashed </a-button>
      <a-button type="danger"> Danger </a-button>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button type="primary"> 按钮 </a-button>
      </a-config-provider>
      <a-button type="primary"> 按钮 </a-button>
      <a-button type="link"> Link </a-button>
    </div>
    <div>
      <a-button type="primary" shape="circle" icon="search" />
      <a-button type="primary" shape="circle"> A </a-button>
      <a-button type="primary" icon="search"> Search </a-button>
      <a-button shape="circle" icon="search" />
      <a-button icon="search"> Search </a-button>
      <a-button shape="circle" icon="search" />
      <a-button icon="search"> Search </a-button>
      <a-button type="dashed" shape="circle" icon="search" />
      <a-button type="dashed" icon="search"> Search </a-button>
    </div>
    <a-button type="primary" loading> Loading </a-button>
    <a-button type="primary" size="small" loading> Loading </a-button>
    <a-button type="primary" :loading="loading" @mouseenter="enterLoading">
      mouseenter me!
    </a-button>
    <a-button
      type="primary"
      icon="poweroff"
      :loading="iconLoading"
      @click="enterIconLoading"
    >
      延迟1s
    </a-button>
    <a-button type="primary" loading />
    <a-button type="primary" shape="circle" loading />
    <a-button type="danger" shape="round" loading />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    },
  },
};
</script>
