import './App.css'
import Users from './components/users/Users'
import { PrimeReactProvider } from 'primereact/api'

function App() {
  return (
    <PrimeReactProvider>
      <Users />
    </PrimeReactProvider>
  )
}

export default App
