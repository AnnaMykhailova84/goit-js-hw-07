const formBox = document.login; 
// const btnSubmit = document.querySelector('button[type="submit"]');
// console.dir(document.forms);


const handleClick = (event) => { 
  event.preventDefault(); 
  const formFields = [...event.target.elements];

  const formData = {};
  
  for (const field of formFields) {
    if (!field.name) continue;
    if (field.value === '') { 
      alert('All form fields must be filled in');    
    }
    const key = field.name;
    const value = field.value;

    formData[key] = value;
  }  

  console.log(formData);  
  
  event.target.reset(); 
}

formBox.addEventListener('submit', handleClick); 
 
