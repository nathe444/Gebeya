import React, { Fragment ,useState} from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetHeader, SheetContent, SheetTitle } from '@/components/ui/sheet'
import CommonForm from '@/components/common/Form';
import { addProductFormElements } from '@/config';
import ImageUpload from '@/components/admin-view/image-upload';

const Products = () => {

  const [open, setOpen] = useState(false);

  const [formData , setFormData] = useState({});

  const [imageFile , setImageFile] = useState(null);
  const [uploadedImageURL , setUploadedImageURL] = useState(null);
  const [imageLoading , setImageLoading] = useState(false)

  function onSubmit(event){
    event.preventDefault();
  }

  console.log(formData)

  return (
    <Fragment>
      <div className='flex flex-1 justify-end '> 
        <Button onClick={() => setOpen(true)}>
          Add Product
        </Button>
      </div>

      <div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent className='overflow-y-auto'>
            <SheetHeader className='mb-4'>
              <SheetTitle className='text-xl text-center font-extrabold'>
                Add a Product
              </SheetTitle>
            </SheetHeader>

            <ImageUpload 
              imageFile={imageFile} 
              setImageFile={setImageFile} 
              uploadedImageURL={uploadedImageURL} 
              setUploadedImageURL={setUploadedImageURL}
              imageLoading = {imageLoading}
              setImageLoading={setImageLoading} />

            <CommonForm 
              formControls = {addProductFormElements}
              onSubmit = {onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={'Add Product'}
            />
            
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  )
}

export default Products