import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
           <h3>Version 1.0.0</h3> 
           <p>copyright &copy; Anurag Gautam</p>
           <Link to = '/'>Homepage</Link>
        </div>
    )
}

export default About
