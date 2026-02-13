import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
        
    })

    let handleInputChange = (event) => {
        
    }
    return (<div><h4>Give a comment!</h4>
        <form>
            <input placeholder="username" type="text" value={formData.username}/>
            <br></br> <br></br>
         <textarea value={formData.remarks} placeholder="Add few remarks">Remarks</textarea>
 <br></br> <br></br>
            <input placeholder="rating" type="number" min={1} max={5} value={formData.rating}/>
            <br></br> <br></br>
            <button>Add Comment</button>

        </form></div>)
}