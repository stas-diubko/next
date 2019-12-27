import Header from '../components/Header';
import Layout from '../components/layout';
import Link from 'next/link';

export default function About() {
    return (
        <Layout>
            <div className='about-wrap'>
                <Header />
                <p>This is the about page</p>
                <Link href="/appImage.jpg">
                    <span>This is an image</span>
                </Link>
            </div>
            <style jsx>{
                `
                .about-wrap {
                    font-family: Arial;
                    font-weight: 600;
                }

                .about-wrap span {
                    cursor: pointer;
                    margin-left: 20px;
                }
                
                .about-wrap span:hover {
                    color: darkred;
                }

                .about-wrap p {
                    margin-left: 20px;
                }

                `
            }</style>
        </Layout>

    );
  }