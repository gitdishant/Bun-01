import figlet from "figlet"
const res : string | undefined = "usd";

const server = Bun.serve({
    port: 3000,
    fetch(req){
        const url = new URL(req.url)
        if(url.pathname === '/'){
            const body = figlet.textSync("I am learnign!")
            return new Response(body)
        }
        if(url.pathname = '/about'){
            const kelo = figlet.textSync("we make Bun Here!")
            return new Response(kelo)
        }
        return new Response("404!")
    }
})

console.log(`your learning bun on port ${server.port}`)