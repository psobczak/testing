import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
  private readonly searchBar: Locator;

  constructor(protected readonly page: Page) {
    this.searchBar = this.page.getByPlaceholder("Search");
  }

  async search(query: string) {
    await this.searchBar.fill(query);
    await this.searchBar.press("Enter");

    return this;
  }

  async goto() {
    await this.page.goto("/web/index.php/dashboard/index");
    return this;
  }
}
