let userdata = []
let hidden_word=()=>{
    setTimeout(() => {
        document.getElementById("msg").innerHTML=" "
        
        }, 2000);
}



const saveData = () => {
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    

    let len = alldata != null ? alldata.length + 1 : 1
    let name = document.getElementById("name").value
    // let age = document.frm.age.value
    let age = $("#age").val()
    // let gender = $("input[type='radio']:checked").val()
    let gender =document.getElementById("gender").value
    let id=$("#id").val()
   
    if(name=='' || age=='' || gender==''){
        document.getElementById("msg").innerHTML="All fields are mandetory..!"
        hidden_word()
    }
    else{
        if(id!=''){
            let update_data=alldata.map((i)=>{
                if(id==i.id){
                    i.name=name
                    i.age=age
                    i.gender=gender
                }
                return i
            })
           
            userdata=update_data
            $("#id").val('')
           
            document.getElementById("msg").innerHTML="Data Update Successfully..!"
            hidden_word()
            document.frm.reset()
            
        }else{
            let obj = {
                id: len,
                name: name,
                age: age,
                gender: gender
            }
            document.getElementById("msg").innerHTML="Data Save Successfully..!"
            hidden_word()
            userdata.push(obj)
            document.frm.reset()
            
           
        }
    }
    
    
    
    
    localStorage.setItem("userdata", JSON.stringify(userdata))
    
    disp()
    

}
   
const disp = () => {
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let txt = ''
    alldata.map((i) => {
        txt += `<tr>
        <td>${i.id}</td>
        <td>${i.name}</td>
        <td>${i.age}</td>
        <td>${i.gender}</td>
        <td>
        <button  onclick="editData(${i.id})">Edit Data</button>

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
        i.id=j++
    }
    txt =''
    localStorage.setItem("userdata", JSON.stringify(res))
   
    disp()
    

}
const editData = (id) => {
    
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let res = alldata.find((i) => {
        return i.id == id
    })
    $("#id").val(res.id)
    $("#name").val(res.name)
    $("#age").val(res.age)
    $("#gender").val(res.gender)
    
    disp()

}
disp()
