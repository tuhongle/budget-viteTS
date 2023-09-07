<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useBudgetStore} from './stores/budgetStore'

const budgetStore = useBudgetStore();
</script>

<template>
  <nav class="navbar shadow-sm">
    <div class="container-xl py-3">
      <RouterLink :to="{name: 'home'}" class="navbar-brand d-inline-flex align-items-center">
        <img src="/logo.png" alt="logo" class="img-fluid" width="50">
        <h1 class="ms-1 mb-0 fw-bolder text-info display-4">Budget App</h1>
      </RouterLink>
      <div v-if="budgetStore.isAuth">
        <button class="btn btn-outline-warning border-2 d-inline-flex align-items-center me-3" @click="budgetStore.logOut">
          <p class="lead mb-0 me-2">Sign Out</p>
          <i class="bi bi-box-arrow-right"></i>
        </button>
        <button class="btn btn-outline-danger border-2 d-inline-flex align-items-center" @click="budgetStore.deleteAccount">
          <p class="lead mb-0 me-2">Delete User</p>
          <i class="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>
  </nav>

  <RouterView />
</template>
