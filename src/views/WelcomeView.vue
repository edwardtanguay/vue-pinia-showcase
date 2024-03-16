<script setup lang="ts">
import { useAppStore } from "@/stores/AppStore";
import { ref } from "vue";
// import { useState } from 'vue-composable-utils';

const appStore = useAppStore();

const newWelcomeMessage = ref("");

const desiredRank = 2;

// const appName = useState("appName", () => "Nuxt Learning Showcase 1.0");
</script>

<template>
	<main>
		<p>{{ appStore.welcomeMessage }}</p>

		<div class="flex gap-4">
			<img
				class="w-[20rem] mt-3 rounded -rotate-3 ml-6 mb-6"
				src="@/assets/images/pinia.jpg"
			/>
			<div>
				<form class="flex gap-2">
					<input v-model="newWelcomeMessage" />
					<button type="button" @click="appStore.changeWelcomeMessage(newWelcomeMessage)" class="bg-slate-400 px-2 py-1 text-xs rounded">
						Change Welcome Message
					</button>
				</form>
			</div>
		</div>
		<div v-if="appStore.skills.length === 0">
			<h2 class="text-xl">
				<v-icon name="fa-spinner" animation="spin" scale="1.3" />
				Loading skills...
			</h2>
		</div>
		<div v-if="appStore.skills.length !== 0">
			<h2 class="text-xl">
				There are
				{{ appStore.getSkillsByRank(desiredRank).length }} skills with
				rank {{ desiredRank }}:
			</h2>
			<ul class="list-disc ml-6 mb-6">
				<li
					v-for="skill in appStore.getSkillsByRank(desiredRank)"
					:key="skill.idCode"
				>
					{{ skill.name }} (rank={{ skill.rank }})
				</li>
			</ul>
			<h2 class="text-xl">
				There are {{ appStore.skills.length }} skills:
			</h2>
			<ul class="list-disc ml-6">
				<li v-for="skill in appStore.skills" :key="skill.id" class="mt-2">
					{{ skill.name }} (id={{ skill.id }}) <button @click="appStore.deleteSkill(skill)" class="bg-slate-400 px-2 py-1 text-xs rounded hover:opacity-80">delete</button>
				</li>
			</ul>
		</div>
	</main>
</template>
@/stores/AppStore
