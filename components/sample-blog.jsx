import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import axios from 'axios';
export default function SamplePage (url) {
  const { asPath, pathname } = useRouter();
  const [content, setContent] = useState('')
  useEffect(() => {
        getContent()
    }, [])

  const getContent = async () => {
    const url = "https://laptrinhvn.net/api.php?post_name=" + asPath.replace('/', '')
    const response = await axios.get(url)
    setContent(response.data.post_content)
    
  }
  const rawMarkup = (raw) => {
        return { __html: raw }
    }
  return (<div dangerouslySetInnerHTML={rawMarkup(content)} />)
}
