import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import axios from 'axios';
export default function SamplePage (url) {
  const { asPath, pathname } = useRouter();
  const getContent = async () => {
    const url = "https://laptrinhvn.net/api.php?post_name=" + asPath.replace('/', '')
    // const response = await axios.get(url, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*" })
    const response = await fetch(url)
    const jsonData = await response.json()
    console.log(jsonData)
  }
  getContent()
  
  return (
    <p>Get content from domain.com and path {asPath}</p>
    )
}
