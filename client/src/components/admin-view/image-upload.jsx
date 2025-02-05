import { UploadCloudIcon, XIcon } from "lucide-react"
import { useRef } from "react"

function ImageUpload({ imageFile, setImageFile, uploadedImageURL, setUploadedImageURL }) {
    const inputRef = useRef(null);



    const handleImageFileChange = (event) => {
        event.preventDefault();
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {setImageFile(selectedFile);}
    }

    const handleImageFileRemove = ()=>{
        setImageFile(null);
    }

    const handleDragOver = (event)=>{
        event.preventDefault();
    }

    const handleDrop = (event)=>{
        event.preventDefault();
        const selectedFile = event.dataTransfer.files?.[0];
        if (selectedFile) {setImageFile(selectedFile);}
    }


    return (
        <div>
            <input type="file" id="image-upload" hidden ref={inputRef} onChange={handleImageFileChange}/>
            <h1 className='text-lg  font-semibold'>Upload an Image</h1>

            {
                imageFile ? (
                    <div className='flex items-center justify-between gap-4 my-4 p-4'>
                        <p>{imageFile.name}</p>
                        <XIcon onClick={handleImageFileRemove} className="cursor-pointer"/>
                    </div>
                ) : (
                    <div className="border border-dashed border-black/50 rounded-lg p-4 py-6 my-4" onDragOver={handleDragOver} onDrop={handleDrop}>
                        <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-2">
                            <UploadCloudIcon />
                            <p className='text-sm'>Drag and drop or click to upload image</p>
                        </label>
                    </div>
                )
            }
        </div>

    )
}

export default ImageUpload