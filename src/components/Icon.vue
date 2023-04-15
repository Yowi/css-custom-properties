<template>
  <div class="icons-list">
    <a-icon type="home" />
    <a-icon type="setting" theme="filled" />
    <a-icon type="smile" theme="outlined" />
    <a-icon type="sync" spin />
    <a-icon type="smile" :rotate="180" />
    <a-icon type="loading" />
    <a-icon type="smile" theme="twoTone" />
    <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
    <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
  </div>
</template>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
