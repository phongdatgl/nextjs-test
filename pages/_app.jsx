
import { useEffect, useState } from 'react'

function App() {

    const [content, setContent] = useState({})

    useEffect(() => {
        getRefer()
    }, [])

    const getRefer = async () => {

        const response = await fetch('/api/referer')
        const jsonData = await response.json()
    
        setContent(jsonData.content)
    }

    const rawMarkup = (raw) => {
        return { __html: raw }
    }

    return (<div dangerouslySetInnerHTML={rawMarkup(content)} />)
}

export default App
