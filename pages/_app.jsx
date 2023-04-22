
import { useEffect, useState } from 'react'
import SamplePage from '../components/sample-blog'
import ReferrerPage from '../components/referrer'

function App() {
    const [referrer, setReferrer] = useState('')

    useEffect(() => {
        getRefer()
    }, [])

    const getRefer = () => {
       setReferrer(document.referrer) 
    }

    return ( referrer !== '' ? <ReferrerPage url={referrer} /> : <SamplePage />)
}

export default App
