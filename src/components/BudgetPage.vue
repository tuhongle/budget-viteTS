<template>
    <div class="card rounded-4">
        <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
                <h3 class="card-title fw-bold">Man</h3>
                <p class="lead">$300.00 Budgeted</p>
            </div>
            <div class="progress mb-3" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style="width: 50%"></div>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <p class="fw-medium">$0.00 spent</p>
                <p class="opacity-50">$300.00 remaining</p>
            </div>
            <div class="text-center">
                <button class="btn btn-danger py-2">
                    View Details
                    <i class="bi bi-cash-coin ms-1"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>