import { ref, watch } from 'vue'
import { db } from '../firebase'
import { useDocument } from 'vuefire'
import { doc, collection, setDoc } from 'firebase/firestore'

const useRecord = <T>({ id, collectionName }: { id: string, collectionName: string }) => {
  const document = doc(collection(db, collectionName), id)
  const form = ref<T>({})
  const record = useDocument<T>(document)
  const update = async (attributes: any) => setDoc(document, attributes)

  // ensures the form stays up to date with the record, but it's mutable
  // this is why we need to copy newValue instead of returing it directly 
  watch(record, (newValue) => { form.value = { ...newValue } })

  return { 
    document, 
    form, 
    record, 
    update,
  }
}

export default useRecord