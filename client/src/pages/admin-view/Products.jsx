import React, { Fragment ,useState} from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetHeader, SheetContent, SheetTitle } from '@/components/ui/sheet'
import CommonForm from '@/components/common/Form';
import { addProductFormElements } from '@/config';
import ImageUpload from '@/components/admin-view/image-upload';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchAllProducts } from '@/store/admin/products-slice';
import { useToast } from '@/hooks/use-toast';
import AdminProductTile from '@/components/admin-view/product-tile';

const Products = () => {

  const [open, setOpen] = useState(false);

 const initialFormData = {
  image: null,
  title: '',
  description: '',
  category:'',
  brand:'',
  price:'',
  salePrice: '',
  totalStock: '',
 } 

  const [formData , setFormData] = useState(initialFormData);

  const [imageFile , setImageFile] = useState(null);
  const [uploadedImageURL , setUploadedImageURL] = useState(null);
  const [imageLoading , setImageLoading] = useState(false);
  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.adminProducts)
  const {toast} = useToast();

  function onSubmit(event){
    event.preventDefault();
    dispatch(addProduct({
      ...formData,
      image : uploadedImageURL,
    }
    )).then((data)=>{
      console.log(data)
      if(data?.payload?.success){
        setOpen(false)
        setFormData(initialFormData)
        setImageFile(null)
        toast({
          title: 'Product added successfully',
        })
      }
    });
  }

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[dispatch])

  // console.log(formData)
  console.log("products", products)

  return (
    <Fragment>
      <div className='flex flex-1 justify-end'> 
        <Button onClick={() => setOpen(true)}>
          Add Product
        </Button>
      </div>

      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {
          products.map((product)=>(
            <AdminProductTile key={product?._id} product={product} />
          ))
        }
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