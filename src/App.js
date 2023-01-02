import { Button, CssBaseline } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <CssBaseline />
      <Navbar/>
      <Stack direction='row'  gap={1}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </>
  );
}

export default App;
