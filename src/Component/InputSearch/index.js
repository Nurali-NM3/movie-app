import React, {useEffect} from 'react';

function Search({searchTerm,setSearchTerm}) {


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
             if (searchTerm !== ''){
                 console.log(searchTerm)
             }
        }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    return (
        <input
            autoFocus
            type='text'
            autoComplete='off'
            className='live-search-field'
            placeholder='Search here...'
            onChange={ ((e) => setSearchTerm(e.target.value))}
        />
    )
}

export default Search