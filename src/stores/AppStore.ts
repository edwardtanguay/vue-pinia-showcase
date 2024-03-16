import { defineStore } from "pinia";
import type { AppStore, Skill } from "@/types";
import * as AppModel from "./AppModel";

export const useAppStore = defineStore("appStore", {
	state: (): AppStore => ({
		welcomeMessage: "Welcome to the Vue Pinia Showcase.",
		skills: [],
	}),
	getters: {
		getSkillsByRank() {
			return (rank: number) => this.skills.filter((m) => m.rank === rank);
		},
	},
	actions: {
		async fill() {
			this.skills = await AppModel.getSkillsFromJson();
		},
		changeWelcomeMessage(newText: string) {
			this.welcomeMessage = newText;
		},
		async deleteSkill(skill: Skill) {
			const url = "http://localhost:6124/skills";
			const response = await fetch(`${url}/${skill.id}`, {
				method: "DELETE",
			});
			console.log(response);
		},
	},
});
