import { useMemo } from 'react'
import styles from './searchBox.module.css'
interface searchBoxProps {
    placeHolder? : string
    icon? : string
    backgroundColor : string
}
const SearchBox = (props : searchBoxProps) => {
    const {backgroundColor} = props
    const inlineStyles = useMemo(()=>{
        return {backgroundColor : backgroundColor}
    },[backgroundColor])
  return (
    <div style = {{...inlineStyles}} className = {styles['container']}></div>
  )
}

export default SearchBox