import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import axios from 'axios';
export default function SamplePage (url) {
  const { asPath, pathname } = useRouter();
  const [content, setContent] = useState({})
  useEffect(() => {
        getContent()
    }, [])
  const getData = async (url) => {
    const response = axios.get(url, {'Access-Control-Allow-Origin': '*', "Content-Type": "application/json", 'Accept': "application/json"})
    return response
    
 }

  const getContent = async () => {
    const url = "https://laptrinhvn.net/api.php?post_name=" + asPath.replace('/', '')
    const response = await getData(url)
    console.log(response)
    setContent(response)
    
  }
  const rawMarkup = (raw) => {
        return { __html: raw }
    }
  // return (
  //   <p>Get content from domain.com and path {content} </p>
  //   )
  return (<div dangerouslySetInnerHTML={rawMarkup(content)} />)
}
