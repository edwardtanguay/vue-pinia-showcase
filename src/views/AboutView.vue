<script setup lang="ts">
import type { Section } from '@/types';
import { useAppStore } from "@/stores/AppStore";
import { ref } from 'vue';

const appStore = useAppStore();

const section = ref<Section>("section1")
</script>
<template>
	<p>This is an about page</p>
	<p>The current welcome message is: {{ appStore.welcomeMessage }}</p>
	<h2 class="text-2xl mt-4">Sections</h2>
	<div class="flex gap-1">
	<button @click="section = 'section1'" class="bg-slate-400 py-1 px-2 text-xs rounded">Section 1</button>
	<button @click="section = 'section2'" class="bg-slate-400 py-1 px-2 text-xs rounded">Section 2</button>
	<button @click="section = 'section3'" class="bg-slate-400 py-1 px-2 text-xs rounded">Section 3</button>
	</div>
	<div v-if="section === 'section1'">Here is section one.</div>
	<div v-if="section === 'section2'">Here is section two.</div>
	<div v-if="section === 'section3'">Here is section three.</div>
</template>
