const api = require('steam-js-api')
api.setKey('{6B328D41EE66949204BBCEBA81C3852A}')

steamID = ''
appID = []
moreInfo = true // Provide more info (name, links)

// With a callback
api.getOwnedGames(steamID, appID, moreInfo).then(result => {
    console.log(result.data)
}).catch(console.error)
