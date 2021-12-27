import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuoteFound from '../components/quotes/NoQuotesFound'


const Allquotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(()=>{
    sendRequest()
  },[sendRequest])

  if(status === 'pending'){
      return(
          <div className="centered">
              <LoadingSpinner />
          </div>
      )
  }

  if(error){
    return(
      <div className="centered focused">{error}</div>
    )
  }
  if(status === 'completed' && (!loadedQuotes || loadedQuotes.lenght === 0)){
    return <NoQuoteFound />
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default Allquotes;
