export type ISkill = {
	idCode: string;
	name: string;
	url: string;
	description: string;
};

export type IAppStore = {
	welcomeMessage: string;
	skills: ISkill[];
}
