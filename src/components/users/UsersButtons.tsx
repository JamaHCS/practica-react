import { Button } from 'primereact/button'
import { type Dispatch, type SetStateAction } from 'react'

interface Props {
  setIsStriped: Dispatch<SetStateAction<boolean>>
  setIsSorted: Dispatch<SetStateAction<boolean>>
  handleReset: () => void
}

export const UsersButtons = ({ setIsStriped, setIsSorted, handleReset }: Props) => {
  return (
    <span className="p-buttonset">
      <Button label="Colorea filas" onClick={() => { setIsStriped(prevState => !prevState) }}/>
      <Button label="Ordenas por país" onClick={() => { setIsSorted(prevState => !prevState) }}/>
      <Button label="Restaurar estado inical" onClick={() => { handleReset() }}/>
    </span>
  )
}
