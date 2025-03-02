import { Home } from "@/pages/home";
import { Layout } from "@/pages/Layout";
import { Route } from "react-router-dom";

export const useRoutes = () => {
  return (
    <>
      <Route
        index
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </>
  );
};
