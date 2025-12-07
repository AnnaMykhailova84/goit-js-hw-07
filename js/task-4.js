const formBox = document.querySelector('form.login-form'); 
// const btnSubmit = document.querySelector('button[type="submit"]');
// console.dir(document.forms);


const handleClick = (event) => { 
  event.preventDefault();   
  const formFields = [...event.target.elements];

  const formData = {};
  
  for (const field of formFields) {
    if (!field.name) continue;
    const key = field.name;
    const value = field.value.trim();
    if (value === '') { 
      alert('All form fields must be filled in');
      return;
    }
    formData[key] = value;
  }  

  console.log(formData);  
  
  event.target.reset(); 
}

formBox.addEventListener('submit', handleClick); 