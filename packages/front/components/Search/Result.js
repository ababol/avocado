import { createConnector, } from 'react-instantsearch';
import {
  Hits,
  Highlight,
} from 'react-instantsearch/dom';
import Link from 'next/link';

const Result = createConnector({
    displayName: 'ConditionalResults',
    getProvidedProps(props, searchState, searchResults) {
      const noResults = searchResults.results ? searchResults.results.nbHits === 0 : false;
      return {query: searchState.query, noResults, ...props};
    },
 })(({noResults, query, childrenContent, childrenNoContent}) => {
    return noResults ?
      <div>{childrenNoContent}</div> :
      <div>{childrenContent}</div>;
 });

function HitContent({hit}) {
 return (
   <Link href={`/avocat?id=${encodeURIComponent(hit.id)}`} as={`/avocat/${hit.id}`}>
     <a className="card__avocat">
       <div className="avocat__logo" style={{backgroundImage: `url(${hit.avatar || '/static/avocado.png'})`}} />
       <div className="avocat__info">
         <span className="info__name">
           <Highlight attributeName="name" hit={hit} />
         </span>
         <span className="info__address">
           <Highlight attributeName="address" hit={hit} />
         </span>
       </div>
       <style jsx>{`
         a:hover {
           box-shadow: #a7d28d 0px 1px 8px;
         }
         a:hover .info__name {
           color: #a7d28d;
         }
         .avocat__logo {
           height: 80px;
           width: 80px;
           border-radius: 80px;
           background-repeat: no-repeat;
           background-position: center center;
           background-size: 100%;
         }
         .ais-Hits__root, .ais-Pagination__root {
           width: 100%;
         }
         .card__avocat {
           display: flex;
           border: 1px solid #ececec;
           box-shadow: rgba(0, 0, 0, 0.10) 0px 1px 8px;
           margin: 20px 0;
           padding: 20px 24px;
         }
         .avocat__info {
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           margin-left: 20px;
           padding: 16px 0;
         }
         .info__name {
           font-weight: bold;
         }
         .info__address {
           font-weight: 200;
         }
       `}</style>
     </a>
   </Link>
 );
};

function ResultContent() {
 return (
   <div className="center__wrapper">
     <Hits hitComponent={HitContent} />
     <style jsx global>{`
       .ais-Hits__root {
         width: 100%;
       }
       .ais-Highlight .ais-Highlight__highlighted {
         background: #A3FD6F;
       }
     `}</style>
   </div>
 );
}

function ResultNoContent() {
 return (
   <div className="center__wrapper">
     <img src="/static/avocado-crepe.gif" width="400" height="300" />
     <style jsx global>{`
       img {
         margin: 0 auto;
       }
     `}</style>
   </div>
 );
}

export default () => (
  <Result
    childrenContent={<ResultContent />}
    childrenNoContent={<ResultNoContent />}
  />
);
