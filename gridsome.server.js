// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api

  })
}

// module.exports = function (api) {
//   api.loadSource(async store => {
//     const { data } = await axios.get('https://www.scavengerhunt.com/app/ios_ajax_json_hunt_locations.php/ios_ajax_hunt_locations.php?password=asf4fvadfv31das')

//     const contentType = store.addContentType({
//       typeName: 'BlogPosts'
//       route: '/blog/:year/:slug' // optional
//     })

//     for (const item of data) {
//       contentType.addNode({
//         id: item.id,
//         title: item.title,
//         date: item.date,
//         content: item.content
//       })
//     }
//   })
// }
