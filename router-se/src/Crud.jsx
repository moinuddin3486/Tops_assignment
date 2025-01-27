import React, { useState } from 'react'

export default function Crud(props) {
  const [name, setname] = useState("")
  const [age, setage] = useState("")
  const [data, setdata] = useState([])
  const [id, setid] = useState("")
  let save_data = (e) => {
    e.preventDefault()
    if (id!== ""){
      let res = data.map((i, index) => {
        if (index === id) {
          i.name = name
          i.age = age
        }
        return i
      })
      data.push(res)
      setdata(res)
    } else {
      let obj = {
        name: name,
        age: age
      }
      data.push(obj)
      setdata(data)

    }


    setname("")
    setage("")
    setid("")

  }
  let del_data = (id) => {
    let res = data.filter((i, index) => {
      return index !== id
    })
    data.push(res)
    setdata(res)
  }
  let edit_data = (id) => {
    let res = data.find((i, index) => {
      return id === index
    })
    // console.log(res.name);
    setname(res.name)
    setage(res.age)
    setid(id)

  }
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <form action="post" name="frm" onSubmit={save_data}>
        <label htmlFor="">Name :</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => {
          setname(e.target.value)
        }} /><br /><br />
        <label htmlFor="">Age :</label>
        <input type="number" name="age" id="age" value={age} onChange={(e) => {
          setage(e.target.value)
        }} /><br /><br />
        <input type="submit" name="save" id="save" value={"submit"} />
      </form>
      <table border={2}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((i, index) => {
              return (
                <tr>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td><button onClick={() => del_data(index)}>Delete</button></td>
                  <td><button onClick={() => edit_data(index)}>Edit</button></td>

                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

