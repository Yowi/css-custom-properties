<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item href="">
        <a-icon type="home" />
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <a-icon type="user" />
        <span>Application List</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item> Application </a-breadcrumb-item>
    </a-breadcrumb>
    <a-breadcrumb separator="">
      <a-breadcrumb-item>Location</a-breadcrumb-item>
      <a-breadcrumb-separator>:</a-breadcrumb-separator>
      <a-breadcrumb-item href=""> Application Center </a-breadcrumb-item>
      <a-breadcrumb-separator />
      <a-breadcrumb-item href=""> Application List </a-breadcrumb-item>
      <a-breadcrumb-separator />
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
    <a-breadcrumb>
      <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Component</a></a-breadcrumb-item>
      <a-breadcrumb-item>
        <a href="">General</a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.alipay.com/"
            >
              General
            </a>
          </a-menu-item>
          <a-menu-item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.taobao.com/"
            >
              Layout
            </a>
          </a-menu-item>
          <a-menu-item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.tmall.com/"
            >
              Navigation
            </a>
          </a-menu-item>
        </a-menu>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Button</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
