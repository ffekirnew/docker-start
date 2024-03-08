import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../state-management/stores/gameQueryStore'


const SearchBox = () => {
  const setSearchQuery = useGameQueryStore(s => s.setSearchQuery);
  const searchBoxRef = useRef<HTMLInputElement>(null)

  return <form onSubmit={(event) => {
      event.preventDefault()
      setSearchQuery(searchBoxRef.current?.value!)
    }}>
    <InputGroup>
      <InputLeftElement children={<BsSearch />}/>
      <Input ref={searchBoxRef} placeholder='Search Games...' borderRadius={10} variant={'filled'}/>
    </InputGroup> 
  </form>
  
}

export default SearchBox
