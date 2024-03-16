import { z } from "zod";

export const SkillSchema = z.object({
	id: z.number(),
	idCode: z.string(),
	name: z.string(),
	url: z.string(),
	description: z.string(),
	rank: z.number().min(1).max(5),
	isProcessing: z.boolean(),
});

export type Skill = z.infer<typeof SkillSchema>;

export type AppStore = {
	welcomeMessage: string;
	skills: Skill[];
};

export type Section = "section1" | "section2" | "section3"

export type AppModelResponse = {
	status: "success" | "error"
}
