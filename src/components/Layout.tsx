import { Navigation } from "./Navigation";
import { ReactNode } from 'react';

type LayoutProps = {
  children : ReactNode,
  handleLogin? : ()=>Promise<void>,
  isSignedIn?: boolean
}

export const Layout = ({
  children,
  handleLogin,
  isSignedIn
} : LayoutProps) => (
  <>
    <Navigation handleLogin={handleLogin} isSignedIn={isSignedIn}/>
    {children}
    <footer>©2023,2024 Code Whisperer</footer>
  </>
)