
import { Container } from './styles';
import ToquePlayLogo from '../../assets/logotipo.svg';
import { Link } from 'react-router-dom'
 
// import { Container } from './styles';
interface Menu{
    showMenu?: boolean,
    onShowMenu: (value: boolean) => void
}
const MenuBar: React.FC<Menu> = (props: Menu) => {
    const {onShowMenu, showMenu }= props;
   
  return(
    <Container>
    <nav>
        <header>
        <nav className="nav-bar">
            <div className="mobile-menu" >
              <div className="logo">
                <img src={ToquePlayLogo} alt="menu"/>
              </div>
              <div className="btn-create" onClick={()=>onShowMenu(!showMenu)}>
                   <button className="close"/>
              </div>
            </div>
          </nav>
        </header>
    </nav>
    <div className="menus">
        <Link to="#">Início</Link>
        <Link to="#">Destaques</Link>
        <Link to="#">Magazine</Link>
        <Link to="#">Sobre</Link>
        <Link to="#" className="borda"></Link>
        <Link to="#">Entrar</Link>
        <Link to="#">Iniciar Teste Grátis</Link>
    </div>
</Container>
  );
}

export default MenuBar;