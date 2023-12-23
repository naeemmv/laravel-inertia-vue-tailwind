<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
    <h1 class="font-extrabold">Home</h1>
    <div class="space-x-2">
        <Link class="btn" href="/login">Login</Link>
        <Link class="btn btn-primary" href="/login">Login</Link>
        <Link class="btn btn-secondary" href="/login">Login</Link>
        <Link class="btn btn-success" href="/login">Login</Link>
        <Link class="btn btn-warning" href="/login">Login</Link>
        <Link class="btn btn-danger" href="/login">Login</Link>
    </div>
</template>
