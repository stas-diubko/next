import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className='wrap-header'>
    <Link href="/">
      <span>Home</span>
    </Link>
    <Link href="/about">
      <span>About</span>
    </Link>

    <style jsx>{
        `
        .wrap-header {
            height: 50px;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 10px;
            background-color: lightgreen;
        }

        .wrap-header span {
            cursor: pointer;
            font-size: 20px;
            font-family: Arial;
            margin-right: 20px;
        }
        `
        }</style>
  </div>

);

export default Header;