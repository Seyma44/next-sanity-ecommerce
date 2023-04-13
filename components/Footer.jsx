import React from 'react'
import Link from 'next/link'
import { AiFillInstagram, 
         AiFillLinkedin, 
         AiOutlineGithub, 
         AiOutlineTwitter
 } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 ® All rights reserverd</p>
      <p className="icons">
        <Link href='#'>
          <AiFillInstagram />
        </Link>
        <Link href='#'>
          <AiFillLinkedin />
        </Link>
        <Link href='#'>
          <AiOutlineTwitter />
        </Link>
        <Link href='https://github.com/Seyma44'>
          <AiOutlineGithub/>
        </Link>
      </p>
    </div>
  )
}

export default Footer