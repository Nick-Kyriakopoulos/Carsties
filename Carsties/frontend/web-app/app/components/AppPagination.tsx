'use client';

import { Pagination } from 'flowbite-react';



type Props={
    currentPage : number;
    pageCount : number;
    pageChanged: (pageNumber:number) => void;
}
export default function AppPagination({currentPage , pageCount, pageChanged}:Props) {
    return (
        <Pagination
            currentPage={currentPage}
            onPageChange={e => {pageChanged(e);}}
            totalPages={pageCount}
            layout="pagination"
            className="text-blue-500 mb-5"
        />
    )
}
    