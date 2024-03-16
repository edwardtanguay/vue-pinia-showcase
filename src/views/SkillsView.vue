<script setup lang="ts">
import { useAppStore } from "../stores/AppStore";

const appStore = useAppStore();
</script>
<template>
	<div v-if="appStore.skills.length === 0">Loading...</div>
	<div v-if="appStore.skills.length > 0">
		<h2>There are currently {{ appStore.skills.length }} skills:</h2>
		<div
			v-for="skill in appStore.skills"
			:key="skill.id"
			:class="skill.isProcessing && 'opacity-70'"
		>
			<button
				class="bg-slate-400 px-2 py-1 rounded text-xs mt-2"
				:disabled="skill.isProcessing"
				@click="
					skill.isProcessing = true;
					appStore.deleteSkill(skill);
				"
			>
				<span v-if="!skill.isProcessing">Delete</span>
				<span v-if="skill.isProcessing" class="italic"
					><v-icon name="fa-spinner" animation="spin" scale=".8" />
					Deleting...</span
				>
			</button>
			{{ skill.name }}
		</div>
	</div>
</template>
