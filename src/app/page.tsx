import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>This is the home page</h1>
      <Link href='/dashboard'>Go to the dashboard</Link>
    </>
  )
}
