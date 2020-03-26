import React, {createContext, useEffect, useState} from 'react';
import allBooks from './mock/books'

const Context = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [books, setBooks] = useState(allBooks)
    const [years, setYears] = useState([...new Set(books.map((b) => b.ano))].sort(function(a, b){return a-b}));    
    const [filterFrom, setFilterFrom] = useState(years[0]);
    const [filterTo, setFilterTo] = useState(years[years.length - 1]);
    const [filteredBooks, setFilteredBooks] = useState(books);
    const [rangeStart, setRangeStart] = useState(0);
    const [rangeEnd, setRangeEnd] = useState(10);

    useEffect(() => {
        let newBooks = [...books]
        newBooks = newBooks.filter((b) => b.ano >= filterFrom && b.ano <= filterTo)
        setFilteredBooks(newBooks);
        setRangeStart(0);
        setRangeEnd(10);
    }, [filterTo, filterFrom]);

    const search = (searchTerm) => {    
        setRangeStart(0);
        setRangeEnd(10);
        let searchedBooks = allBooks.filter((b) => JSON.stringify(b).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
        let years = [...new Set(searchedBooks.map((b) => b.ano))].sort(function(a, b){return a-b});
        setBooks(searchedBooks);
        setYears(years);
        setFilterFrom(years[0]);
        setFilterTo(years[years.length - 1]);
    };

    const changePage = (page) => {
        setRangeStart((page * 10) - 10);
        setRangeEnd(page * 10);
    }

    const values = {
        books,
        years,
        filterFrom,
        setFilterFrom,
        filterTo,
        setFilterTo,
        filteredBooks,
        search,
        rangeStart,
        rangeEnd,
        changePage
    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
}

export const AppContextConsumer = Context.Consumer;
export default AppContextProvider;