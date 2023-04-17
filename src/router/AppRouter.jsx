import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { ChatRoom } from "../pages/ChatRoom";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
