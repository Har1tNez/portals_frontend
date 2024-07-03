/**
 * v0 by Vercel.
 * @see https://v0.dev/t/a9QWOQQZq28
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Messages = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between w-full p-4 border-b lg:p-6">
        <div className="space-y-1">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Chatting with the support team</p>
        </div>
        <Button size="sm" variant="outline">
          Contact
        </Button>
      </div>
      <div className="flex-1 flex flex-col justify-end overflow-hidden">
        <div className="flex-1 p-4 space-y-4 overflow-y-auto sm:p-6">
          <div className="flex flex-col items-end space-y-1">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
                Hi there! How can I help you today?
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2:14 PM</div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Support</div>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
                Hello! I'm having trouble with my account.
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2:15 PM</div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">You</div>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
                I'm sorry to hear that. Can you please provide me with your username?
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2:16 PM</div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Support</div>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
                My username is123. Can you help me reset my password?
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2:17 PM</div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">You</div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex items-center h-12 px-4 gap-4 md:px-6">
            <Input className="flex-1 min-w-0 h-10 border-0 shadow-none" placeholder="Type a message" />
            <Button className="h-10">Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages;