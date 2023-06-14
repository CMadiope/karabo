import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";

export default function Home({ pictures }) {
  return (
    <main className='p-5 sm:p-8'>
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
