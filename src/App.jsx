import React, { useEffect, useState } from 'react'
import Navbar  from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Shop from './components/Shop/Shop'
import DummyAPI from './components/DummyAPI/DummyAPI'
import FaceAPI from './components/FaceAPI/FaceAPI'
import DetilsProdects from './components/DetilsProdects/DetilsProdects'
import PageError from './components/PageError/PageError'
import CartShop from './components/CartShop/CartShop'
import Heart from './components/Heart/Heart'
import DummyDetalsAPI from './components/DummyDetalsAPI/DummyDetalsAPI'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'



function App() {
 

let API='https://fakestoreapi.com/products'

let dummyAPI="https://dummyjson.com/products"


let [prodect,SetProdect]=useState([])
let [DummyApi,SetDummyApi]=useState([])


let [loding,SetLoding]=useState([])



 async function GetProdectApi(){
  let {data}=await axios.get(API)
  SetLoding(true)
  SetProdect(data)
  SetLoding(false)
  
 }



 useEffect (()=>{
  GetProdectApi()
  getproductAPi()

},[])

async function getproductAPi(){

  let {data}=await axios.get(dummyAPI)

  
  SetDummyApi(data.products)

  
}



let [cart,SetCart]=useState([])

let [heart,SetHeart]=useState([])

function addTocard(pr){
  const newprams=cart.find((pram)=> pram.title === pr.title)
  
  if (!newprams){
    Swal.fire({
   
      position: "center",
      icon: "success",
      title: `<p class="text-danger h2"> (${pr.title?.split(" ").slice(0,2).join(" ")})
      <p class='text-primary'>Your Add prodect To Card..</p>
      
      </p>`,
      showConfirmButton: false,
      timer: 800
    });
    SetCart([...cart,{...pr , amount : 1 }]) 
 

  }else{

    Swal.fire({
     
      position: "center",
      icon: "info",
      title: `<p class="text-danger h2"> (${pr.title?.split(" ").slice(0,2).join(" ")})
      <p class='text-primary'>Had AleadY Adedd !!</p>
      
      </p>`,
      
      showConfirmButton: true,
      // timer: 800
    });
  }



}

function increaseAmount(pro){

  ++pro.amount
SetCart([...cart])
}

useEffect (()=>{
  if (localStorage.getItem == null){
    SetCart([])
   
  }else{
    SetCart(JSON.parse(localStorage.getItem('cart')))
  }
  if(localStorage.getItem == null){
    SetHeart([])
  }else{
    SetHeart(JSON.parse(localStorage.getItem('heart')))
  }
},[])

useEffect (()=>{
  localStorage.setItem('cart',JSON.stringify(cart))
  localStorage.setItem('heart',JSON.stringify(heart))
 
},[cart,heart])


function decreaseAmount(pro){

  if(pro.amount > 1){

    --pro.amount
    SetCart([...cart])
  }else{
    Deletpro(pro)
   
  
  }

  
}



function AddToheart(res){
  const newres=heart.find((pram)=> pram.title === res.title)
  
  if (!newres){
    Swal.fire({
   
      position: "center",
      icon: "success",
      title: `<p class="text-danger h2"> (${res.title?.split(" ").slice(0,2).join(" ")})
      <p class='text-primary'>Your Add prodect To Card..</p>
      
      </p>`,
      showConfirmButton: false,
      timer: 800
    });
    SetHeart([...heart,res])
 

  }else{

    Swal.fire({
     
      position: "center",
      icon: "info",
      title: `<p class="text-danger h2"> (${res.title?.split(" ").slice(0,2).join(" ")})
      <p class='text-primary'>Had AleadY Adedd !!</p>
      
      </p>`,
      
      showConfirmButton: true,
      // timer: 800
    });
  }


}

function Deletpro(pramit){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      const newArray=cart.filter((el)=>{return el.title !== pramit.title})
      SetCart([...newArray])
    }
  
  });
 
}

function removefromheart(rem){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    const remove= heart.filter((el)=>{ return el.title !== rem.title})
    SetHeart([...remove])
    }
    
  });

}

let [dark,Setdark]=useState(false)

function darkmood(){
  Setdark(!dark)

}

  return (
    <main className={dark ? "dark" : "" }>

            <BrowserRouter>
            <Navbar cart={cart} heart={heart}  darkmood={darkmood}/>
            <Routes>
            <Route path='' element={<Home addTocard={addTocard} AddToheart={AddToheart}/>}/> 
            <Route  path='about' element={<About/>}/>
            <Route  path='contact' element={<Contact/>} />
            <Route  path='dummyAPI' element={<DummyAPI DummyApi={DummyApi}  loding={loding} addTocard={addTocard} AddToheart={AddToheart} />  }  />
            <Route  path='faceAPI' element={<FaceAPI prodect={prodect} loding={loding}    addTocard={addTocard}  AddToheart={AddToheart} />} />
            <Route  path='shop' element={<Shop addTocard={addTocard}  AddToheart={AddToheart}/>} />
            <Route path='Detils/:id' element={<DetilsProdects   addTocard={addTocard} AddToheart={AddToheart}/>} />
            <Route path='DummayApi/:id' element={<DummyDetalsAPI addTocard={addTocard}  AddToheart={AddToheart} />}/>
            <Route path='CartShop' element={<CartShop cart={cart} Deletpro={Deletpro}  increaseAmount={increaseAmount} decreaseAmount={decreaseAmount}/>}/>
            <Route path='Heart' element={<Heart heart={heart}  addTocard={addTocard} removefromheart={removefromheart}/>   } />
            <Route path='*' element={<Home/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
     
      
    </main>
  )
}

export default App