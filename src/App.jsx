import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.jsx"
import './App.css'

function App() {
  const experiencesData = data.map(experience => {
    return <Card img={experience.coverImg} rating={experience.rating} reviewCount={experience.stats.rating} location={experience.location} title={experience.title} price={experience.price} />
})
  return (
  <div>
    <Navbar />
   {/* <Hero /> */}
   {experiencesData}
  </div>
  )
}

export default App
