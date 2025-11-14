import CircularEconomy from './components/CircularEconomy.jsx'
import Header from './components/Header.jsx'
import HowToWork from './components/HowToWork.jsx'
import WasteMarketplace from './components/WasteMarketplace.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <div className="w-full pt-32 mb-10 overflow-auto">
        <WasteMarketplace />
      </div>
      <CircularEconomy/>
      <HowToWork />
    </div>
  )
}

export default App
