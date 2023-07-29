import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/bin.svg"
import H1 from "../../componets/Title"
import ContainerItems from "../../componets/ContainerItems"
import Button from "../../componets/Button"

import { Container, Image, User } from "./style"


function Users() {

  const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUser() {

      const { data: newUser } = await axios.get("https://api-users-registration.vercel.app/users")

      setUsers(newUser)
    }

    fetchUser()

  }, [])

  async function deletUser(userId) {

    await axios.delete(`https://api-users-registration.vercel.app/users/${userId}`)

    const newUser = users.filter(user => user._id !== userId)

    setUsers(newUser)
  }

  function goBackPage() {

    navigate("/")
  }

  return (

    <Container>

      <Image src={Avatar} />

      <ContainerItems isBlur={true}>

        <H1>Usuários</H1>

        <ul>
          {
            users.map((user) => (

              <User key={user.id}>
                <p>{user.name}</p>   <p>{user.age}</p>
                <button onClick={() => deletUser(user._id)}> <img src={Trash} />  </button>
              </User>))
          }
        </ul>

        <Button isBack={true} onClick={goBackPage}>  <img src={Arrow} />Voltar</Button>

      </ContainerItems>

    </Container>
  )
}

export default Users
