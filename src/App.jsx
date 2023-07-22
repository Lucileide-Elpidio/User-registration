import React, { useRef, useState } from "react"
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/bin.svg"
import { Container, Image, ContainerItems, H1, InputLabel, Input, Button, User } from "./style"


function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser() {
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])
  }

  return (<Container>
    <Image src={People} />
    <ContainerItems>

      <H1>Cadastro</H1>
      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} placeholder="Nome" />

      <InputLabel>Idade</InputLabel>
      <Input ref={inputAge} placeholder="Idade" />
      <Button onClick={addNewUser}> Cadastrar <img src={Arrow} /></Button>

      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.inputName}</p>   <p>{user.inputAge}</p>
            <button> <img src={Trash} />  </button>
          </User>

        ))
        }
      </ul>
    </ContainerItems>
  </Container>
  )





}

export default App
