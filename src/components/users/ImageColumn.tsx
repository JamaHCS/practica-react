import { type User } from '../../types'

interface Props {
  rowData: User
}

export const ImageColumn = ({ rowData }: Props) => {
  console.log(rowData)

  return (
    <img src={rowData.picture.thumbnail} alt={rowData.name.first + ' ' + rowData.name.last} style={{ height: '40px' }}></img>
  )
}
