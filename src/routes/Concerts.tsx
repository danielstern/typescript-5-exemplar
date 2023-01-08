import { useEffect, useState } from "react"
import { getConcerts } from "../services/api-service"
import { Navigation } from '../components/Navigation'

type Concert = {
  id : string
  name : string,
  date : Date | string,
}
export const Concerts = () => {

  const [concerts, setConcerts] = useState<Concert[]>([])

  useEffect(() => {

    const fetchData = async () => {
      const data : Concert[] = await getConcerts()
      setConcerts(data)
    }

    fetchData()

  }, [])

  return (
    <div>
      <Navigation />
      {concerts.map(({name,date,id} : Concert) => (
        <article key={id}>
          {name} - {new Date(date).toLocaleDateString()}
        </article>
      ))}
    </div>
  )
}