<template>
    <nav class="navbar bg-body-tertiary fixed-top shadow-sm">
        <div class="container-fluid">
            <a class="navbar-brand ms-2 me-0 fs-2" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <i :class="config.offcanvas_icon"></i>
            </a>
            <router-link class="navbar-brand" to="/">{{ config.name }}</router-link>
            <a class="navbar-brand me-2 fs-2">
                <i :class="config.cabinet_icon"></i>
            </a>
            <div class="offcanvas offcanvas-start w-75 bg-light" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{{ config.main_text_offcanvas }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li v-for="nav in config.navigation" class="nav-item">
                            <router-link :to="nav.href" class="nav-link link-dark" aria-current="page">
                                <i :class="nav.icon"></i>
                                {{ nav.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div style="height: 70px;"></div>
</template>

<script setup>
import config from '@/assets/js/config';
</script>