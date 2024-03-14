import { defineStore } from "pinia";
import axios from "axios";
import type { AppStore } from "@/types";

export const useAppStore = defineStore("appStore", {
	state: (): AppStore => ({
		welcomeMessage: "Welcome to the Vue Pinia Showcase.",
		skills: [],
	}),
	actions: {
		async fill() {
			setTimeout(async () => {
				const response = await axios.get(
					"https://edwardtanguay.vercel.app/share/skills.json"
				);
				this.skills = response.data;
			}, 3000);
		},
	},
});
