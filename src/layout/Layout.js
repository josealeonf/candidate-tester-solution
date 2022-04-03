import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';


const Layout = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <Box
        className='wrapper'
      >
        <Header />
        <main className='page-body'>{props.children}</main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout;