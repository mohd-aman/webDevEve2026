import React, { useEffect, useState } from "react";

function WatchList() {

  const Genre = () => (
    <div className="flex justify-center m-4">
      {["All Genre","Action","Comedy"].map((genre,index) => {
        const isActive = index === 0;
        const baseStyles =
          "flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white font-bold mx-4 hover:cursor-pointer";
        const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
        return (
          <div
            onClick={()=>console.log("genre clicked")}
            className={`${baseStyles} ${bgColor}`}
          >
            {genre}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Genre />

      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movie"
          className="h-12 w-[18rem] bg-gray-200 px-4 outline-none border border-gray-300"
          type="text"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>
                    <i
                      onClick={()=>console.log("Rating clicked asc")}
                      className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
                    ></i>
                    Ratings
                    <i
                      onClick={()=>console.log("Rating clicked desc")}
                      className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
                    ></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {[{"adult":false,"backdrop_path":"/2cr7imTLVSSrzgL3bFKAMCMdgKw.jpg","id":1314481,"title":"The Devil Wears Prada 2","original_title":"The Devil Wears Prada 2","overview":"Andy Sachs returns to Runway as Miranda Priestly navigates a new media landscape and Runway's position within. The duo reconnect with former assistant Emily Charlton, now the head of a luxury brand that possesses funding which could ensure Runway's survival.","poster_path":"/xTI42pmsP5EDnvsNJPEDubwWBQO.jpg","media_type":"movie","original_language":"en","genre_ids":[35,18],"popularity":75.1301,"release_date":"2026-04-29","softcore":false,"video":false,"vote_average":6.663,"vote_count":580},{"adult":false,"backdrop_path":"/rZfmzpixLKLR3Hg2u0WgC7XLFl8.jpg","id":1339713,"title":"Obsession","original_title":"Obsession","overview":"After breaking the mysterious \"One Wish Willow\" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.","poster_path":"/40I66L7QKguTFDPvcLcdiTbAD7I.jpg","media_type":"movie","original_language":"en","genre_ids":[27],"popularity":125.9389,"release_date":"2026-04-16","softcore":false,"video":false,"vote_average":8.1,"vote_count":92},{"adult":false,"backdrop_path":"/cccXiN28CPjcMVhji5LnogF4Njp.jpg","id":1439930,"title":"The Punisher: One Last Kill","original_title":"The Punisher: One Last Kill","overview":"As Frank Castle searches for meaning beyond revenge, an unexpected force pulls him back into the fight.","poster_path":"/qQclTgLMDvGBuUBFGHRipxkEwWR.jpg","media_type":"movie","original_language":"en","genre_ids":[28,18,80],"popularity":716.6387,"release_date":"2026-05-12","softcore":false,"video":false,"vote_average":8.6,"vote_count":862},{"adult":false,"backdrop_path":"/fBh0OlTY5XSHuFrQ7ylXHniwg9s.jpg","id":1198994,"title":"Send Help","original_title":"Send Help","overview":"Two colleagues become stranded on a deserted island, the only survivors of a plane crash. On the island, they must overcome past grievances and work together to survive, but ultimately, it's a battle of wills and wits to make it out alive.","poster_path":"/mjkS2iAgWj3ik1DTjvI15nHZ7yl.jpg","media_type":"movie","original_language":"en","genre_ids":[27,53,35],"popularity":93.2284,"release_date":"2026-01-22","softcore":false,"video":false,"vote_average":7.032,"vote_count":1473},{"adult":false,"backdrop_path":"/p8777bPIlyFYcjqP2hU8htoz1RG.jpg","id":1318447,"title":"Apex","original_title":"Apex","overview":"A grieving woman pushing her limits on a solo adventure in the Australian wild is ensnared in a twisted game with a cunning killer who thinks she's prey.","poster_path":"/eTp7gSPkSF3Aw79mNx1NkBP1PZT.jpg","media_type":"movie","original_language":"en","genre_ids":[28,53],"popularity":251.6251,"release_date":"2026-04-24","softcore":false,"video":false,"vote_average":6.638,"vote_count":1073},{"adult":false,"backdrop_path":"/a8uQvrplTkhGJQog6GZ6CqF8An6.jpg","id":1301421,"title":"The Sheep Detectives","original_title":"The Sheep Detectives","overview":"George Hardy is a shepherd who reads detective novels to his beloved sheep every night, assuming they can't possibly understand. But when a mysterious incident disrupts life on the farm, the sheep realize they must become the detectives. As they follow the clues and investigate human suspects, they prove that even sheep can be brilliant crime-solvers.","poster_path":"/6QtL9rl3Zb4d8qW6EJ4qO5hSSfU.jpg","media_type":"movie","original_language":"en","genre_ids":[35,10751,9648],"popularity":100.8174,"release_date":"2026-04-30","softcore":false,"video":false,"vote_average":7.619,"vote_count":67},{"adult":false,"backdrop_path":"/hl7FEzMqgpsD0RfwMzskzQoiD1M.jpg","id":1368314,"title":"Passenger","original_title":"Passenger","overview":"After a young couple witnesses a gruesome highway accident, they soon realize they did not leave the crash scene alone, as a demonic presence called the Passenger that won't stop until it claims them both turns their van life adventure into a nightmare.","poster_path":"/svrAzMTif4OmIjGJzC0W92d5O1o.jpg","media_type":"movie","original_language":"en","genre_ids":[27],"popularity":12.4025,"release_date":"2026-05-20","softcore":false,"video":false,"vote_average":10,"vote_count":1},{"adult":false,"backdrop_path":"/es6wAAA72qIKGecMggiRZNQK0fa.jpg","id":1684226,"title":"Bride of the Year","original_title":"Bruid van die Jaar","overview":"When Lienkie's dream of budding a family of her own come crashing down, she hatches a devious plan to win \"Bride of the Year\" and get back at her ex.","poster_path":"/2AiO7wnTrY5ktq0pLco3eS6g8NL.jpg","media_type":"movie","original_language":"af","genre_ids":[35,10749,10751],"popularity":46.9898,"release_date":"2026-05-15","softcore":false,"video":false,"vote_average":6.5,"vote_count":1}]
              .map((movie) => (
                <tr className="hover:bg-gray-50" key={movie.id}>
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                    <img
                      className="h-24 w-40 object-fit object-cover rounded-r-lg"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="pl-2 py-4">Action</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default WatchList;