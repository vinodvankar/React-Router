import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import { useEffect } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner'


const QuotesDetails = () => {
    
    const param = useParams()
    const match = useRouteMatch()
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)
    const {quotesId} = param

    
    useEffect(() => {
        sendRequest(quotesId)
    }, [sendRequest,quotesId])
    
    // const quote = loadedQuote.find(quote => quote.id === +param.quotesId)
    
    console.log(loadedQuote);
    if(status === 'pending'){
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }
    if(error){
        return <div className="centered">{error}</div>
    }

    if(!loadedQuote.text){
        return <p className="centered">No quote found</p>
    }
 
    return (
        <div>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>

            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuotesDetails
