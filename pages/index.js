import Header from '../components/Header';
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Index = props =>(
    <Layout>
      <div className='home-wrap'>
        <Header />
        <h2>Products</h2>
        <div className='products-wrap'>
          <ul>
            {props.shows.map(show => (
              <Link> 
                <li key={show.id}>
                    <img src={show.url} alt="img"></img>
                    <h4>{show.title}</h4>
                </li>
              </Link>
            ))}
          </ul> 
        </div>


        <style jsx>{
              `
              h2 {
                  margin-left: 30px;
                  font-family: Arial;
                  font-size: 24px;
                  color: grey;
              }

              .products-wrap {
                display: flex;
              }

              .products-wrap ul {
                padding: 0 50px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              }

              ul li {
                display: flex;
                flex-direction: column;
                padding: 10px;
                min-height: 300px;
                width: 250px;
                margin: 20px;
                background-color: lightgrey;
                font-family: Arial;
                color: darkgreen;
                border-radius: 8px;
                cursor: pointer;
              }

              li img {
                max-width: 150px;
                max-height: 200px;
                border-radius: 6px;
              }


              `
        }</style>
      </div>
    </Layout>
  );

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
  const data = await res.json();
  
  return {
    shows: data
  };
};

export default Index;