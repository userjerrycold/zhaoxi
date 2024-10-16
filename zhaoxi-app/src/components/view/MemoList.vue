<template>
    <div>
      <h2>备忘录列表</h2>
      <form @submit.prevent="createMemo">
        <input v-model="newMemo.title" placeholder="标题" />
        <textarea v-model="newMemo.content" placeholder="内容"></textarea>
        <button type="submit">添加备忘录</button>
      </form>
  
      <div v-for="memo in memos" :key="memo.id" @click="goToMemoDetail(memo.id)" class="memo-item">
        <h3>{{ memo.title }}</h3>
        <p>{{ memo.content.length > 10 ? memo.content.slice(0, 10) + '...' : memo.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        memos: [],
        newMemo: {
          title: '',
          content: '',
        },
      };
    },
    methods: {
      fetchMemos() {
        axios.get('http://localhost:8080/api/memos').then((response) => {
          this.memos = response.data;
        });
      },
      createMemo() {
        axios.post('http://localhost:8080/api/memos', this.newMemo).then(() => {
          this.newMemo = { title: '', content: '' };
          this.fetchMemos();
        });
      },
      deleteMemo(id) {
        axios.delete(`http://localhost:8080/api/memos/${id}`).then(() => {
          this.fetchMemos();
        });
      },
      goToMemoDetail(id) {
        this.$router.push(`/memo/${id}`);
      },
    },
    mounted() {
      this.fetchMemos();
    },
  };
  </script>
  
  <style scoped>
  .memo-item {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .memo-item h3 {
    margin: 0;
  }
  
  .memo-item p {
    margin: 5px 0 0;
    color: #666;
  }
  </style>
  