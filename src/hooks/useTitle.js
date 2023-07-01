import { useEffect } from 'react'

const useTitle = (title) =>{
    useEffect(() => {
        document.title = `${title} | Shopping Cart`
    }, [title])

  return null;
  
}

export default useTitle
