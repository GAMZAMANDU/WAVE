'use client';

import React from 'react';
import { useRouter } from 'next/router';

const navigationName = {
  '/': 'Home',
}

const NavigationButton = ({ text = '/' }: { text: '/'}) => {
  const router = useRouter()
  const handleClick = () => {router.push(`/${navigationName[text]}`)}

  return (
    <button onClick={handleClick}>{text}</button>  
  )
}

export default NavigationButton
