<script setup lang="ts">
import { useAppStore } from "../stores/AppStore";
import { ref } from "vue";

const appStore = useAppStore();

const count = ref(0);
</script>
<template>
	<p>count = {{ count }}</p>
	<div v-if="appStore.skills.length === 0">Loading...</div>
	<div v-if="appStore.skills.length > 0">
		<h2>There are currently {{ appStore.skills.length }} skills:</h2>
		<div v-for="skill in appStore.skills" :key="skill.id" :class="skill.isProcessing && 'opacity-60'">
			<button
				class="bg-slate-400 px-2 py-1 rounded text-xs mt-2"
				:disabled="skill.isProcessing"
				@click="
					skill.isProcessing = true;
					appStore.deleteSkill(skill);
					count++
				"
			>
				Delete
				<span v-if="skill.isProcessing">...</span>
			</button>
			{{ skill.name }}
		</div>
	</div>
</template>
