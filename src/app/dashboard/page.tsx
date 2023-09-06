const Dashboard = async () => {
  const endpoint =
    'https://world-population-api.infinityworks.academy/countries'
  const response = await fetch(endpoint, {
    cache: 'no-cache'
  })

  const data: Array<any> = await response.json()

  return <h2>There are {data.length} countries in the database</h2>
}

export default Dashboard
