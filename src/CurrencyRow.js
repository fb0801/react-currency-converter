import React from 'react'

export default function CurrencyRow(props) {
  const {
    CurrencyOptions
  } = props
  return (
    <div>
     <input type='number' className='input'/>
     <select>
      {CurrencyOptions.map(option => (
                <option value={option}>{option}</option>

      ))}
        </select>
    </div>
  )
}
