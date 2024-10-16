<template>
  <div id="app">
    <h1>朝夕 APP - 备忘录</h1>
    <MemoList />
  </div>
</template>

<script>
import MemoList from './components/MemoList.vue';

export default {
  name: 'App',
  components: {
    MemoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
</style>
