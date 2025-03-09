import { useEffect } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function ShoppingProductTile({ product }) {
  return (
    <Card>
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-dull h-[300px] object-cover rounded-t-lg"
          />
          {product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : (
            ""
          )}
          <div>
            <CardContent className="px-8 py-4">
              <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {product?.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {product?.brand}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={`${
                    product?.salePrice > 0 ? "line-through" : ""
                  } text-lg font-semibold text-primary`}
                >
                  {product?.price}
                </span>
                {product?.salePrice > 0 ? (
                  <span className="text-lg font-semibold text-primary">
                    ${product?.salePrice}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to cart</Button>
            </CardFooter>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ShoppingProductTile;
