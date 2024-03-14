import { defineStore } from "pinia";
// import skills from "@/data/skills.json";
import axios from "axios";
import type { IAppStore } from "@/types";

export const useAppStore = defineStore("appStore", {
	state: (): IAppStore => ({
		welcomeMessage: "Welcome to the Vue Pinia Showcase.",
		skills: [],
	}),
	actions: {
		async fill() {
			const response = await axios.get(
				"https://edwardtanguay.vercel.app/share/skills.json"
			);
			this.skills = response.data;
		},
	},
});
