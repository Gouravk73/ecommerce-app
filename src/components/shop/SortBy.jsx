import React from 'react'
import { Dropdown } from 'react-bootstrap'
import{BsSortDownAlt} from 'react-icons/bs'

const SortBy = ({sortChange}) => {
  return (
            <div className="col ">
            <Dropdown>
            <Dropdown.Toggle >
              <BsSortDownAlt size={'2rem'}/>Sort  
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>sortChange('low')} >Price Low To High </Dropdown.Item>
              <Dropdown.Item onClick={()=>sortChange('high')} >Price High To Low </Dropdown.Item>
              <Dropdown.Item onClick={()=>sortChange('rating')} >Rating</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div>
  )
}

export default SortBy