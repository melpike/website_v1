import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./firebase"

const handleSubmit = (formdata) => {
    const ref = collection(firestore, "form_fills");
    
    let data = {
        formData: formdata
    }

    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}

export default handleSubmit;