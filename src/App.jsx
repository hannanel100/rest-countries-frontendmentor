import "./App.css";
import { Header } from "./Components/Header/Header";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "./Components/Main/Main";
import { ThemeProvider, ThemeContext } from "./Context/theme";
import { FilterContainer } from "./Components/FilterContainer/FilterContainer";
import { Router } from "./Routes/Routes";
function App() {
  const queryClient = new QueryClient();
  // create a react-query to fetch the data from the API https://restcountries.com/v3.1/all
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {/* a header with a title on the left and a dark/light mode toggle on the right */}
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
