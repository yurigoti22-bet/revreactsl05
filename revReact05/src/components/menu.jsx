import s from './menu.module.css'

export const Menu = () => {
    return(
        <nav className={s.menu}>
          <a href="">Home</a>
          <a href="">Instituição</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
        </nav>
    )
}