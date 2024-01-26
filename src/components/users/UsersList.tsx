import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { type User } from '../../types'
import { ImageColumn } from './ImageColumn'
import { Button } from 'primereact/button'

interface Props {
  users: User[]
  isStriped: boolean
  handleDelete: (user: User) => void
}

const UsersList = ({ users, isStriped, handleDelete }: Props) => {
  return (
    <>
      <DataTable value={users} stripedRows={isStriped} tableStyle={{ minWidth: '70vw' }} >
        <Column align={'center'} body={rowData => <ImageColumn rowData={rowData} />} header=""></Column>
        <Column alignHeader={'center'} align={'center'} headerStyle={{ textAlign: 'center', justifyContent: 'center' }} field='name.first' header="Nombre"></Column>
        <Column alignHeader={'center'} align={'center'} field='name.last' header="Apellido"></Column>
        <Column alignHeader={'center'} align={'center'} field='location.country' header="País"></Column>
        <Column alignHeader={'center'} align={'center'} body={rowData => <Button onClick={() => { handleDelete(rowData) }} label='Eliminar' severity='danger' />} header="Acciones"></Column>
      </DataTable>
    </>
  )
}

export default UsersList
