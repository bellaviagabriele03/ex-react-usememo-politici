import { useState, useEffect } from 'react'
import Card from './components/Card'
import { data } from 'react-router-dom'

function App() {
  useEffect(() => {
    getUsers()
  }, [])

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [filterArray, setFilterArray] = useState([])
  async function getUsers() {
    const res = await fetch("http://localhost:3333/politicians");
    const data = await res.json();
    setUsers(data)
    setFilterArray(data)
  }

  function filters() {

    if (search !== "") {
      console.log("valore input iniziale:", search);


      const filterUser = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.biography.toLowerCase().includes(search.toLowerCase()))
      setFilterArray(filterUser)
      setSearch("")
      console.log("valore input dopo:", search);

    }
  }

  function resetFilters() {
    if (search === "") {
      setFilterArray(users)
    }
  }



  return (
    <>
      <div>
        <h1 className='title'>LISTA DEI POLITICI</h1>

      </div>
      <div className="container">
        <div className='search-bar'>
          <form onSubmit={(event) => { event.preventDefault() }}>
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
              type="text"
              placeholder='Cerca per nome / biografia' />
            <button
              onClick={() => { filters() }}
              type='submit'>INVIA</button>
            <button
              onClick={() => { resetFilters() }}
            >Cancella filtri</button>
          </form>

        </div>

        {users.length > 0 && (
          <>
            {filterArray.map((u, i) => (
              <Card user={u} key={i} />
            ))}
          </>
        )}
      </div>

    </>
  )
}

export default App
