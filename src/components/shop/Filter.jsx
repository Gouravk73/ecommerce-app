import React from 'react'
import { Dropdown } from 'react-bootstrap'
import {BsFilterLeft} from'react-icons/bs'
const Filter = ({filterChange}) => {
  return ( 
        <div className="col d-flex justify-content-end">
            <Dropdown>
            <Dropdown.Toggle >
              <BsFilterLeft size={'2rem'}/>filter  
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>filterChange('duffle')} >Duffle bag</Dropdown.Item>
              <Dropdown.Item onClick={()=>filterChange('laptop')} >Laptop Bag</Dropdown.Item>
              <Dropdown.Item onClick={()=>filterChange('Backpack')} >BackPack</Dropdown.Item>
              <Dropdown.Item onClick={()=>filterChange('cabinBag')} >cabinBag </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div> 
  )
}

export default Filter