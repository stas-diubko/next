import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';
import Header from '../../components/Header';
import React from 'react';
import { withRouter } from 'next/router';

class Product extends React.Component {
   
    static async getInitialProps(context) {
        const { id } = context.query;
        const res = await fetch(`http://localhost:3001/books/${id}`);
        const show = await res.json();
        return { show };
    };
    
    componentDidMount() {

    }

    render() {
        let product = this.props.show.data;
        return(
            <Layout>
                <Header />
                <h2>Details</h2>
                <div className='details-wrap'>
                    <h3>{product.title}</h3>
                    <p>{product.thumbnailUrl}</p>
                    <img src={product.bookImage} alt="img"></img>
                    <p>{product.description}</p>
                </div>
                <style jsx>{
                    `
                    h2 {
                        margin-left: 30px;
                        font-family: Arial;
                        font-size: 24px;
                        color: grey;
                    }

                    .details-wrap {
                        height: 500px;
                        width: 400px;
                        margin: 100px auto;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        justify-content: center;
                        flex-direction: column;
                        padding: 10px;
                        background-color: #fff;
                        overflow: hidden;
                        font-family: Arial;
                    }

                    .details-wrap img {
                        height: 300px;
                        width: 250px;
                    }
                    `
                }</style>
            </Layout>
        );
    }
}

export default withRouter(Product);