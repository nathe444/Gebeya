import { AlignJustify, LogOut } from 'lucide-react'
import { Button } from '../ui/button'

const AdminHeader = ({setOpen}) => {
  return (
    <header className='flex justiy-between items-center px-6 py-3'>
      <Button className="lg:hidden " onClick={() => setOpen(true)}>
        <AlignJustify/>
        <span className='sr-only'>Toggle Menu</span>
      </Button>


      <div className='flex-1 font-semibold flex justify-end'>
      <Button className="flex gap-2 items-center">
        <LogOut/>
        <span>Logout</span>
      </Button>
      </div>

      
    </header>
  )
}

export default AdminHeader