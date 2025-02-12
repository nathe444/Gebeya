import { House, LogOut, MartiniIcon, Menu, ShoppingBag, ShoppingCart, Store, StoreIcon, User2 } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button  } from '../ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetTrigger } from '../ui/sheet'
import { useDispatch, useSelector } from 'react-redux'
import {shoppingViewHeaderMenuItems} from '../../config/index'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { logout } from '@/store/auth-slice'

function MenuItems(){
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Link
          className="text-sm font-medium cursor-pointer text-black hover:text-green-500"
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  )
}

function HeaderRightContent() {
  const { user} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout(){
    dispatch(logout())
  }

  return (
    <div className='flex gap-4 lg:items-center lg:flex-row' >
     <Button variant = 'outline'>
     <ShoppingCart className='h-4 w-4 lg:h-6 lg:w-6'/>
     <span className='sr-only'>Cart</span>
     </Button>

     <DropdownMenu>
      <DropdownMenuTrigger asChild className='bg-green-600'>
        <Avatar>
          <AvatarFallback className='bg-bue-300 text-white font-bold'>
            {user?.userName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="w-56">
        <DropdownMenuLabel className='font-bold'>Logged in as {user?.userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>navigate('/shop/account')}>
          <User2 className='mr-2 h-4 w-4'/>
          <span >Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className='mr-2 h-4 w-4'/>
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
      
     </DropdownMenu>
      
    </div>
  )
}

const ShoppingHeader = () => {
  const {isAuthenticated } = useSelector((state)=>state.auth)
  
  return (
    <header className='sticky top-0 w-full border-b bg-background'>
      <div className='flex h-16 items-center justify-between px-4 md:px-6'>
        <Link to='/shop/home' className='flex items-center justify-center gap-2 text-green-400 hover:text-green-500'>
         <ShoppingBag size={30} />
         <h1 className='font-extrabold text-2xl lg:text-3xl'>Gebeya</h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild >
            <Button variant="outline" size = "icon" className='lg:hidden'>  
              <Menu className='h-6 w-6'/>
              <span className='sr-only'>Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className="w-full max-w-xs">
            <MenuItems />
          </SheetContent>
        </Sheet>

        <div className='hidden lg:block'> 
          <MenuItems />
        </div>
        {
          isAuthenticated ? <div> <HeaderRightContent /></div> : null
        }

      </div>
    </header>
  )
}

export default ShoppingHeader