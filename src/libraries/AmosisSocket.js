/**                  
 *  _____    _____ ___________ _______  ____  
 *  \__  \  /     \\____ \__  \\_  __ \/  _ \ 
 *   / __ \|  Y Y  \  |_> > __ \|  | \(  <_> )
 *  (____  /__|_|  /   __(____  /__|   \____/ 
 *       \/      \/|__|       \/              
 * 
 * Class for MeseroSocket functionality
 * Uses https://socket.io/
 *
 */

 import {io} from 'socket.io-client'
 import store from '../store'
 import { v4 as uuidv4 } from 'uuid';

 class AmosisSocket {
 
     constructor() {
 
     
 
         this.vuex = store
 
         this.socket
 
         this.connect()
 
     }
 
     /**
      * Open connection to the server
      */
     connect(){
 
        //  let user = this.vuex.getters.getLoginUser
        //  let user_name = user.name
 
        //  this.socket_url =  process.env.VUE_APP_SOCKET
         this.socket_url = 'ws://192.168.1.9:3006/'
        //  this.socket_url = 'http://192.168.1.4:3006/'
        // this.socket_url = 'https://socket-jc.herokuapp.com/'
 
         // this.socket_url += `${process.env.VUE_APP_API_DOMAIN}`
 
         // if(process.env.VUE_APP_API_DOMAIN != '') {
 
         //     this.socket_url += `:${process.env.VUE_APP_API_PORT}`
 
         // }
         
         this.socket = io( this.socket_url  )
         this.socket.on('printer', (param) => {
            
           console.log(param)
           
       })
 
         
     }
    
    AddZero(num) {
        return (num >= 0 && num < 10) ? "0" + num : num + "";
    }
    
    SendPrint(param){
        this.socket.emit("print", 5, "6", { 7: Uint8Array.from([8]) });
        this.socket.emit('print', {param})
        alert('Se ha enviado la impresion')
        console.log(param)
    }
    NewImpresion(param){
    let now = new Date()
            var hora = [ 
        [this.AddZero(now.getHours()), 
        this.AddZero(now.getMinutes())].join(":"), 
        now.getHours() >= 12 ? "PM" : "AM"].join(" ");
        param.id = uuidv4();
        param.print = 0;
        param.hora = hora;
        this.SendPrint(param)
    }
  
 }
 
 export default AmosisSocket