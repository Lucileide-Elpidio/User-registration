import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/bin.svg"
import { Container, Image, ContainerItems, H1, InputLabel, Input, Button, User } from "./style"


function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

 async function addNewUser() {

  const {data:newUser}= await axios.post("http://localhost:3000/users",{name:inputName.current.value,
   age:inputAge.current.value,})

   setUsers([...users, newUser])
   
  }

  useEffect(()=>{
async function fetchUser(){
  const {data:newUser}= await axios.get("http://localhost:3000/users")
  setUsers(newUser)
  }
  fetchUser()
  },[])

 async function deletUser(userId){
  await axios.delete(`http://localhost:3000/users/${userId}`)
const newUser=users.filter(user=> user.id !== userId)
setUsers(newUser)
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
            <p>{user.name}</p>   <p>{user.age}</p>
            <button onClick={()=>deletUser(user.id)}> <img src={Trash} />  </button>
          </User>

        ))
        }
      </ul>
    </ContainerItems>
  </Container>
  )





}

export default App
