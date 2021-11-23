
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Click Add to Duo button displays player-id', async () => {
    const addButton = await driver.findElement(By.id('player id'))
    const displayed = await addButton.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check on click Draw button displays choices', async () => {
    const drawButton = await driver.findElement(By.id('choices'))
    const displayed = await drawButton.isDisplayed()
    expect(displayed).toBe(true)
})

