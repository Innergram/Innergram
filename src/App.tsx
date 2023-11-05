import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <h1 className="text-xl text-red-500 font-bold">Vite + React</h1>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}

export default App;
