import Head from "next/head";
import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";

export default function Home({ pictures }) {
  return (
    <main className='pt-[15%]  sm:pt-[20%] md:pt-[15%]'>
      <Head>
        <title>Karabo Mdluli | Photographer | Art Director</title>
        <meta
          name='description'
          content='Phone:+27 65 528 6223 Get a Quote Facebook Twitter Youtube. Your premier destination for stunning personal, wedding videography and photography, photographer and art director. Based in Johannesburg South Africa. '
          key='desc'
        />
        <meta property='og:locale' content='en_Us' />
        <meta
          property='og:title'
          content='title for photographer and art director'
        />
        <meta
          property='og:description'
          content='description for photographer and art director'
        />
      </Head>
      <div className='pb-10 columns-1 gap-10 sm:columns-2  md:columns-3 lg:columns-4 max-sm:px-6'>
        {pictures?.map((picture) => (
          <div key={picture._id} className=''>
            <img src={urlFor(picture.image)} alt='/' className=' mt-[2rem]' />
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
