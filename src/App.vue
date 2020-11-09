<template>
  <div id="app">
    <Col :span="4">
      <Menu id="sidemenu" mode="inline" :inline-collapsed="false">
        <MenuItem key="2">
          <router-link to="/mm1">
            <h2>M/M/1</h2>
          </router-link>
        </MenuItem>
        <MenuItem key="3">
          <router-link to="/mms">
            <h2>M/M/s</h2>
          </router-link>
        </MenuItem>
        <MenuItem key="4">
          <router-link to="/mmsk">
            <h2>M/M/s/K</h2>
          </router-link>
        </MenuItem>
        <MenuItem key="5">
          <router-link to="/mg1">
            <h2>M/G/1</h2>
          </router-link>
        </MenuItem>
        <MenuItem key="6">
          <router-link to="/meks">
            <h2>M/E<sub>k</sub>/s</h2>
          </router-link>
        </MenuItem>
      </Menu>
    </Col>
    <Col id="view-container" :span="20">
      <router-view />
    </Col>
  </div>
</template>

<script>
import { Col, Menu } from "ant-design-vue";
import MenuItem from "ant-design-vue/lib/menu/MenuItem";

export default {
  name: "App",
  components: { Col, Menu, MenuItem }
};
</script>

<style>
label {
  font-size: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#sidemenu {
  height: 100vh;
}

#view-container {
  padding: 16px;
}
</style>
