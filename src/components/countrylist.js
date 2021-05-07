import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'at', value: 'at', flag: 'at', text: 'Austria ' , as: 'a', href:'https://www.mjam.net/restaurant/wien/jacksons-fried-chicken-leopoldstadt/',target:"_blank"},
  { key: 'cz', value: 'cz', flag: 'cz', text: 'Czech Republic  ' , as: 'a', href:'https://www.damejidlo.cz/en/restaurant/new/bcre/jacksons-kolin?r=1',target:"_blank"},
  { key: 'hu', value: 'hu', flag: 'hu', text: 'Hungary' , as: 'a', href:'https://www.netpincer.hu/en/restaurant/new/gtab/jacksons-fried-chicken-robert-k-krt?r=1',target:"_blank"},
  { key: 'no', value: 'no', flag: 'no', text: 'Norway' , as: 'a', href:'https://www.foodora.no/en/restaurant/new/xejt/jackson-s-fried-chicken-trondheim?r=1',target:"_blank"},
  { key: 'my', value: 'my', flag: 'my', text: 'Malaysia ', as: 'a', href:'https://www.foodpanda.my/restaurant/new/x2ik/jacksons-fried-chicken-ahp', target:"_blank" },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh', as: 'a', href:'https://www.foodpanda.com.bd/restaurant/new/q6zd/jacksons-fried-chicken-gulshan', target:"_blank" },
  { key: 'hk', value: 'hk', flag: 'hk', text: 'Hongkong', as: 'a', href:'https://www.foodpanda.hk/restaurant/new/r3fq/jacksons-fried-chicken-aberdeen',target:"_blank"  },
  { key: 'ph', value: 'ph', flag: 'ph', text: 'Philippines ', as: 'a', href:'https://www.foodpanda.ph/restaurant/new/g2br/jacksons-fried-chicken-poblacion', target:"_blank" },
  { key: 'th', value: 'th', flag: 'th', text: 'Thailand ', as: 'a', href:'https://www.foodpanda.co.th/restaurant/new/tojm/jacksons-fried-chicken-sukhumvit-11', target:"_blank"},
  { key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore ', as: 'a', href:'https://www.foodpanda.sg/restaurant/new/qyrb/jacksons-fried-chicken-rochor', target:"_blank"},
  { key: 'pk', value: 'pk', flag: 'pk', text: 'Pakistan ', as: 'a', href:'https://www.foodpanda.pk/restaurant/new/eo8l/jacksons-fried-chicken-dha', target:"_blank"},
 
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
