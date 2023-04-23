import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Head from 'next/head';
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
    setContent(response.data)
    
  }
  const rawMarkup = (raw) => {
        return { __html: raw }
    }
  return (
    <div>
      <Head>
        <title>{content.post_title}</title>
        <meta name="description" content={content.sub_content} />
        <meta property="og:title" content={content.post_title} />
        <meta
          property="og:description"
          content={content.sub_content}
        />
        <meta
          property="og:image"
          content={content.image}
        />
      </Head>
      <div dangerouslySetInnerHTML={rawMarkup(content.post_content)} />
    </div>

    )
}
