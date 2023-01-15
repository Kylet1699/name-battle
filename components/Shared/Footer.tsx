import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center p-5 text-center bg-black">
      <h1 className="text-base font-semibold text-gray-800">
        © 2021-2022 All rights reserved | Designed & Built by{' '}
        <span className="cursor-pointer font-semibold hover:text-violet-600">
          Kyle Tseng{' '}
        </span>
      </h1>
    </div>
  )
}

export default Footer;