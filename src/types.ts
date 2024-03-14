export type Skill = {
	idCode: string;
	name: string;
	url: string;
	description: string;
};

export type AppStore = {
	welcomeMessage: string;
	skills: Skill[];
}
