import React from "react";
import Head from "next/head";
import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";

const Portraits = ({ pictures }) => {
  return (
    <main className='p-5 sm:p-8 '>
      <Head>
        <title>Karabo Mdluli | Portraits</title>
        <meta
          name='description'
          content='Phone:+27 65 528 6223 Get a Quote Facebook Twitter Youtube. Your premier destination for stunning personal, wedding videography and photography, photographer and art director. Based in Johannesburg South Africa. Film photography. portrait. family portrait'
          key='desc'
        />
        <meta property='og:locale' content='en_Us' />
        <meta
          property='og:title'
          content='title for photographer and art director'
        />
        <meta
          property='og:description'
          content='description for photographer and art director. If oyu want family portraits, you came to the right place'
        />
      </Head>
      <h3 className='uppercase py-5 font-bold text-2xl text-center'>
        Portraits
      </h3>
      <div className='py-4 columns-1 gap-10 sm:columns-2  md:columns-3 lg:columns-4 max-sm:px-6'>
        {pictures?.map((picture) => (
          <div key={picture._id} className=''>
            <img src={urlFor(picture.image)} alt='/' className=' mt-[2rem]' />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portraits;

export const getServerSideProps = async () => {
  const query = `*[_type=='pictures' && category=='portrait']`;
  const pictures = await client.fetch(query);

  //console.log(pictures);

  return {
    props: { pictures },
  };
};
