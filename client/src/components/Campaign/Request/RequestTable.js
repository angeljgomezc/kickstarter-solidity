import React, {useState, useEffect} from 'react'

//ether
import campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'

//CSS and UI
import Button from '../../UI/Button'
import Spinner from '../../UI/Spinner'

const RequestTable = ({index, request}) => {

  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [recipient, setRecipient] = useState();
  const [complete, setComplete] = useState();
  const [approvals, setApprovals] = useState();

  useEffect(() => {
    setDescription(request.description)
    setValue(web3.utils.fromWei(request.value, 'ether'))
    setRecipient(request.recipient)
    setComplete(request.complete)
    setApprovals(request.approvalCount)
  })

  return (
    <>
      <tr style={request.complete ? {backgroundColor:'#7E7E7E'} : null }>
        <td>{index}</td>
        <td>{description}</td>
        <td style={{  wordBreak: 'break-all'
}}>{recipient}</td>
        <td>{value} ETH</td>
        <td>{approvals}</td>
        <td>{complete === false ? 'No' : 'Yes'}</td>
      </tr>
    </>
  )
}

export default RequestTable
