<template>
    <nav class="navbar bg-body-tertiary fixed-bottom border-top">
        <div class="container-fluid">
            <div class="row w-100">
                <div v-for="nav in config.navigation" class="col text-center">
                    <router-link class="navbar-brand w-100 d-block m-0" :to="nav.href"><i
                            :class="nav.icon"></i></router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import config from '@/assets/js/config';
</script>