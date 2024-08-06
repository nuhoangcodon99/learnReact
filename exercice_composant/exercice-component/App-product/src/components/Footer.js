import SecondaryMenu from "./secondMenu";
const Footer = () => {
    return (
      <div className="container">
        <footer className="py-3 my-4">
          <SecondaryMenu />
          <Footer copyright="(c) 2021 THE Company, Inc" />        </footer>
      </div>
    );
  }

export default Footer;
