import { createServer } from 'node:http'
const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Assignment 1, Yippee!')
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`)
})