import { defineStore } from "pinia";
import skills from '@/data/skills.json';

export const useAppStore = defineStore("appStore", {
	state: () => ({
		welcomeMessage: "Welcome to the Vue Pinia Showcase.",
		skills
	}),
});
