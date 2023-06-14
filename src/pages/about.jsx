import React from "react";
import Head from "next/head";
import karabo from "../../public/karabo.jpeg";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <Head>
        <title>Karabo Mdluli | About</title>
        <meta
          name='description'
          content='Phone:+27 65 528 6223 Get a Quote Facebook Twitter Youtube. Your premier destination for stunning personal, wedding videography and photography, photographer and art director. Based in Johannesburg South Africa. Film photography'
          key='desc'
        />
        <meta property='og:locale' content='en_Us' />
        <meta
          property='og:title'
          content='title for photographer and art director'
        />
        <meta
          property='og:description'
          content='Collaboration is at the heart of my creative journey. Above all, I am driven by a genuine desire to make a positive
              impact through my creativity. I aspire to inspire others, ignite
              their imaginations, and contribute to a world where stories are
              celebrated and shared.'
        />
      </Head>
      <h3 className='uppercase  font-bold text-2xl text-center py-10'>
        About Me
      </h3>
      <div className='flex flex-col lg:flex-row  justify-evenly items-center  pb-12'>
        <div className='px-6 '>
          <Image src={karabo} alt='karabo' />
        </div>
        <div className='flex flex-col gap-4 px-6  text-center   text-sm  mb-5 max-lg:pt-10 lg:w-1/2 sm:px-24 md:px-12 lg:px-8'>
          <div className='col-span-1 flex flex-col gap-4'>
            <p className=' rounded-lg p-3 shadow-xl bg-white'>
              A passionate creative who thrives on collaboration and the art of
              storytelling. My name is{" "}
              <span className='font-bold'>Karabo Mdluli</span> , and I have an
              unwavering love for all things imaginative and expressive.
            </p>

            <p className=' rounded-lg p-3 shadow-xl bg-white'>
              Since I was young, I've been captivated by the power of
              storytelling and its ability to transport people to different
              worlds, evoke emotions, and inspire change. Whether it's through
              writing, visual arts, photography, or any other medium, I find joy
              in bringing stories to life and sharing them with others.
            </p>
            <p className=' rounded-lg p-3 shadow-xl bg-white'>
              Collaboration is at the heart of my creative journey. I believe
              that the most remarkable ideas are born when diverse perspectives
              and talents merge. I'm energized by the exchange of ideas and the
              opportunity to work alongside fellow creatives, pushing boundaries
              and creating something truly unique.
            </p>
          </div>
          <div className='col-span-1 flex flex-col gap-4'>
            <p className=' rounded-lg p-3 shadow-xl bg-white'>
              In addition to my passion for storytelling, I'm also dedicated to
              continuous growth and development. I'm constantly seeking new
              avenues to expand my creative horizons, whether it's through
              attending workshops, collaborating with professionals from diverse
              backgrounds, or embracing emerging technologies.
            </p>
            <p className=' rounded-lg p-3 shadow-xl bg-white'>
              Above all, I am driven by a genuine desire to make a positive
              impact through my creativity. I aspire to inspire others, ignite
              their imaginations, and contribute to a world where stories are
              celebrated and shared.
            </p>
            <p className=' rounded-lg p-3 shadow-xl bg-white'>
              Thank you for taking the time to learn a little about me. I'm
              excited to embark on new collaborative adventures, working
              together to create compelling stories that leave a lasting
              impression. Let's connect, inspire, and make magic happen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
