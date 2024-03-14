<script setup lang="ts">
import { RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import { useAppStore } from "@/stores/AppStore";

const appStore = useAppStore();
appStore.fill();
</script>

<template>
	<MainHeader />
	<main class="px-3 py-2">
		<RouterView />
	</main>
</template>
