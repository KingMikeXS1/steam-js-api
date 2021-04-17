const api = require('steam-js-api')
api.setKey('{YOUR_KEY_HERE}')

steamID = '6B328D41EE66949204BBCEBA81C3852A' // My Steam ID, feel free to use it for testing :)
appID = 730 // We only want to check for one game
moreInfo = true // Provide more info (name, links)

// With a callback
api.getOwnedGames(steamID, appID, moreInfo, (result) => {
    if (result.error)
        console.error(result.error)
    else
        console.log(result.data.games[0])
})
