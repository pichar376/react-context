import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    
    <div style={{textAlign:"center"}}>
      <h1>Context API</h1>
      <MyPageContext/>
      <hr/>
      <MyPage/>
    </div>
  );
}

export default App;
