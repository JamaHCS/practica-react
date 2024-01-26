import { useEffect, useRef, useState } from 'react'
import { type User } from '../../types'
import UsersList from './UsersList'
import { UsersButtons } from './UsersButtons'

const Users = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isStriped, setIsStriped] = useState<boolean>(false)
  const [isSorted, setIsSorted] = useState<boolean>(false)
  const originalUsers = useRef<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api?results=5')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = users
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleDelete = (user: User) => {
    setUsers(users.filter(el => el !== user))
  }

  const sortedUsers: User[] = isSorted
    ? [...users].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    : users

  return (
    <div className='usersApp'>
      <h1>Lista de usuarios</h1>
      <UsersButtons handleReset={handleReset} setIsSorted={setIsSorted} setIsStriped={setIsStriped}></UsersButtons>
      <UsersList handleDelete={handleDelete} users={sortedUsers} isStriped={isStriped} />
    </div>
  )
}

export default Users
