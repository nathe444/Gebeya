import { ChartNoAxesCombinedIcon, LayoutDashboard, ListOrdered, ShoppingBag } from 'lucide-react'
import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'


const menus = [
  {
    id: 'Dashboard',
    path: '/admin/dashboard',
    icon: <LayoutDashboard size={30} />
  },

  {
    id: 'Products',
    path: '/admin/products',
    icon: <ShoppingBag size={30} />
  },

  {
    id: 'Orders',
    path: '/admin/orders',
    icon: <ListOrdered size={30} />
  },

]

const AdminSideBar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className='flex flex-col h-full'>
            <SheetHeader>
              <SheetTitle className='text-2xl flex gap-2 items-center'>
                <ChartNoAxesCombinedIcon />
                <h1 className='font-extrabold text-2xl lg:text-3xl'>Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-8 mt-12'>
              {
                menus.map((menu) => {
                  return (
                    <div key={menu.id} className='px-10' onClick={()=>{setOpen(false)}}>
                      <Link className='text-black hover:text-green-500' to={menu.path}>
                        <div className='flex gap-2'>
                          {menu.icon}
                          <p className='lg:text-lg text-[17px]'>{menu.id}</p>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </SheetContent>

      </Sheet>
      <div className='px-2 py-3 flex flex-col gap-16 hidden lg:flex w-64'>
        <div className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => navigate('/admin/dashboard')}>
          <ChartNoAxesCombinedIcon />
          <h1 className='font-extrabold text-2xl lg:text-3xl'>Admin Panel</h1>
        </div>

        <div className='flex flex-col gap-8 '>
          {
            menus.map((menu) => {
              return (
                <div key={menu.id} className='px-10'>
                  <Link className='text-black hover:text-green-500' to={menu.path}>
                    <div className='flex gap-2'>
                      {menu.icon}
                      <p className='lg:text-lg text-[17px]'>{menu.id}</p>
                    </div>
                  </Link>

                </div>
              )

            })
          }

        </div>
      </div>
    </Fragment>
  )
}

export default AdminSideBar