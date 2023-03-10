import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openSidebar = () => setIsSidebarOpen(true);
  
  const closeSidebar = () => setIsSidebarOpen(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        closeModal,
        closeSidebar,
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext( AppContext );
