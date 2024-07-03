import './App.css'
import * as z from 'zod';

import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import SideNav from './components/side-nav';
import Home from './components/home';
import AccountInfo from './components/account-info';
import { ThemeProvider } from './components/theme-provider';
import Messages from './components/messages';

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

function App() {
  
  // const tasks = await getTasks()
  return (
    <>
      {/* <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex"> */}
        {/* <FancyMultiSelect/> */}
        {/* <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div> */}
        {/* <DataTable data={jsonData} columns={columns} /> */}
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path='/' element={<SideNav />}>
                <Route
                  path='/'
                  element={<Home/>}
                />
                <Route
                  path='/account-info'
                  element={<AccountInfo/>}
                />
                <Route
                  path='/messages'
                  element={<Messages/>}
                />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      {/* </div> */}
    </>
  )
}

export default App
