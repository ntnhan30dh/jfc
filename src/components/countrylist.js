import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'at', value: 'at', flag: 'at', text: 'Austria ' , as: 'a', href:'https://www.mjam.net/'},
  { key: 'my', value: 'my', flag: 'my', text: 'Malaysia ', as: 'a', href:'https://www.foodpanda.my/ ' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh', as: 'a', href:'https://www.foodpanda.com.bd/' },
  { key: 'hk', value: 'hk', flag: 'hk', text: 'Hongkong', as: 'a', href:'https://www.foodpanda.hk/' },
  { key: 'ph', value: 'ph', flag: 'ph', text: 'Philippines ', as: 'a', href:'https://www.foodpanda.ph/ ' },
  { key: 'th', value: 'th', flag: 'th', text: 'Thailand ', as: 'a', href:'https://www.foodpanda.co.th/ '},
 
]


 


const CountryList = () => {
  const action = (e, { value }) =>{
    console.log ("value", value)
  }
  return (
      <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
    onChange = {action}
  />
  )
}

export default CountryList
