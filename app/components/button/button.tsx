import { PropsWithChildren } from 'react'

type PropsButton = {
  handleClick: Function
}

export const Button = ({ handleClick }: PropsWithChildren<PropsButton>) => {
  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleClick()}
    >
      Button
    </button>
  )
}
