const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    expect([]).toEqual(expect.any(shuffleArray))
})

expect([shuffleArray]).toHaveLength(shuffleArray);

expect([shuffleArray]).toContain(shuffleArray)

