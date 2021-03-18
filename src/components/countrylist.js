import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'at', value: 'at', flag: 'at', text: 'Austria ' , as: 'a', href:'https://www.mjam.net/',target:"_blank"},
  { key: 'my', value: 'my', flag: 'my', text: 'Malaysia ', as: 'a', href:'https://www.foodpanda.my/', target:"_blank" },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh', as: 'a', href:'https://www.foodpanda.com.bd/', target:"_blank" },
  { key: 'hk', value: 'hk', flag: 'hk', text: 'Hongkong', as: 'a', href:'https://www.foodpanda.hk/',target:"_blank"  },
  { key: 'ph', value: 'ph', flag: 'ph', text: 'Philippines ', as: 'a', href:'https://www.foodpanda.ph/ ', target:"_blank" },
  { key: 'th', value: 'th', flag: 'th', text: 'Thailand ', as: 'a', href:'https://www.foodpanda.co.th/ ', target:"_blank"},
 
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
