<script setup>
import headshot from '@/assets/headshot.jpeg'
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <div class="flex items-start gap-8">
            <img :src="headshot" class="h-48 rounded-full" />
            <div class="flex flex-col justify-center gap-2">
                <h1 class="text-5xl leading-none font-extrabold text-slate-950">Hi, my name is Yang-Yi Shen.</h1>
                <p class="text-5xl leading-none font-extrabold text-slate-400">I build things for the web.</p>
                <p class="max-w-md text-slate-950 font-light mt-2">I’m a software engineer specializing in developing web applications. I am currently focused on building web3 products at Whale Strategy.</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
