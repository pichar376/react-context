import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import {useState} from "react"
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";



const MyPageContext = () => {
const [auth, setAuth] = useState(null);
const  handleAuth=()=>{
    if(auth){
    setAuth(null)
    }else{
      setAuth(true)
    }
  }
    return ( 
    <div className="my-page">
     
     

      <ThemeProvider>
        <LanguageProvider>
        <HeaderContext 
    auth={auth} handleAuth={handleAuth}/>
      <MainContext auth={auth}/>
      <FooterContext/>
      </LanguageProvider>
      </ThemeProvider>
    </div>
   );
}
 
export default MyPageContext;