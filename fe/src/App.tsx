import "./App.css";
import Hero from "./components/hero";
import Layout from "./components/layout";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Hero/>
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default App;
