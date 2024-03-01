import React from 'react'

const Button = (props) => {
  return (
    <div className='flex'>
      <button onClick={props.action}
      className="mt-6 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">

      </button>
    </div>
  )
}

export default Button
