import React,{useState, createContext} from 'react'


export const SiderbarContext = createContext()

const SidebarProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = ()=>{
    setIsOpen(false)
  }

  return (
    <SiderbarContext.Provider 
      value={{isOpen, setIsOpen, handleClose}}
    >{children}</SiderbarContext.Provider>
  )
}

export default SidebarProvider