type LogoPosition = {
  logoFooter: boolean;
};

function Logo(props: LogoPosition): JSX.Element {
  const {logoFooter} = props;

  return (
    <div className="logo">
      <a
        href="/"
        className={ logoFooter ? 'logo__link logo__link--light' : 'logo__link'}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}
export default Logo;
