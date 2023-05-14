const title = document.getElementById('project-title')
const description = document.getElementById('project-description')
const members = document.getElementById('team-members')
const team_status = document.getElementById('status')
const form_value = document.querySelector('.form-value')
const table_value = document.querySelector('.table-value')
const id = document.querySelector('.id')

form_value.addEventListener('submit' , (event)=>{
event.preventDefault();

if(title.value != "" &&
  description.value != "" &&
  members.value != "" &&
  team_status.value != ""
  ){
  const array = [
    title.value,
    description.value,
    members.value,
    team_status.value
  ]
  const table_row = document.createElement('tr')
   for (let i = 0; i < array.length; i++) {
    const table_data = document.createElement('td')
    table_data.innerHTML = array[i]
    table_row.append(table_data)
  }
  table_value.append(table_row)
   form_value.reset()
}

else{
  alert('Please fill in all the fields')
}

})
