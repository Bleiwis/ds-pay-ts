import Fakedata from './objects/dougthData.json'
import MyCard from './components/atoms/MyCard'
import DoughnutChart from './components/atoms/DoughnutChart'

const App = () => {
 
  return (
    <div>
      <MyCard title={'Hola mundo'}>
        <DoughnutChart dataProp={Fakedata} />
      </MyCard>
    </div>
  )
}

export default App
