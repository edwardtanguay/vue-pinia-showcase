import axios from "axios";
import { type Skill, type AppModelResponse } from "../types";
import * as tools from "../tools";
import jsonData from "../data/skills.json";

const url = "http://localhost:6124/skills";
const rawSkills = jsonData.skills;

export const getSkillsFromJson = async () => {
	return new Promise<Skill[]>((resolve, reject) => {
		try {
			const skills = getCleanedValidatedDecoratedSkills(rawSkills);
			resolve(skills);
		} catch (e) {
			reject(e);
		}
	});
};

const getCleanedValidatedDecoratedSkills = (rawSkills: any[]): Skill[] => {
	const skills: Skill[] = [];
	for (const rawSkill of rawSkills) {
		const skill: Skill = {
			id: rawSkill.id,
			idCode: rawSkill.idCode,
			name: rawSkill.name,
			url: rawSkill.url,
			description: rawSkill.description,
			rank: tools.getRandomNumber(1, 5),
			isProcessing: false,
		};
		skills.push(skill);
	}
	return skills;
};

export const getSkillsFromApi = async () => {
	return new Promise<Skill[]>((resolve, reject) => {
		try {
			setTimeout(async () => {
				const rawSkills = (await axios.get(url)).data;
				const skills = getCleanedValidatedDecoratedSkills(rawSkills);
				resolve(skills);
			}, 0);
		} catch (e) {
			reject(e);
		}
	});
};

export const deleteSkill = async (skill: Skill) => {
	return new Promise<AppModelResponse>((resolve, reject) => {
		(async () => {
			try {
				const response = await fetch(`${url}/${skill.id}`, {
					method: "DELETE",
				});
				if (response.ok) {
					tools.devLog(`appmodel deleted skill with id ${skill.id}`);
					resolve({ status: "success" });
				} else {
					reject({ status: "error" });
				}
			} catch (e) {
				reject(e);
			}
		})();
	});
};
