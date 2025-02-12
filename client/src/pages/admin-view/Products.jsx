import React, { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import CommonForm from "@/components/common/Form";
import { addProductFormElements } from "@/config";
import ImageUpload from "@/components/admin-view/image-upload";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
} from "@/store/admin/products-slice";
import { useToast } from "@/hooks/use-toast";
import AdminProductTile from "@/components/admin-view/product-tile";

const Products = () => {
  const initialFormData = {
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [open, setOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageURL, setUploadedImageURL] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.adminProducts);
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    if (currentEditedId != null) {
      dispatch(
        editProduct({
          id: currentEditedId,
          product: formData,
        })
      ).then((data) => {
        console.log(data);
        if (data?.payload?.success) {
          setOpen(false);
          setFormData(initialFormData);
          setImageFile(null);
          toast({
            title: "Product updated successfully",
          });
        }
      });
      return;
    } else {
      dispatch(
        addProduct({
          ...formData,
          image: uploadedImageURL,
        })
      ).then((data) => {
        console.log(data);
        if (data?.payload?.success) {
          setOpen(false);
          setFormData(initialFormData);
          setImageFile(null);
          toast({
            title: "Product added successfully",
          });
        }
      });
    }
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key] !== "")
      .every((item) => item);
  }

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    toast({
      title: "Product deleted successfully",
    });
  };

  console.log(formData);
  // console.log("products", products)

  return (
    <Fragment>
      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-48 w-48 text-gray-300 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            No Products Yet
          </h2>
          <p className="text-gray-600 mb-6 text-center max-w-md">
            Looks like you haven't added any products to your catalog. Start by
            adding your first product!
          </p>
          <Button
            onClick={() => setOpen(true)}
            className="text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Add First Product
          </Button>
        </div>
      )} 

      {
        products.length!=0 && (
          <div className="flex flex-1 justify-end">
        <Button
          onClick={() => {
            setOpen(true);
            setCurrentEditedId(null);
            setFormData(initialFormData);
            setImageFile(null);
          }}
        >
          Add Product
        </Button>
      </div>
        ) } 

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <AdminProductTile
            setFormData={setFormData}
            key={product?._id}
            product={product}
            open={open}
            setOpen={setOpen}
            setCurrentEditedId={setCurrentEditedId}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent className="overflow-y-auto">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-xl text-center font-extrabold">
                {currentEditedId ? "Edit Product" : "Add a Product"}
              </SheetTitle>
            </SheetHeader>

            <ImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageURL={uploadedImageURL}
              setUploadedImageURL={setUploadedImageURL}
              imageLoading={imageLoading}
              setImageLoading={setImageLoading}
              isEditMode={currentEditedId != null}
            />

            <CommonForm
              formControls={addProductFormElements}
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId ? "Edit Product" : "Add Product"}
              isBtnDisabled={!isFormValid()}
            />
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default Products;
