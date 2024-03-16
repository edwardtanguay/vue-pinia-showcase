import { defineStore } from "pinia";
import type { AppStore, Skill } from "../types";
import * as AppModel from "./AppModel";
import * as tools from "../tools";
import { toRaw } from "vue";
import * as config from '../config';

export const useAppStore = defineStore("appStore", {
	state: (): AppStore => ({
		welcomeMessage: "Welcome to the Vue Pinia Showcase.",
		skills: [],
	}),
	getters: {
		getSkillsByRank() {
			return (rank: number) => this.skills.filter((m) => m.rank === rank);
		},
		getRawSkills() {
			return () => toRaw(this.skills);
		},
	},
	actions: {
		async fill() {
			this.skills = this.skills = await AppModel.getSkillsFromApi();
		},
		changeWelcomeMessage(newText: string) {
			this.welcomeMessage = newText;
		},
		async deleteSkill(skill: Skill) {
			setTimeout(async () => {
				const response = await AppModel.deleteSkill(skill);
				if (response.status === "success") {
					this.skills = this.getRawSkills().filter(
						(m) => m.id !== skill.id
					);
					tools.devLog(`appstore deleted skill ${skill.name}`);
				} else {
					tools.devLog(
						`appstore error while deleting skill ${skill.name}`
					);
				}
				tools.devLog(`waited ${config.apiUxWaitSeconds()} seconds`)
			},config.apiUxWaitSeconds() * 1000);
		},
	},
});
