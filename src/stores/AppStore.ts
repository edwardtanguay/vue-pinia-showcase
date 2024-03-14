import { defineStore } from "pinia";
import type { AppStore } from "@/types";
import * as AppModel from './AppModel';

export const useAppStore = defineStore("appStore", {
	state: (): AppStore => ({
		welcomeMessage: "Welcome to the Vue Pinia Showcase.",
		skills: [],
	}),
	actions: {
		async fill() {
			this.skills = await AppModel.getSkills();
		},
	},
});
