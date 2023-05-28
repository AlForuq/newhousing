import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import RootContext from "./context";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootContext>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </RootContext>
    </QueryClientProvider>
  </React.StrictMode>
);
