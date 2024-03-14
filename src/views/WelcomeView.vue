<script setup lang="ts">
import { useAppStore } from "@/stores/AppStore";

const appStore = useAppStore();
</script>

<template>
	<main>
		<p>{{ appStore.welcomeMessage }}</p>
		<img
			class="w-[20rem] mt-3 rounded -rotate-3 ml-6 mb-6"
			src="@/assets/images/pinia.jpg"
		/>
		<div v-if="appStore.skills.length === 0">
			<h2 class="text-xl">
				<v-icon name="fa-spinner" animation="spin" scale="1.3" /> Loading skills... 
			</h2>
		</div>
		<div v-if="appStore.skills.length !== 0">
			<h2 class="text-xl">
				There are {{ appStore.skills.length }} skills:
			</h2>
			<ul class="list-disc ml-6">
				<li v-for="skill in appStore.skills" :key="skill.idCode">
					{{ skill.name }}
				</li>
			</ul>
		</div>
	</main>
</template>
@/stores/AppStore
