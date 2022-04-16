

const Main = ({theme,texts,auth}) => {
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
 
export default Main;