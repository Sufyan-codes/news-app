import React from 'react'
import { useParams } from 'react-router-dom'

export default function NewsListDetails() {
    const params = useParams()
    const [details, setDetails] = React.useState(null)

    React.useEffect(() => {
        const apiKey = `189ef8f9194b2ecc3771c973359a1f96`;
        fetch(`https://gnews.io/api/v4/top-headlines?token=${apiKey}/${params.url}`)
            .then(res => res.json())
            .then(data => console.log(params.url))
    }, [params.url])
  return (
    <div>
      details goes here
    </div>
  )
}
