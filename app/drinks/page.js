import DrinksList from '@/components/DrinksList'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchData = async (url) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const DrinksPage = async () => {
  const data = await fetchData(url)

  return (
    <div>
      <h1 className='text-5xl'>Drinks Page</h1>
      <div>
        <DrinksList drinks={data.drinks} />
      </div>
    </div>
  )
}
export default DrinksPage
