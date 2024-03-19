import './App.css'
import * as z from 'zod';
import jsonData from './tasks.json';
import notesData from './notes.json';
import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { columns as NoteCols } from './components/notes-columns';
import { FancyMultiSelect } from './components/fancy-multi-select';


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
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <FancyMultiSelect/>
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* <UserNav /> */}
          </div>
        </div>
        <DataTable data={jsonData} columns={columns} />
      </div>
    </>
  )
}

export default App
