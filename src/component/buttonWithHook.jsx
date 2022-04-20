import React, { useState} from 'react'

const ButtonWithHook = () => {

  const [key1, setKey1] = useState("this is the default state of a class component")
  const [key2, setKey2] = useState(0)

  return (
    <div>
        <button onClick={() => setKey1("heyehuya")}>
            {key1}
        </button>
        <button onClick={() => setKey2(1)}>
            {key2}
        </button>
    </div>
  )
}

export default ButtonWithHook