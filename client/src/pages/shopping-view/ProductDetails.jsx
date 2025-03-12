import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-select";
import { StarIcon } from "lucide-react";

const ProductDetails = ({ open, setOpen, productDetails }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="grid grid-cols-2 gap-8 sm:p-12 max-w-[90vw] lg:max-w-[70vw]">
        <div className="relative  max-h-[400px] flex items-center justify-center">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            className="max-w-full max-h-full object-cover rounded-lg"
            width={600}
            height={200}
          />
        </div>
        <div className=" gap-6">
          <div>
            <h1 className="text-3xl font-bold">{productDetails?.title}</h1>
            <p className="text-muted-foreground text-2xl my-5">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`${
                productDetails?.salePrice > 0 ? "line-through" : ""
              } text-gray-800 text-2xl font-bold`}
            >
              ${productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 ? (
              <p className=" text-2xl font-bold">
                ${productDetails?.salePrice}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center gap-1 mt-2">
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <span className="text-muted-foreground">(4.5)</span>
          </div>
          <div className="my-5">
            <Button className="w-full">Add to cart</Button>
          </div>
          <Separator />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <div className="grid gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10 border flex justify-center items-center">
                  <AvatarFallback className="font-bold">NM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Jhonny</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>
                  <p className="text-muted-foreground">THis is Awesome</p>
                </div>
              </div>
            </div>
            <div className="flex my-6 gap-2">
                <input placeholder="Write a review" className="w-full ml-2 pl-2 rounded-lg bg-background" />
                <Button className="w-full">Add Review</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
