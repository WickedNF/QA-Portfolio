import { test, expect } from '@playwright/test'
// @ts-check

test('has logo', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');

    //Create locator
    

    //Expect a logo to load
    await expect(page).toHaveURL()
} )


