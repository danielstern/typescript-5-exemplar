import { useEffect, useState } from "react"
import { getConcerts } from "../services/api-service"

type Concert = {
  name : String
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
      {concerts.map((concert : any) => (
        <article>
          {concert.name}
        </article>
      ))}
    </div>
  )
}