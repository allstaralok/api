const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/image', async (request, reply) => {
  return [
  {imageName: " Image 1", url: "https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g", createDate:"22 Mar 2021"},
  {imageName: " Image 2", url: "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I", createDate:"22 Mar 2020"},
  {imageName: " Image 2", url: "https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE", createDate:"22 Dec 2020"}
];
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(5000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
