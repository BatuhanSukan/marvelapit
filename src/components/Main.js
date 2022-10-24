import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

function Main() {
  const [searchTitle, setSearchTitle] = useState("");
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  let filteredData = item.filter((item) => {
    return item.name.toLowerCase().includes(searchTitle.toLowerCase());
  });

  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let url =
    "http://gateway.marvel.com/v1/public/characters?limit=100&offset=10&ts=1&apikey=438534a52772d5e7579e9fa22259ce68&hash=2ef164822253a3ffe9be3f29c8fa1b39";

  const fetch = async () => {
    //setLoading(true);
    const res = await axios.get(url).then((res) => {
      setItem(res.data.data.results);
      //setLoading(false);
      console.log(res.data.data.results);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="header">
        <div className="bg">
          <img src="./Images/bg.jpg" alt="" className="max-w-full" />
        </div>
        <div className="w-64 h-26 flex justify-center items-center mx-auto">
          <img src="Images/logo.png" alt="logo" />
          <SearchBar setSearchTitle={setSearchTitle} />
        </div>
      </div>

      <div className="content ">
        {!item ? (
          <p>Yükleniyor...</p>
        ) : (
          <Card data={currentPosts} loading={loading} />
        )}
      </div>

          

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={item.length}
        paginate={paginate}
      />
      <div class="text-center font-extrabold text-black">&copy; BatuhanSukan</div>
    </>
  );
}

export default Main;