import React,{useEffect, useState} from 'react'
export default function Footer() {
    const [time,settime]=useState(new Date())
    useEffect(()=>{
        setInterval(()=>{settime(new Date())},1000)
    })
  return (
    <>
<div className="fixed-bottom">
<footer className="bg-dark text-center text-white">
  <div className="container p-1 pb-0 my-0">
    <section className="">
      <form action="">
        <div className="row d-flex justify-content-space-evenly">
          <div className="col-auto">
            <p className="pt-1">
              <strong>Design And Devloped by Harsh Kumar Goyal with <font color="red">&hearts;</font></strong>
              <strong>{time.toLocaleTimeString()}</strong>
            </p>
          </div>
        </div>
      </form>
    </section>
  </div>
</footer>
</div>
    </>
  )
}
