import React from "react";
import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";

const Film = ({ pictures }) => {
  return (
    <main className='p-5 sm:p-8'>
    <h3 className='uppercase py-5 font-bold text-2xl text-center'>Film</h3>
      <div className='py-10 columns-1 gap-10 sm:columns-2  md:columns-3 lg:columns-4 max-sm:px-10'>
        {pictures?.map((picture) => (
          <div key={picture._id} className=''>
            <img src={urlFor(picture.image)} alt='/' className=' mt-[2rem]' />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Film;

export const getServerSideProps = async () => {
  const query = `*[_type=='pictures' && category=='film']`;
  const pictures = await client.fetch(query);

  //console.log(pictures);

  return {
    props: { pictures },
  };
};
