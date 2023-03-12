import { Layout } from "../components/Layout"
import { useState } from 'react';
import { useEffect, } from "react"
import { getConcerts, Concert } from "../services/api-service"
// import { CalculateTicketPrice, Locale } from "../../com/ticket-pricing-module//src"

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
      {concerts.map(({name,date,id, ticketPrice} : Concert) => (
        <article key={id}>
          <p>{name} - {new Date(date).toLocaleDateString()}</p>
          {/* <p>${ticketPrice} (${CalculateTicketPrice(Locale.USD, false, ticketPrice, 10).toFixed(2)} for group tickets)</p> */}
        </article>
      ))}
    </Layout>
  )
}
