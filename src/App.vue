<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid py-3">
      <a href="" class="navbar-brand d-inline-flex align-items-center">
        <img src="/logo.png" alt="logo" class="img-fluid" width="50">
        <h1 class="ms-1 mb-0 fw-bolder text-info">Budget App</h1>
      </a>
      <button class="btn btn-outline-danger border-2 d-inline-flex align-items-center">
        <p class="lead mb-0 me-2">Delete User</p>
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>
  </nav>
  <RouterView />
</template>
