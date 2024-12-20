import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Child1 from "./pages/child1";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Home(){
    // const [myVar,setMyVar]=useState({name:"ram",age:21});

    const [rate,setRate]=useState(0);
    const navigate=useNavigate()

    useEffect(()=>{

        // logic

        console.log(" i am in")
    },[])

    const [si,setSi]=useState(0)
    useEffect(()=>{
        setSi(5000*2*rate);
    },[rate])

    const ans=useCallback((a)=>{
        return 5000*2*rate * a
    },[rate])

    useEffect(()=>{
        return ()=>{
            console.log("i am out")
        }
    },[])




    // let myVar=1;

    const myRef= useRef();
    function funIncrease(){
        console.log(myRef.current)
        // myVar=myVar+1;
        // setMyVar({...myVar,age:myVar.age+1})
        setRate(rate+1)
    }

    const [name]=useState("Ram")
   const filepick=useRef();

   const validationSchema=z.object({
    name: z.string().min(1),
    age: z.string().min(1),
    file:z.any()
  });
  
   const {register,handleSubmit,formState}=useForm({
    defaultValues:{name:"",age:"",file:""},
    resolver:zodResolver(validationSchema),
    mode:"all"
   })
   const{errors}=formState;

   console.log(errors)

   const submit=(data)=>{
    console.log(data)

    const formData= new FormData()
    formData.append("name",data?.name)
    formData.append("age",data?.age)
    formData.append("file",data?.file[0])

    console.log(formData)


   }
 

    return <>
        this is Home page

<form onSubmit={handleSubmit(submit)}>
        <div>
            name: <input type="text" {...register("name")}/>
        {errors?.name?.message}
        </div>
        <div>
            age: <input type="text" {...register("age")}/>
            {errors?.age?.message}
        </div>
        <div>
            file: <input type="file" {...register("file")}/>
        </div>
        <div>
            <input type="submit"/>
        </div>
        </form>
        {/* <Child1 name={name}/> */}

        {/* name={myVar['name']}, age={myVar['age']} */}
        {/* <input ref={filepick} style={{display:'none'}} type="file" />
        SI:{si}
        ans:{ans(10)}
        ans datatype:{typeof(ans)}
        <button onClick={()=>filepick.current.click()}>increase rate</button>
        <button onClick={()=>navigate("/login")}>out</button>

        <div ref={myRef}>
            <div>children<div>mydiv</div></div>
        </div> */}
    </>
}

export default Home