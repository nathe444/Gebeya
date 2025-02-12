import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"

const AdminProductTile = ({product}) => {
  return (
    <Card className="w-full max-w-sm mx-auto">
        <div>
            <div className="relative">
                <img 
                src={product?.image} 
                alt={product?.title} 
                className="w-full h-[250px] object-cover rounded-t-lg"
                />
            </div>
            <CardContent>
                <h2 className="text-xl font-semibold">{product?.title}</h2>
                <div className="flex gap-2 justify-between items-center">
                    <p className={`${product?.salePrice >0 ? 'line-through' : ''} text-gray-600 text-lg`}>{product?.price}</p>
                    {product?.salePrice >0 ? <p className="text-gray-600 text-lg">${product?.salePrice}</p> : ''}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button>
                    Edit
                </Button>
                <Button>
                    Delete
                </Button>
            </CardFooter>
        </div>
    </Card>
  )
}

export default AdminProductTile