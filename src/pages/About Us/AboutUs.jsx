import React from 'react'
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';
import { About } from '../../assets'

const AboutUs = () => {
  return (

    <div className='w-full px-4 lg:px-10 2xl:px-32 py-4 grid grid-cols-1 lg:grid-cols-12'>

      {/* left container */}
      <div className='col-span-12 lg:col-span-8 2xl:col-span-9'>
        <h1 className="w-2 font-bold text-3xl text-center md:text-4xl mb-[2vw] text-wrap">
          Resume Builder
        </h1>
        <br />

        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni blanditiis porro repudiandae cumque accusamus eligendi fugit odio, eum quas inventore non in aliquid architecto corporis asperiores recusandae magnam molestias?
          Quae excepturi, iure sit numquam dolore debitis exercitationem, sunt voluptatibus nulla ipsum a voluptas, repellendus amet? Rerum suscipit, hic voluptatibus nostrum iure nisi cum, quibusdam veritatis molestiae ipsam odio quaerat.
          Minus aliquid excepturi atque reprehenderit cum qui voluptate, nostrum molestiae eaque tenetur, voluptatibus ipsam labore culpa quidem molestias! Magni modi aliquam a qui aperiam et eos, doloribus nesciunt itaque ut.
          Fuga distinctio omnis, maxime illum, consequatur totam asperiores id error rem excepturi inventore iure corporis repudiandae maiores commodi veritatis alias saepe esse voluptatem deserunt eligendi necessitatibus eum minus molestiae. Eligendi.
        </p>

        <h2 className='mt-8 font-bold text-xl text-start'>
          Share with Your Friends.
        </h2>


        {/* Share buttons */}
        <div className='mt-8 flex justify-start'>
          <div style={{ marginRight: "2vh" }}>

            <FacebookShareButton
              url={'https://www.facebook.com/'}
              quote={'Soical media'}
              hashtag={'#'}
            >
              <FacebookIcon className='buttonIcons' size={40} round={true} />
            </FacebookShareButton>
          </div>

          <div style={{ marginRight: "2vh" }}>

            <LinkedinShareButton
              url={'https://in.linkedin.com/'}
              quote={'Building a strong LinkedIn profile can boost your career'}
              hashtag={'#'}
            >
              <LinkedinIcon className='buttonIcons' size={40} round={true} />
            </LinkedinShareButton>
          </div>

          <div style={{ marginRight: "2vh" }}>

            <WhatsappShareButton
              url={'https://web.whatsapp.com/'}
              quote={'connect'}
              hashtag={'#'}
            >
              <WhatsappIcon className='buttonIcons' size={40} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>

      {/* right container */}
      <div className='col-span-12 lg:col-span-4 2xl:col-span-3' >
        <img src={About} className='w-full h-auto object-contain bg-slate-300' alt='#' />
      </div>
    </div>

  )
}

export default AboutUs