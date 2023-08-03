import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.jsx"
import './App.css'

function App() {
  const experiencesData = data.map(experience => {
    return <Card 
    key={experience.id}
    experience={experience}
    />
})
  return (
  <div>
    <Navbar />
   {/* <Hero /> */}
   <section className="cards-list">
   {experiencesData}
   </section>
  </div>
  )
}

export default App
