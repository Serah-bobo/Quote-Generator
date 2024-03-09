

const DeleteItem = ({note,removeNote}) => {

    const handleRemoveNote=()=>{
        removeNote(note.id)
    }
  return (
   <li className="mb-4 bg-white p-4 rounded-md shadow-md">
    <div className="flex justify-between items-center">
        <div>
            <p className="text-lg font-semibold mb-1">{note.text}</p>
            <p className="text=sm  text-gray-500">{note.id}</p>
        </div>
        <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        onClick={handleRemoveNote}>
            Remove
        </button>
    </div>
   </li>
  )
}

export default DeleteItem
