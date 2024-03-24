import { test, expect } from "../utils/Fixtures";

test("search on dashboard", async ({ dashboardPage, page, sidePanelTabs }) => {
  for (const tab of sidePanelTabs) {
    await dashboardPage.search(tab);
    const button = page.locator("span.oxd-main-menu-item--name", {
      hasText: tab,
    });

    await expect(button).toBeVisible();
    await expect(button).toHaveText(tab);
    await page.waitForTimeout(500);
  }
});
