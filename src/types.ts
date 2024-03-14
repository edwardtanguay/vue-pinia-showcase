import { z } from "zod";

export const SkillSchema = z.object({
	idCode: z.string(),
	name: z.string(),
	url: z.string(),
	description: z.string(),
	rank: z.number().min(1).max(5),
});

export type Skill = z.infer<typeof SkillSchema>;

export type AppStore = {
	welcomeMessage: string;
	skills: Skill[];
};
