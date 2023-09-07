<script setup lang="ts">
import BudgetPage from "../components/BudgetPage.vue"
</script>

<template>
  <main class="home">
    <div v-if="false" class="container-lg py-5">
      <div class="row">
        <div class="col">
          <h1 class="fw-bolder display-4">Take Control of <span class="text-info">Your Money</span></h1>
          <p class="lead">Personal budgeting is the secret to financial freedom. Start your journey today.</p>
          <form action="">
            <input type="mail" class="form-control mb-3 py-3" placeholder="Your Email...">
            <input type="password" class="form-control mb-3 py-3" placeholder="Your Password">
            <button class="btn btn-dark px-4 py-3">
              Create Account
              <i class="bi bi-person-add"></i>
            </button>
          </form>
        </div>
        <div class="col">
          <img src="/chart.jpg" alt="chart" class="img-fluid object-fit-cover object-fit-md-contain h-100">
        </div>
      </div>
    </div>

    <div v-else class="container-fluid py-4">
      <div class="row mb-3">
        <h2 class="fw-bold display-5">Welcome back, <span class="text-info">LE HONG TU</span></h2>
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
              <form action="">
                <div class="form-group mb-3">
                  <label for="budget" class="form-label fw-bold mb-2">Budget Name</label>
                  <input type="text" id="budget" class="form-control py-2" placeholder="e.g., Groceries">
                </div>
                <div class="form-group mb-3">
                  <label for="amount" class="form-label fw-bold mb-2">Amount</label>
                  <input type="text" id="budget" class="form-control py-2" placeholder="e.g., $300">
                </div>
                <button class="btn btn-dark px-4 py-2">
                  Create budget
                  <i class="bi bi-coin ms-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
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
                    <input type="text" id="budget" class="form-control py-2" placeholder="e.g., $3.00">
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
      <div class="row mb-4">
        <h2 class="fw-bold display-5 mb-4">Existing Budgets</h2>
        <div class="col">
          <BudgetPage />
        </div>
      </div>
      <div class="row mb-4">
        <h2 class="fw-bold display-5 mb-4">Recent Expenses</h2>
        <div class="col">
          <BudgetPage />
        </div>
      </div>
    </div>
  </main>
</template>
