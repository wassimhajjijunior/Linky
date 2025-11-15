import CircularEconomy from './components/CircularEconomy.jsx'
import Header from './components/Header.jsx'
import HowToWork from './components/HowToWork.jsx'
import JoinWasteTrade from './components/JoinWasteTrade.jsx'
import WasteMarketplace from './components/WasteMarketplace.jsx'
import WasteTradeMaterials from './components/WasteTradeMaterials.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <div className="w-full pt-32 mb-10 overflow-auto">
        <WasteMarketplace />
      </div>
      <CircularEconomy/>
      <HowToWork />
      <WasteTradeMaterials/>
      <JoinWasteTrade/>
      <Footer/>
    </div>
  )
}

export default App
