import { createContext } from 'react';
import Cookies from 'js-cookie';

export const UserContext = createContext(null);
// export const UserContext = () =>{
//     const userCookie = Cookies.get("thinklocal");
//     if(userCooke){
//         return 
//     }else{
//         createContext(null);
//     }
// } 