<script setup lang="ts">
import { useAppStore } from "@/stores/AppStore";

const appStore = useAppStore();
</script>
<template>
	<div v-if="appStore.skills.length === 0">Loading...</div>
	<div v-if="appStore.skills.length > 0">
		<h2>There are {{ appStore.skills.length }} skills:</h2>
		<div v-for="skill in appStore.skills" :key="skill.id">
			<button
				class="bg-slate-400 px-2 py-1 rounded text-xs mt-2"
				@click="appStore.deleteSkill(skill)"
			>
				Delete
			</button>
			{{ skill.name }}
		</div>
	</div>
</template>
