import { Layout } from "../components/Layout"
import { useState } from 'react';
import { useEffect, } from "react"
import { getConcerts, Concert } from "../services/api-service"

export const Concerts = () => {

  const [concerts, setConcerts] = useState<Concert[]>([])

  useEffect(() => {

    const fetchData = async () : Promise<void> => {
      const data : Concert[] = await getConcerts()
      setConcerts(data)
    }

    fetchData()

  }, [])

  return (
    <Layout isSignedIn={true}>
      {concerts.map(({name,date,id} : Concert) => (
        <article key={id}>
          {name} - {new Date(date).toLocaleDateString()}
        </article>
      ))}
    </Layout>
  )
}
