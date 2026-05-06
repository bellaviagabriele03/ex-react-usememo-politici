import { useState, useEffect } from 'react'
import Card from './components/Card'
import { data } from 'react-router-dom'

function App() {


  useEffect(() => {

    getUsers()


  }, [])
  const [users, setUsers] = useState([])


  async function getUsers() {
    const res = await fetch("http://localhost:3333/politicians");
    const data = await res.json();
    setUsers(data)


  }



 



  return (
    <>
      <div>
        <h1 className='title'>LISTA DEI POLITICI</h1>

      </div>
      <div className="container">
        {users.length > 0 && (
          <>
            {users.map((u, i) => (
              <Card user={u} key={i} />
            ))}
          </>
        )}
      </div>

    </>
  )
}

export default App
