import { defineStore } from "pinia";
import type { AppStore, Skill } from "@/types";
import * as AppModel from "./AppModel";
import * as tools from "../tools";

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
			const skillToDelete: Skill | undefined = this.skills.find(
				(m) => m.id === skill.id
			);
			if (skillToDelete) {
				const response = await AppModel.deleteSkill(skill);
				console.log("skilltoDelete", skillToDelete);
				if (response.status === "success") {
					this.skills = this.skills.filter((m) => m.id !== skill.id);
					tools.devLog(`appstore deleted skill with id ${skill.id}`);
				} else {
					tools.devLog(
						`appstore error while deleting skill with id ${skill.id}`
					);
				}
			}
		},
	},
});
