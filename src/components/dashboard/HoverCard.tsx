import React from 'react'

const HoverCard = () => {
  return (
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 cursor-default">
        <li>
            <h2 className='hoverDropHead cursor-default'>Online store sessions</h2>
            <p className='hoverDropPara cursor-default'>Your online store&#39;s traffic volume, shown in sessions.</p>
        </li>
    </ul>
  )
}

export default HoverCard