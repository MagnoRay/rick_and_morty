import SearchBar from "../searchbar/SearchBar";
import logo from './logo.png'
import { NavLink } from 'react-router-dom';
import n from './nav.module.css'



export default function Nav(props){
    const {onSearch} = props
  
    return(
        
    <div className={n.container}>
        <img  src={logo} alt='img' className={n.img} />
        <NavLink to='/about'><span className={n.child}>About</span></NavLink>
        <NavLink to='/home'><span className={n.child}>Home</span></NavLink>
        <NavLink to='/favorites'><span className={n.child}>Favorites</span></NavLink>
        <SearchBar className={n.child} onSearch={onSearch}/> 
    </div>         
       
    );
}