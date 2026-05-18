import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} context={{ queryClient }} />,
);
