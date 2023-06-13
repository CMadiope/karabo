import Image from "next/image";
import { Inter } from "next/font/google";
import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";

export default function Home({ pictures }) {
  return (
    <main className='p-5 sm:p-8'>
      <div className='columns-1 gap-5 sm:columns-2  md:columns-3 lg:columns-4 '>
        {pictures?.map((picture) => (
          <div key={picture.id} className='aspect-video 4-8'>
            <img src={urlFor(picture.image)} alt='/' className='rounded-lg mt-[2rem]' />
          </div>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=='pictures'][0...20]`;
  const pictures = await client.fetch(query);

  //console.log(pictures);

  return {
    props: { pictures },
  };
};
