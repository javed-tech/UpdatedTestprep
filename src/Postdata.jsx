import {React,useState} from 'react'

const Postdata = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const Saveuser=()=>{
        console.warn('fields',{name,email,mobile});
        let data={name,email,mobile};

           fetch("https://dummy.restapiexample.com/api/v1/employee/1",{
            method: 'post',
            headers: {
              'Accept':'application/json',
              'Content-type':'application/json'
            },
            body: JSON.stringify(data)
          }).then((result)=>{
              result.json().then((resp)=>{
                  console.warn('resp',resp)
              })
          })
    };
  
    return (
        <div>
            <input type="text" onChange={(e)=>setname(e.target.value)} name="name" value={name}/>
            <input type="email" onChange={(e)=>setemail(e.target.value)} name="email" value={email}/>
            <input type="number" onChange={(e)=>setmobile(e.target.value)} name="mobile" value={mobile}/>
            <button onClick={Saveuser}>save</button>
        </div>
    )
}

export default Postdata
