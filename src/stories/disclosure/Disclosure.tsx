import React, { useState } from "react";

export type DisclosureProps = {
  open: boolean
}

export const Disclosure: React.FC<DisclosureProps> = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open)
  return (
    <>
      <div className="disclosure">
        Helllllo
        <div onClick={()=>{setIsOpen(!isOpen)}}>
          Icon
        </div>
      </div>
      {isOpen &&
        <span>
          Me iz here.
        </span>
      }
    </>
  )
}

export default Disclosure
