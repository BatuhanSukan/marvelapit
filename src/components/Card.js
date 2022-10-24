import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  let navigate = useNavigate();

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="grid md:col-span-2 w-96 p-1 mb-20 rounded-xl transform transition-all hover:-translate-y-4 duration-300 shadow-2xl hover:shadow-xl">
          <div
            className="card"
            key={item.id}
            onClick={() => navigate(`/${item.id}`)}
          >
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt="card" className='h-40 object-cover rounded-xl'
            />
            <div className="title">
              <h3 className='text-2xl font-mono:Consolas text-center p-4 mb-6 flex justify-center'>{item.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;