import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>AboutPage</h1>
      <Link href='/'>go Home</Link>

      <button className='btn btn-primary btn-sm rounded-md'>Hello world</button>
    </div>
  )
}
export default AboutPage
