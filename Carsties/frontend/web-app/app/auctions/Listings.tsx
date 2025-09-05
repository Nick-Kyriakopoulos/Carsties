'use client';

import AppPagination from "../components/AppPagination";
import AuctionCard from "./AuctionCard";
import { getData } from "../actions/auctionActions";
import { Auction, PagedResult } from "@/types";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import { useParamsStore } from "@/hooks/useParamsStore";
import { useShallow } from "zustand/shallow";
import qs from "query-string";
import EmptyFilter from "../components/EmptyFilter";

export default  function Listings() {
    const [data, setData] = useState<PagedResult<Auction>> ();

    const params = useParamsStore(useShallow (state => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      searchTerm: state.searchTerm,
      orderBy: state.orderBy,
      filterBy: state.filterBy
    })));

    const setParams = useParamsStore(state => state.setParams);
    const url = qs.stringifyUrl({url: '', query: params},{skipEmptyString: true});

    function setPageNumber(pageNumber: number) {
      setParams({pageNumber});
    }


    // Update auctions when page size changes
    useEffect(() => {
      getData(url).then(data =>{
        setData(data);
      });
    }, [url]);

  if (!data) return <h3 className="flex items-center text-4xl font-semibold justify-center h-screen">Loading...</h3>;

    return (
      <>
          <Filters  />
            {data.totalCount === 0 ? (
              <EmptyFilter  showReset/>
            ):(
              <>
                  <div className="grid grid-cols-4 gap-6">
                        {data.results.map(auction => (
                            <AuctionCard key={auction.id} auction={auction} />
                        ))}
                  </div>

                  <div className="flex justify-center mt-4">
                        <AppPagination pageChanged={setPageNumber} 
                        currentPage={params.pageNumber} pageCount={data.pageCount} />
                  </div>
              </>
            )}
          
      </>
    );
}
