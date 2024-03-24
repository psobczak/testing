import type { Locator, Page } from "@playwright/test";

export class LoginPage {
	private readonly username: Locator;
	private readonly password: Locator;
	private readonly loginButton: Locator;

	constructor(protected readonly page: Page) {
		this.username = this.page.getByPlaceholder("Username");
		this.password = this.page.getByPlaceholder("Password");
		this.loginButton = this.page.locator("button[type=submit]");
	}

	async goto() {
		await this.page.goto("/");
		return this;
	}

	async login(username: string, password: string) {
		await this.username.fill(username);
		await this.password.fill(password);
		await this.loginButton.click();

		return this;
	}
}
