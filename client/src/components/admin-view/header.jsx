import { AlignJustify, LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import { logout } from '@/store/auth-slice'
import { useDispatch } from 'react-redux'
import { toast } from '@/hooks/use-toast'

const AdminHeader = ({setOpen}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()).then((data)=>{
      console.log(data)
      if (data?.payload?.success) {
        toast({
          title: "Logged out successfully",
          type: 'success',
        })
      }
    })
  }

  return (
    <header className='flex justiy-between items-center px-6 py-3'>
      <Button className="lg:hidden " onClick={() => setOpen(true)}>
        <AlignJustify/>
        <span className='sr-only'>Toggle Menu</span>
      </Button>


      <div className='flex-1 font-semibold flex justify-end'>
      <Button className="flex gap-2 items-center" onClick={handleLogout}>
        <LogOut/>
        <span>Logout</span>
      </Button>
      </div>

      
    </header>
  )
}

export default AdminHeader