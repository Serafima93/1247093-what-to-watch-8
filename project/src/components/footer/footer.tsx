import Logo from '../logo/logo';

function Footer(): JSX.Element {
  const logoPosition = true;
  return (
    <>
      <footer className="page-footer">
        <Logo logoFooter={logoPosition} />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
      {}
    </>
  );
}
export default Footer;
