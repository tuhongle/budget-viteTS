<script setup lang="ts">
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";
import BudgetPage from "../components/BudgetPage.vue"
import ExpensePage from "../components/ExpensePage.vue"
import { useBudgetStore } from '../stores/budgetStore'

const budgetStore = useBudgetStore();
const { isNewAccount, isAuth, mail, pass, budgetAmount, budgetName, budgets } = storeToRefs(budgetStore);

watchEffect(async() => {
  await budgetStore.getBudgets();
})
</script>

<template>
  <main class="home">
    <div v-if="!isAuth" class="container-xl py-4">
      <div class="row pt-0 pt-md-5 flex-column-reverse flex-md-row">
        <div class="col-12 col-md-6 pt-0 pt-md-5">
          <h1 class="fw-bolder display-4">Take Control of <span class="text-info">Your Money</span></h1>
          <p class="lead">Personal budgeting is the secret to financial freedom. Start your journey today.</p>
          <form @submit.prevent>
            <input type="email" class="form-control mb-3 py-3" placeholder="Your Email..." v-model="mail" required>
            <input type="password" class="form-control mb-3 py-3" placeholder="Your Password" v-model="pass" required>
            <p v-if="isNewAccount" class="small text-danger">Couldn't find your account. <span class="lead">Want to create new account?</span></p>
            <div class="d-flex justify-content-between">
              <button v-if="!isNewAccount" class="btn btn-dark px-5 py-3" @click="budgetStore.logIn">
                Log In
                <i class="bi bi-box-arrow-in-left ms-1"></i>
              </button>
              <button v-else class="btn btn-dark px-4 py-3" @click="budgetStore.createAccount">
                Create Account
                <i class="bi bi-person-add ms-1"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-6 mb-3 mb-md-0">
          <img src="/chart.jpg" alt="chart" class="img-fluid object-fit-cover object-fit-md-contain h-100">
        </div>
      </div>
    </div>

    <div v-else class="container-xl py-4">
      <div class="row mb-3">
        <h2 class="fw-bold display-5">Welcome back, <span class="text-info">{{ mail }}</span></h2>
        <div v-if="false">
          <p class="lead my-3">Personal budgeting is the secret to financial freedom.</p>
          <p class="lead">Create a budget to get started!</p>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12 col-md-6 mb-3 mb-md-0">
          <div class="card shadow p-3 rounded-3">
            <div class="card-body p-3 border-2 border-dark rounded-3" style="border: dashed">
              <h3 class="card-title fw-bolder mb-4">Create budget</h3>
              <form @submit.prevent="budgetStore.createBudget($event)">
                <div class="form-group mb-3">
                  <label for="budget" class="form-label fw-bold mb-2">Budget Name</label>
                  <input type="text" id="budget" class="form-control py-2" placeholder="e.g., Groceries" v-model="budgetName" required>
                </div>
                <div class="form-group mb-3">
                  <label for="amount" class="form-label fw-bold mb-2">Amount</label>
                  <input type="number" id="budget" class="form-control py-2" placeholder="e.g., $300" v-model="budgetAmount" required>
                </div>
                <button class="btn btn-dark px-4 py-2">
                  Create budget
                  <i class="bi bi-coin ms-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div v-if="budgets.length" class="col-12 col-md-6">
          <div class="card shadow p-3 rounded-3">
            <div class="card-body p-3 border-2 border-dark rounded-3" style="border: dashed">
              <h3 class="card-title fw-bolder mb-4">Add New <span class="text-info">coffee</span> Expense</h3>
              <form action="">
                <div class="row">
                  <div class="col-12 col-md-6 mb-3">
                    <label for="budget" class="form-label fw-bold mb-2">Expense Name</label>
                    <input type="text" id="budget" class="form-control py-2" placeholder="e.g., Coffee">
                  </div>
                  <div class="col-12 col-md-6 mb-3">
                    <label for="amount" class="form-label fw-bold mb-2">Amount</label>
                    <input type="number" id="budget" class="form-control py-2" placeholder="e.g., $3.00">
                  </div>
                </div>
                <div v-if="false" class="row mb-3">
                  <div class="col">
                    <label for="category" class="form-label fw-bold mb-2">Budget Category</label>
                    <select name="category" id="category" class="form-select">
                      <option value="man">man</option>
                      <option value="coffee">coffee</option>
                    </select>
                  </div>
                </div>
                <button class="btn btn-dark px-4 py-2">
                  Add Expense
                  <i class="bi bi-plus-circle-fill ms-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div v-if="budgets.length"  class="row flex-wrap mb-4">
        <h2 class="fw-bold display-5 mb-4">Existing Budgets</h2>
        <div class="col mb-3" style="min-width: 30%; max-width: 60%;" v-for="budget in budgets" :key="budget.id">
          <BudgetPage :budget="budget" />
        </div>
      </div>
      <div v-if="budgets.length" class="row mb-4">
        <h2 class="fw-bold display-5 mb-4">Recent Expenses</h2>
        <div class="col px-0 px-md-5">
          <div class="card border-0 overflow-auto">
            <table class="table table-striped table-hover table-borderless text-center">
              <thead>
                  <tr class="fs-3">
                      <th scope="col">Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date</th>
                      <th scope="col">Budget</th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody class="align-middle">
                <tr class="lead">
                  <ExpensePage />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
