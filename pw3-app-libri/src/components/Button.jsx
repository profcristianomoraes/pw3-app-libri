import {Link} from 'react-router-dom'
import style from './Button.module.css'

const Button = ({label, router, id}) => {
    return (
        <div className={style.buttonContainer}>
            <Link to={`${router}${id}`}>
                <button>{label}</button>
            </Link>
            
        </div>
    )
}

export default Button
