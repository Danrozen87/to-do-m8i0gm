import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            to-do-m8i0gm
          </CardTitle>
          <CardDescription>
            Built with React, TypeScript, Tailwind CSS, and Radix UI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <Button onClick={() => setCount((count) => count + 1)} size="lg">
              Count is {count}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Edit <code className="bg-muted px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Your modern React app is live! Start building something amazing! 🚀
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default App