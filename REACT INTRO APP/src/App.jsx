import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
//functional Components
function App() {
  return(
    <>
    <Header />
    <Body name="Patrick" food ="Cake" isHealthy={false} age={19}/>
    <br />
    <Body name="Ashley" food ="Basta Ikaw" isHealthy={false} age={19}/>
    <br />
    <Body name="TookMole" food ="Inihaw" isHealthy={false} age={25}/>
    <br />
    <Body name="FunTy" food ="brip" isHealthy={false} age={67}/>
    <br />
   
    <Footer />
    </>
  );

}
export default App