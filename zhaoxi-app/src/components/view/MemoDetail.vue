<template>
    <div>
      <h2>{{ memo.title }}</h2>
      <p>{{ memo.content }}</p>
      <button @click="goBack">返回</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        memo: {
          title: '',
          content: '',
        },
      };
    },
    methods: {
      fetchMemo() {
        const id = this.$route.params.id;
        axios.get(`http://localhost:8080/api/memos/${id}`).then((response) => {
          this.memo = response.data;
        });
      },
      goBack() {
        this.$router.push('/');
      },
    },
    mounted() {
      this.fetchMemo();
    },
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 10px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  