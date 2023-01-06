import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const closeSidebar = () => setIsSidebarOpen(false);
  const closeSubmenu = () => setIsSubmenuOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        closeSidebar,
        closeSubmenu,
        isSidebarOpen,
        isSubmenuOpen,
        location,
        openSidebar,
        openSubmenu,
        page,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext);
