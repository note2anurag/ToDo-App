import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    return (
        <header className= 'header'>
         <h1 >{title}</h1>
         {location.pathname === '/' && <Button 
         onClick= {onAdd} 
         color={ showAdd ? 'red':'green'} 
         text={showAdd ? 'Close' : 'Add'}
         />}
        </header>
    )
}

Header.defaultProps= {
    title:'ToDo Tracker'
}

//detecting prop type error if its not a string
Header.propTypes = {
    title: PropTypes.string
}


//CSS in JS //
// const headingStyle = {
//     color:'yellow', 
//     backgroundColor:'blue'
// }

export default Header

