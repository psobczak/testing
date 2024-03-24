import { test, expect } from "../utils/Fixtures";

test("search on dashboard", async ({ dashboardPage, page, sidePanelTabs }) => {
	for (const tab of sidePanelTabs) {
		await dashboardPage.search(tab);
		const button = dashboardPage.findButtonWithText(tab);

		await expect(button).toBeVisible();
		await expect(button).toHaveText(tab);
		await page.waitForTimeout(500);
	}
});
