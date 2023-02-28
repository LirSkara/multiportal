<template>
    <nav class="navbar bg-white border-top fixed-bottom">
        <div class="container-fluid">
            <div class="row w-100 px-0 mx-0">
                <div v-for="nav in config.navigation" class="col text-center">
                    <span class="navbar-brand w-100 d-block m-0 fs-3" @click="$router.push(nav.href)"><i
                            :class="nav.icon"></i></span>
                </div>
                <div style="padding: 10px 0;"></div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import config from '@/assets/js/config';
</script>