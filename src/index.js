import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from './router/AppRouter'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
     <AppRouter/>
    </StrictMode>
  );
