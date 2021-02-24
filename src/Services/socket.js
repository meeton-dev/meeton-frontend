import io from 'socket.io-client';
const sockets = io('http://localhost:3009', { autoConnect: true, forceNew: true });
// const sockets = io('/');
export default sockets;
