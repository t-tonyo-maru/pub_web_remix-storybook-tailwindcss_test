import type { MetaFunction } from '@remix-run/node'
import { Button } from '~/components/button/button'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        handleClick={() => {
          console.log('button')
        }}
      />
    </div>
  )
}
