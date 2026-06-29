import { Toaster } from "@/components/ui/toaster";  //  Shows popup notifications
// ✔ Resume downloaded successfully
// Instead of using browser alerts: alert("Success");  React applications use beautiful toast notifications.

import { TooltipProvider } from "@/components/ui/tooltip";   //  Suppose you hover over GitHub icon.

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";   //  This handles navigation.

import { Analytics } from "@vercel/analytics/react";  //  This is Vercel Analytics
//  It tells you things like: Number of visitors, Popular pages, Countries of visitors, Traffic trends

import HomePage from "./pages/HomePage";

import NotFound from "./pages/NotFound";   //  If user visits: yourwebsite.com/abcd
// they see: 404 page not found instead of a blank page.

const queryClient = new QueryClient();

const App = () =>   //  Creates the root React component. Everything inside this becomes your application
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>  // This handles navigation. It tells React which page to show based on the URL. Container holding all routes
          <Route path="/" element={<HomePage/>}/>   // Means if user visits: yourwebsite.com/  they see the HomePage component      
          <Route path="*" element={<NotFound/>}/>   // Means if user visits: yourwebsite.com/abcd  they see the NotFound component
        </Routes>
      </BrowserRouter>
      <Analytics />  // Starts Vercel Analytics. Whenever someone visits, data is collected automatically
    </TooltipProvider>
  </QueryClientProvider>;

export default App;