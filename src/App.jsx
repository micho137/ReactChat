import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <AppRouter />
      </div>
    </AuthProvider>
  );
};
