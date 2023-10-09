import { verbTheNoun } from './verb-the-noun';

const server = Bun.serve({
    port: 8080,
    fetch(request) {
        return new Response(verbTheNoun());
    }
});

console.log(`Listening at http://localhost:${server.port}`)
