import {BrowserRouter, Routes, Route} from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import {Box, Container, Typography} from "@mui/material";

function App() {
  return (
    <BrowserRouter>
        <Container maxWidth='sm'>
            <Box textAlign='center' mt={5}>
                <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
                <Routes>
                    <Route path='/' exact element={<Settings />}></Route>
                    <Route path='/questions' element={<Questions />}></Route>
                    <Route path='/score' element={<FinalScreen />}></Route>
                </Routes>
            </Box>
        </Container>
    </BrowserRouter>
  );
}

export default App;
