export class Config {
	public readonly baseUrl: string;
	public readonly login: string;
	public readonly password: string;

	constructor() {
		if (!process.env.BASE_URL) {
			throw new Error("The BASE_URL environment variable is not set.");
		}

		if (!process.env.LOGIN) {
			throw new Error("The LOGIN environment variable is not set.");
		}

		if (!process.env.PASSWORD) {
			throw new Error("The PASSWORD environment variable is not set.");
		}

		this.baseUrl = process.env.BASE_URL;
		this.login = process.env.LOGIN;
		this.password = process.env.PASSWORD;
	}
}
