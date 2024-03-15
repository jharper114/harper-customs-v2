import { AppBar, Box, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import * as Styles from './Navbar.style'
import { useAppContext } from '@/context';



const Navbar = () => {
  const { activePage, setActivePage } = useAppContext();
  // const [activePage, setActivePage] = useState("Home");
  console.log(activePage);

  return (
    <AppBar position="static" sx={Styles.navbarContainer}>
      <Link sx={Styles.logoLink} href="/" onClick={() => setActivePage("Home")}>
        <Box sx={Styles.logoBox}>
          <Typography sx={(activePage === 'Home' ? Styles.logoTextHome : Styles.logoText)} variant='h5'>HARPER CUSTOMS</Typography>
        </Box>
      </Link>
      <Box sx={Styles.navButtonsContainer}>
        <Link sx={Styles.link} href="/signs" onClick={() => setActivePage("Custom Signs")}>
          <Box sx={[Styles.linkContainerBorder,
          (activePage === 'Custom Signs' ? Styles.activeNavButton : Styles.inactiveNavButton)]}>
            <Box sx={Styles.linkContainer}>
              <Typography style={Styles.linkText}>CUSTOM SIGNS</Typography>
            </Box>
          </Box>
        </Link>
        <Link sx={Styles.link} href="/slabs" onClick={() => setActivePage("Live Edge Wood")}>
          <Box sx={[Styles.linkContainerBorder,
          (activePage === 'Live Edge Wood' ? Styles.activeNavButton : Styles.inactiveNavButton)]}>
            <Box sx={Styles.linkContainer}>
              <Typography sx={Styles.linkText}>LIVE EDGE WOOD</Typography>
            </Box>
          </Box>
        </Link>
        <Link sx={Styles.link} href="/equine" onClick={() => setActivePage("Equine")}>
          <Box sx={[Styles.linkContainerBorder,
          (activePage === 'Equine' ? Styles.activeNavButton : Styles.inactiveNavButton)]}>
            <Box sx={Styles.linkContainer}>
              <Typography sx={Styles.linkText}>EQUINE</Typography>
            </Box>
          </Box>
        </Link>
      </Box >
    </AppBar >
  )
}

export default Navbar
