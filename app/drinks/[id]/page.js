import Image from 'next/image'
import Link from 'next/link'
import drinkImg from './drink.jpg'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`)
  return res.json()
}

const SingleDrinkPage = async ({ params: { id } }) => {
  const data = await getSingleDrink(id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb
  console.log(data)
  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg' alt='drink' /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 ronded-lg'
        priority
        alt='drink'
      />
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  )
}
export default SingleDrinkPage
