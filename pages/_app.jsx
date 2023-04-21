
import { useEffect, useState } from 'react'

function App() {
    const [content, setContent] = useState([])

    useEffect(() => {
        getRefer()
    }, [])

    const getRefer = async () => {
        const referer = document.referrer        
        let paramString = referer.split('?')[1]

        if (paramString) {
            const searchParams = new URLSearchParams(paramString);
            const refererAll = []
            for (const [key, value] of searchParams) {
                refererAll.push({ key: key, value: value })
            }
    
            setContent(refererAll)
        }
    }

    const rawMarkup = (raw) => {
        return { __html: raw }
    }

    return (
        <div>{
            content.map(item => (<pre>{ item.key }: {item.value}</pre>))
        }
        </div>
        
    )
}

export default App
