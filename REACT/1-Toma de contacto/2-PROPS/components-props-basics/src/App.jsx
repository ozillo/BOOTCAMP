import './App.css'

function App() {

  const Title = "Welcome to Components ReactJS"
  const SubTitle = "This is an example components with ReactJS wearing PROPS "
  const Paragraph = "This is a Reactjs test Paragraph"
  const src = "https://fastly.picsum.photos/id/549/200/200.jpg?hmac=8HshVdK-H52hgb-zHj3AefpzafjOnwnqSPzsd0oFoDQ"
  const alt = "RandomPhoto"


  

  return (

    <div>
    <Title data= {Title}/>
    <SubTitle data= {SubTitle}/>
    <Paragraph data = {Paragraph}/>
    <Image src = {src} alt ={alt}/>

    <div/>
  
  );
}

export default App
