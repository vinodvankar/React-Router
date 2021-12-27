import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quote, asceding) => {
  return quote.sort((quoteA, quoteB) => {
    if (asceding) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isAsceding = queryParams.get("sort") === "asc";
  const sortquote = sortQuotes(props.quotes, isAsceding)

  const onClickSortHandler = () => {
    history.push(`${location.pathname}?sort=${isAsceding ? "desc" : "asc"}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onClickSortHandler}>
          Sort {isAsceding ? "Descending" : "ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortquote.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
