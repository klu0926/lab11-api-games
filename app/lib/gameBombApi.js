// app/lib/gameBombApi

/** 
 * Fetches 10 games from the GiantBomb Api
 * @async
 * @function getGames
 * @returns {Promise<object[]>} A promist that resolves to an array of game objects
*/
export async function getGames({
  limit = 10,
  name = ''
} = {}) {
  try {
    console.log('get games...')
    const API_KEY = process.env.API_KEY

    let api = `https://www.giantbomb.com/api/games/?api_key=${API_KEY}&format=json`
    // limit
    api += `&limit=${limit}`

    // filter : game name
    api += `&filter=name:${name}`

    console.log('api path:', api)

    // fetch games
    const response = await fetch(api)

    if (!response.ok) {
      console.error('Fail to get response from API')
      throw new Error(response.status)
    }
    const json = await response.json()

    return json
  } catch (err) {
    console.error(err)
  }
}
