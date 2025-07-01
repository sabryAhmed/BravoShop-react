import React from 'react'
import Header from  '../Headar/Headar'
import Servcies from '../Servcies/Servcies'
import Categories from '../Categories/Categories'
import Prodect from '../Prodect/Prodect'
import Media from '../Media/Media'
function Home({addTocard,AddToheart}) {
  return (
    <div>
      
      <Header/>
      <Servcies/>
      <Categories/>
      <Prodect addTocard={addTocard} AddToheart={AddToheart} />
      <Media/>
    </div>
  )
}

export default Home