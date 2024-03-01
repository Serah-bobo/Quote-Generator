import React from 'react'

const QuoteDisplay = ({quote}) => {
  return (
    <div className='bg-gray-100 p-6 rounded-lg'>
      <p className='text-lg'>{quote}</p>
    </div>
  )
}

export default QuoteDisplay
