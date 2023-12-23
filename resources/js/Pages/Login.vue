<script setup>

import auth from '../Layouts/Auth.vue'
import { Link } from '@inertiajs/vue3'

defineOptions({ layout: auth })

</script>

<template>
    Login
    <Link href="/">Home</Link>
</template>
