console.log('Starting XMLHttpRequest')
const API = ''

const fetchData = (url) => {
  axios.get(url)
    .then(res => mostrarData(res.data.items))
    .catch(err => console.error(err))
}

const mostrarData = (data) => {
  let tbody = document.querySelector('#contentBody')
  let body = ''
  data.forEach((item) => {
    body += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.age}</td>
      </tr>`
  })
  tbody.innerHTML = body
}

//para 
function formData() {
  let formData = document.querySelector('#cliente');
  formData.addEventListener("submit", function(e){
    e.preventDefault();
    let id = formData[0].value;
    let name = formData[1].value;
    let email = formData[2].value;
    let age = formData[3].value; 
    let payload = {"id":id,"name":name,"email":email,"age":age}
    console.log(payload)
    axios.post("https://gbab47174219ec6-db202109252009.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", payload)
      .then(res => fetchData("https://gbab47174219ec6-db202109252009.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"))
      .catch(err => console.error(err))
  })
}

// function deleter() {
//   let payload = {"id":4}
//   console.log("llegue aqui")
//   axios.delete("https://gbab47174219ec6-db202109252009.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", payload )
//     .then(res => fetchData("https://gbab47174219ec6-db202109252009.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"))
//     .catch(err => console.error(err))

// }





function main() {
  fetchData(API)
  formData()
  // deleter()
}

main()