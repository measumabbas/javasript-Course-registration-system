
const select = document.querySelector('.form-select');
console.log(select)
var arr =[]

let user = JSON.parse(localStorage.getItem('user'));
// console.log(user.result.registration);

document.querySelector('#form').addEventListener('submit', async (e)=>{
    e.preventDefault();

    arr.push(select.value)

    if(confirm('Do you want to select another course')){
        select.value='';
    }else{
        const data ={
            registration:user.result.registration,
            courses:arr
        }
    
    
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('http://localhost:5000/api/register/course', config)
            const json = await response.json();
            if (response.status === 200) {
                alert('Courses added Successfully');
                getCourses();
            } else {
               alert('Some error occured')
            }
        } catch (error) {
                alert('Internal Server Error')
        }
    }
});

const coursesDiv = document.querySelector('#total');
const getCourses = async ()=>{
    const data ={
        registration:user.result.registration
    }


    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('http://localhost:5000/api/register/getsecscourses', config)
        const json = await response.json();
        if (response.status === 200) {
           console.log(json[0].courses)
           let html = ``;

           json[0].courses.forEach((course)=>{
                html+=`
                <div class="col-md-4">
                <div class="card bg-primary text-white d-flex justify-content-between align-items-center p-3">${course}</div>
                </div>
                `
           });
           coursesDiv.innerHTML=html;

        } else {
        //    alert('Some error occured')
        }
    } catch (error) {
            // alert('Internal Server Error')
    }
}
try {
    
    getCourses()
} catch (error) {
    console.log(error)
}


const logBtn = document.querySelector('#logBtn');

logBtn.addEventListener('click',()=>{

    localStorage.removeItem('user');
    window.location.href='index.html'
})