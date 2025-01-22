let userdata = []

const saveData = () => {
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    console.log(alldata);

    let len = alldata != null ? alldata.length + 1 : 1
    let name = document.getElementById("name").value
    // let age = document.frm.age.value
    let age = $("#age").val()
    let gender = $("input[type='radio']:checked").val()
    let id = $("#id").val()
    // let gender =document.getElementById("gender").value
    if (id == '') {
        let obj = {
            id: len,
            name: name,
            age: age,
            gender: gender
        }
        userdata.push(obj)
    } else {
        let updateData = alldata.map((i) => {
            if (id == i.id) {
                i.name = name
                i.age = age
                i.gender = gender
            }
            return i
        })
        userdata = updateData
        document.getElementById("id").value=''  // avu apvu padse naito edit karela data ma new data insert thai jase
    }



    localStorage.setItem("userdata", JSON.stringify(userdata))
    document.frm.reset()
    $("#gender1").removeAttr("checked")
    $("#gender2").removeAttr("checked")

    disp()
}
const disp = () => {
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let txt = " "
    alldata.map((i) => {
        txt += `<tr>
        <td>${i.id}</td>
        <td>${i.name}</td>
        <td>${i.age}</td>
        <td>${i.gender}</td>
        
        <td>
        <button onclick="editData(${i.id})">Edit Data</button>
        <button onclick="delData(${i.id})">Delete</button>
        

        </td>
        </tr>`
    })
    $("#alldata").html(txt)
}
// localStorage.clear()
const delData = (id) => {
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let res = alldata.filter((i) => {
        return i.id != id
    })
    let j = 1
    // let finaldata = res.map((i) => {
    //     i.id = j++
    //     return i
    // })
    // a banne loop thi thase method same chhe
    for (const i of res) {
        i.id = j++
    }

    localStorage.setItem("userdata", JSON.stringify(res))
    $("#gender1").removeAttr("checked")
    $("#gender2").removeAttr("checked")
    
    document.frm.reset()

    disp()

}
const editData = (id) => {
    $("#gender1").removeAttr("checked")
    $("#gender2").removeAttr("checked")
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let res = alldata.find((i) => {
        return id == i.id
    })
    document.getElementById("name").value = res.name
    document.getElementById("age").value = res.age
    $("#id").val(res.id)
    let gender = res.gender
    if (gender == "male") {
        $("#gender1").attr("checked", "true")
    }
    else {
        $("#gender2").attr("checked", "true")

    }
    // localStorage.setItem("userdata",JSON.stringify(userdata))
    disp()
}
disp()

