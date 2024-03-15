import './App.css'
import underConstruction from './assets/images/under-construction.png';

function App() {

  return (
    <div className='h-screen bg-orange-300 flex items-center justify-center flex-col'>
      <h1 className='text-5xl'>Bobby Bytes</h1>
      <img className='h-64' src={underConstruction}/>
      <h1 className='text-5xl'>Under Construction</h1>
    </div>
  )
}

export default App
