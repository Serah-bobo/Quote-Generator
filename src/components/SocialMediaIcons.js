//importing twitter facebook and instagram icons from react icons
import {FaTwitter, FaFacebook,FaInstagram} from 'react-icons/fa'

const SocialMediaIcons = ({quote}) => {
  return (
    <div className='flex justify-center mt-4'>
        <a
        href={`https://twitter.com/intent/tweet?text=${quote}`}//url for twitter
        target='_blank'//tells browser to open link in new tab
        rel='noopener noreferrer'//tells browser to open link in new tab without giving the new tab access to window.opener for security
        className='mr-4 text-blue-500'>
        <FaTwitter size={24}/>
        </a>
      {/*facebook icon*/}
      <a
        href={`https://ww.facebook.com/sharer/sharer.php?u=${quote}`}
        target='_blank'//tells browser to open link in new tab
        rel='noopener noreferrer'//tells browser to open link in new tab without giving the new tab access to window.opener for security
        className='mr-4 text-blue-700'>
    <FaFacebook size={24}/>
      </a>
       {/*instagram icon*/}
       <a 
       href={`https://www.instagram.com/?url=${quote}`}
       target='_blank'//tells browser to open link in new tab
       rel='noopener noreferrer'//tells browser to open link in new tab without giving the new tab access to window.opener for security
       className='text-pink-600'>
        <FaInstagram size={24}/>
       </a>
    </div>
  )
}

export default SocialMediaIcons
