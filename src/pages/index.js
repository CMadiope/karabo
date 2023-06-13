import Image from "next/image";
import { Inter } from "next/font/google";
import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";

export default function Home({ pictures }) {
  return (
    <main>
      <div className='grid sm:grid-cols-3'>
        {pictures?.map((picture) => (
          <div key={picture.id}>
            <img src={urlFor(picture.image)} alt='/' />
          </div>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=='pictures'][0...10]`;
  const pictures = await client.fetch(query);

  //console.log(pictures);

  return {
    props: { pictures },
  };
};
