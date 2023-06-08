import { ThemeProvider, CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <CssBaseline />

      <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
