import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types.d'

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)

        console.log(users)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>Prueba técnica</h1>
    </>
  )
}

export default App
