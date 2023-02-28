<template>
  <div class="container">
    <!-- <div id="carouselExample" class="carousel slide mb-3">
        <div class="carousel-inner rounded-3">
          <div class="carousel-item active">
            <img src="https://static.tildacdn.com/tild3635-3565-4034-b730-323766613931/shutterstock_1154963.jpeg"
              class="d-block w-100" alt="">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->
    <div class="row row-cols-2 text-center mb-4 text-white">
      <div class="col">
        <div class="text-center">
          <img class="w-75" src="https://webstockreview.net/images/palace-clipart-castle-welsh-6.png" alt="">
        </div>
      </div>
      <div class="col pt-4">
        <div class="text-center">
          <img class="w-25"
            src="https://adonius.club/uploads/posts/2022-01/thumbs/1642693279_1-adonius-club-p-solntse-na-belom-fone-1.png"
            alt="">
        </div>
        <div class="fs-3">+20 С</div>
        <div>Ясная погода</div>
      </div>
    </div>
  </div>
  <div class="bg-white pt-3 rounded-top-5">
    <div class="container">
      <div class="row row-cols-3">
        <div v-for="item in main" class="col g-2">
          <div @click="$router.push(`/category/${item.href}/${item.id}/`)" class="py-3 rounded-3 text-center bg-white">
            <img class="my-1 mx-auto col-6 d-block" :src="'/icons/' + item.image" alt="...">
            <div class="text-center mt-2 small">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

let main = ref([])
let token = ref('DR')

axios({
  method: 'get',
  url: `https://enterds.site/catalog_api/}`,
  data: { Authorization: `Bearer ${token.value}` }
}).then(res => {
  main.value = res.data
})
</script>