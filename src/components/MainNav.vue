<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
	<nav class="bg-blue-800 text-gray-100 px-3 py-2 flex gap-3">
		<RouterLink to="/">Welcome</RouterLink>
		<RouterLink to="/skills">Skills</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</nav>
</template>
