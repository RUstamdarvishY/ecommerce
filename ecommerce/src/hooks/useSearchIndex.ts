import {useEffect, useState} from 'react'
import MiniSearch, { Options } from 'minisearch'
import { Products } from './useProducts'


function useSearchIndex(data: Products[], miniSearchOptions: Options, searchOptions = {}){
    const [results, setResults] = useState([])
    const [searchIndex, setSearchIndex] = useState([])

    useEffect(() => {
        const index = new MiniSearch(miniSearchOptions) 

        index.addAll(data)

        setSearchIndex(index)
    }, [])

    const search = (value: string) => {
        const newResults = searchIndex?.search(value, searchOptions)
        setResults(newResults)
    }

    return {results, search, searchIndex}
}

export default useSearchIndex