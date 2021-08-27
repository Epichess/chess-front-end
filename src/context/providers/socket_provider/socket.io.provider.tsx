import {SocketContext} from "../../socket.io.context";
import {ComponentProps, useState, useEffect} from "react";
import socketIOClient, {Socket} from "socket.io-client";

export default function SocketProvider({children}: ComponentProps<any>){

  const [mySocket, setMySocket] = useState<Socket | undefined>(undefined);

  useEffect(() => {
    setMySocket(socketIOClient("http://localhost:8000"));
  }, []);


  return(
      <SocketContext.Provider value={{
        socket: mySocket
      }}>
        {children}
      </SocketContext.Provider>
  )
}
