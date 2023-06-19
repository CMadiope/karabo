import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <Head>
        <title>Karabo Mdluli | Contact</title>
        <meta
          name='description'
          content='Phone:+27 65 528 6223 Get a Quote Facebook Twitter Youtube. Your premier destination for stunning personal, wedding videography and photography, photographer and art director. Based in Johannesburg South Africa. Film photography. portrait. family portrait. Email:karabo.mdluli@gmail.com. 135 Daisy Street, Sandton'
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
      <h1 className='py-4 text-4xl font-bold text-center text-[#111]'>
        Contact
      </h1>
      <form
        action='https://getform.io/f/83352619-7e83-48fb-a096-de3a8d35ad0a'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className=' uppercase text-sm py-2'>Phone</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone'
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className=' uppercase text-sm py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className=' uppercase text-sm py-2'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className=' uppercase text-sm py-2'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='10'
            name='message'
          ></textarea>
        </div>
        <button className='bg-[#111] text-gray-100 mt-4 w-full p-4 rounded-lg hover:opacity-80'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
