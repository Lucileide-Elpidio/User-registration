import React, { useRef, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"
import H1 from "../../componets/Title"
import ContainerItems from "../../componets/ContainerItems"
import Button from "../../componets/Button"

import { Container, Image, InputLabel, Input } from "./style"


function Home() {

  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("https://api-users-registration.vercel.app/users",
      {
        name: inputName.current.value,
        age: inputAge.current.value,
      }
    )

    setUsers([...users, newUser])

    navigate("/usuarios")
  }

  return (
    <Container>

      <Image src={People} />

      <ContainerItems>

        <H1>Cadastro</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}> Cadastrar <img src={Arrow} /></Button>

      </ContainerItems>

    </Container>
  )
}

export default Home
