import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Marvel() {

  const {id} = useParams();
  const [item,setItem] = useState();
 
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=438534a52772d5e7579e9fa22259ce68&hash=2ef164822253a3ffe9be3f29c8fa1b39`); 
      setItem(res.data.data.results[0])
    }
    fetch();
  },[])

  return (
    <>
      {
        (!item) ? <img className='object-none object-center w-full h-96' src="https://img.icons8.com/carbon-copy/100/000000/spinner-frame-5.png"/> : (
        
          <div class="mx-20 mx-auto my-24 mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-4 py-6 text-black shadow-2xl">
          <div class="text-center">
            <img class="rounded-3xl" alt="profile pic" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />

            <p class="pt-2 text-5xl font-medium">{item.name}</p>
            <p class="text-sm font-extrabold text-gray-900 mt-6">{item.description}</p>
            <ul className='text-2xl mt-6'>Comics
                  {
                    item.comics.items.map((s,index) => (<li key={index}>{s.name}</li>
                    ))
                  }
                </ul>
          </div>
          <div class="my-3 grid grid-cols-5 items-center gap-4 px-4">
          </div>

          <div class="text-center font-extrabold text-black">&copy; BatuhanSukan</div>
        </div>
          
        ) 
      }
    </>
  )
}

export default Marvel;


                