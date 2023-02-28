<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-lg-3">
            <div v-for="item in main">
                <div class="col">
                    <div class="shadow bg-white rounded-3 mb-2"><a href="/area/1/walk/12"><img
                                :src="`https://enterds.site/storage/images/${item.image}`" class="rounded-top" alt="..."
                                style="object-fit: cover; height: 300px; width: 100%;"></a>
                        <div class="container">
                            <div class="py-1 mb-2"><a class="text-decoration-none text-dark" href="/area/1/walk/12">
                                    <h5 class="fw-normal mt-2">{{ item.name }}</h5>
                                    <p class="display-6 fs-6 mb-2">{{ item.description }}</p><!--v-if--><!--v-if-->
                                    <p class="mb-0 text-muted"><i class="bi bi-geo-alt-fill"></i> {{ item.city }},
                                        {{ item.street }}<!--v-if--></p>
                                </a></div>
                        </div>
                        <div class="bg-light text-end mb-2 rounded-bottom p-2"><a
                                class="text-decoration-none btn bg-white shadow-sm px-1 me-2" href="#comments"><span
                                    class="rounded-3 px-2 py-1 ms-1"><span class="small"><i class="bi bi-chat"></i>
                                        5</span></span></a><a class="text-decoration-none btn bg-white shadow-sm px-1"
                                href=""><span class="rounded-3 px-2 py-1 ms-1"><span class="small"><i
                                            class="bi bi-image"></i>
                                        2</span></span></a><span class="rounded-3 px-2 py-1"><span
                                    class="text-warning small btn bg-white shadow-sm"><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></span></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let main = ref([])
let token = ref('DR')

const route = useRoute()

axios({
    method: 'get',
    url: `https://enterds.site/category/${route.params.href}/${route.params.id}}`,
    data: { Authorization: `Bearer ${token.value}` }
}).then(res => {
    main.value = res.data
    console.log(res.data)
})
</script>