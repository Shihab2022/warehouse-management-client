import React from "react";
import useHomePageData from "../../Hooks/HomePageData";
import RelatedDetails from "./RelatedDetails";

const Related = () => {
  const [homeData] = useHomePageData();
  const relatedData = homeData.slice(5, 8);
  return (
    <>
      <div className='relative flex justify-center items-center md:mb-96 mb-[950px]'>
        <div className="bg-black pt-8 pb-40 px-24 w-screen ">
          <h1 className="text-3xl  text-white">RELATED POSTS</h1>
        </div>


        <div className="bg-white grid md:gap-10 gap-4 grid-cols-1 p-5 md:px-14 md:grid-cols-3 shadow-2xl shadow-orange-500 rounded-sm absolute top-28 w-[90%]">


            { 
            relatedData.map(data =><RelatedDetails key={data._id } data={data}></RelatedDetails>
            )

            }
           
            
        </div>
      </div>
    </>
  );
};

export default Related;
