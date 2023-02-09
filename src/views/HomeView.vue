<template>
  <div class="alert alert-warning text-center" role="alert">
    Добро пожаловать в <strong> {{ main.city }}</strong>!
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

let main = ref([])
let token = ref('DR')

axios({
  method: 'get',
  url: `http://vuesonback/token/${token.value}`,
  data: { Authorization: `Bearer ${token.value}` }
}).then(res => {
  main.value = res.data
})
</script>