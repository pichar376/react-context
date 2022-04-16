import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";


const MainContext= ({auth}) => {
  const {theme}=useContext(ThemeContext);
  const {texts} = useContext(LanguageContext)
  return ( 
    <div>
      <main className={theme}>
        {auth?<p>{texts.mainWelcome}</p>:
        <p>{texts.mainHello}</p>}
   <p>{texts.mainContent}</p>
      </main>
    </div>
   );
}
 
export default MainContext;