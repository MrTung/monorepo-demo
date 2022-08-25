<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <myhello msg="Welcome to Your Vue.js App" />
    <mybutton></mybutton>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import { format, http } from '@packages/utils';
import { getData } from '@packages/core/service/index.service';
import { myhello } from '@packages/components/copo/hello';
import { mybutton } from '@packages/components/copo/button';

export default {
  name: 'App',
  components: {
    myhello,
    mybutton,
  },
  created() {
    console.log(format(new Date()));

    http({ url: 'https://baidu.com', method: 'get' }).then((res) => {
      console.log(res, 'res');
    });

    getData().then((res) => {
      console.log(res, 'res');
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
