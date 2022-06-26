
const subFrom = document.querySelector('.form');
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const registration = document.querySelector('#registration');
const address = document.querySelector('#address');


subFrom.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const data ={
        name:name.value,
        phone:phone.value,
        address:address.value,
        registration:registration.value
    }
    console.log('form submitted');

    console.log(data);

    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('http://localhost:5000/api/register/authentication', config)
        const json = await response.json();
        if (response.status === 200) {
            localStorage.setItem('user',JSON.stringify(json))
            // console.log(json)
            alert('Credentials are correct');

            window.location.href='courses.html'
        } else {
           alert('Credentials are incorrect')
        }
    } catch (error) {
            alert('Internal Server Error')
    }
    
})