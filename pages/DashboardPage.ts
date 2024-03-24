import { Locator, Page } from "@playwright/test";

export class DashboardPage {
  private readonly searchBar: Locator;

  constructor(protected readonly page: Page) {
    this.searchBar = this.page.getByPlaceholder("Search");
  }

  async search(query: string) {
    await this.searchBar.fill(query);

    return this;
  }

  async goto() {
    await this.page.goto("/web/index.php/dashboard/index");
    return this;
  }

  async clickTabButton(button: (typeof SIDE_PANEL_TABS)[number]) {
    const buttonLocator = this.page.getByText(button);
    await buttonLocator.click();

    return this;
  }
}

export const SIDE_PANEL_TABS = [
  "Admin",
  "PIM",
  "Leave",
  "Time",
  "Recruitment",
  "My Info",
  "Performance",
  "Dashboard",
  "Directory",
  "Maintenance",
  "Claim",
  "Buzz",
] as const;
