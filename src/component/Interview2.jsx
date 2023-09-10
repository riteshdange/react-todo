import React,{useState} from 'react'

const countries = [{
    name:'India',value:'IN',cities:[
        'Delhi','Mumbai'
    ]
},
{
    name:'Pak',value:'PK',cities:[
        'Lahore','Karachi'
    ]
},
{
    name:'Bangladesh',value:'BL',cities:[
        'Dhaka','Chittagong'
    ]
},
]
const Interview2 = () => {
    const [countval, setcountval] = useState('')
    const [cities, setcities] = useState('')

  return (
    <div>
        {/* <input type="Dropdown" value= {['data','data']}/> */}
        <select name="country"  onChange={(e)=>{setcountval(e.target.value);console.log(countries[countval])}} >
            {countries.map((val,ind)=>{
                return (
     <option key={ind} value={ind}>{val.name}</option>
                )
            })}
       

        </select>
         <select name="Cities"  onChange={(e)=>{setcities(e.target.value)}} >
            {countries[countval]?.cities?.map((valu,index1)=>{
                // if(valu.value=== countval){
 return (<>
    {/* {valu.cities.map((valu1,index1)=>{ */}
   return <option key={valu} value={valu}>{valu}</option>
    {/* // })} */}
               </> )
                // }
                // else{
                //     return(<option></option>)
                // }
               
            })}
       

        </select>


        
    </div>
  )
}

export default Interview2