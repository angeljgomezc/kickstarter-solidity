import React from 'react'

import './RequestTable.css'

const RequestTable = ({index, description, recipient, value, approvals, complete}) => {

  return (
    <div>
      <tr>
      <td>{index}</td>
      <td>{description}</td>
      <td>{recipient}</td>
      <td>{value} ETH</td>
      <td>{approvals}</td>
      <td>{complete === false ? 'No' : 'Yes'}</td>
      </tr>
    </div>
  )
}

export default RequestTable
