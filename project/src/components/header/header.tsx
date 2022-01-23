import Logo from '../logo/logo';
import SingIn from '../sing-in/sing-in';

function Header(): JSX.Element {
  return (
    <>
      <header className="page-header film-card__head">
        <Logo logoFooter={false} />
        <SingIn />
      </header>
      {}
    </>
  );
}
export default Header;
