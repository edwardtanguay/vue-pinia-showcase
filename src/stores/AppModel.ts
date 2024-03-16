import axios from "axios";
import { SkillSchema, type Skill } from "../types";
import * as tools from "../tools";
import skills from "../data/skills.json";

export const getSkills2 = async () => {
	return new Promise<Skill[]>((resolve, reject) => {
		try {
			resolve(skills);
		} catch (e) {
			reject(e);
		}
	});
};

const getCleanedValidatedDecoratedSkills = (rawSkills: any[]) => {
	const skills: Skill[] = [];
	for (const rawSkill of rawSkills) {
		const skill: Skill = {
			id: rawSkill.id,
			idCode: rawSkill.idCode,
			name: rawSkill.name,
			url: rawSkill.url,
			description: rawSkill.description,
			rank: tools.getRandomNumber(0, 10),
		};
		const parseResult = SkillSchema.safeParse(skill);
		if (parseResult.success) {
			skills.push(skill);
		} else {
			if (skill.rank > 5) {
				skill.rank = 5;
				skills.push(skill);
			} else {
				console.log(`BAD SKILL: ${JSON.stringify(skill)}`);
			}
		}
	}
	return skills;
};

export const getSkills = async () => {
	return new Promise<Skill[]>((resolve, reject) => {
		try {
			setTimeout(async () => {
				const url = "http://localhost:6124/skills";
				const rawSkills = (await axios.get(url)).data;
				const skills = getCleanedValidatedDecoratedSkills(rawSkills);
				resolve(skills);
			}, 3000);
		} catch (e) {
			reject(e);
		}
	});
};
