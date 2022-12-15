import useRecord from './useRecord'
import { iRoom } from '../types'

const useRoom = ({ id }: { id: string }) => {
  return useRecord<iRoom>({ id, collectionName: 'rooms' })
}

export default useRoom