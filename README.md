<script src="https://cdn.jsdelivr.net/npm/socket.io-client/dist/socket.io.min.js"></script>

# Websocket
- A WebSocket is a communication protocol that provides a full-duplex (two-way), persistent connection between a client (like a browser) and a server over a single TCP connection.
- Persistant connection means: client can send data frequently and server also anytime.
- Statefull, bi-directional, full duplex connection.
- Use: Real time application: Chating App, Treding, Telegram.

## How It Works
- Client sends a WebSocket handshake request to the server (upgrading from HTTP).
- If the server accepts, the protocol switches to WebSocket.
- Both client and server can now send messages anytime without re-requesting.

# HTTP:
- Http is un-directional, stateless, half-duplex connection.
- In http client have to request then only server send response. so whenever client request then only response will come, after req-res 1 cycle is comppleted for again get response client have to req.

## Pooling
- Beacuse of every time req and res http have one more solution is pooling
- pooling is 2 types: Short and Long
- SHort Pooling: Short pooling client will do req and server send response if there is no response then it will return undefine as response. but it is not good way.
- Long Pooling: Long pooling client will do req and server not responsing then wait till some define interval still not getting response then return undefine.

## SSE ( Server Sent Event)
- SSE (Server-Sent Events) is a unidirectional, real-time communication technology where the server can push updates to the client over a single long-lived HTTP connection.
### Key Points
1. One-way: Server → Client only (client can’t send messages over the same channel).
2. Built-in to HTTP (uses text/event-stream MIME type).
3. Auto-reconnection: Browser automatically reconnects if the connection drops.
4. Lightweight compared to WebSockets if you only need server → client updates.
Example: Chatgpt, gemini, claude
