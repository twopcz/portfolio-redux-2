import cookie from 'react-cookies';
import React, { useEffect } from 'react';
import './App.css';
import { About, Connect, Nav, Projects } from './components';
interface Pages {
    About: JSX.Element;
    Connect: JSX.Element;
    Projects: JSX.Element;
}

function App(): JSX.Element {
    const [currentPage, setCurrentPage] = React.useState('About');

    const pages: Pages = {
        About: <About />,
        Connect: <Connect />,
        Projects: <Projects />
    };

    const initialPage = cookie.load(currentPage);

    useEffect(() => {
        if (initialPage) {
            setCurrentPage(initialPage);
        }
    }, []);

    return (
        <div className="App mx-5 my-5">
            <header className="">
                <h1 className="text-7xl font-extrabold">Justin Le</h1>
            </header>
            <Nav
                currentPage={initialPage ? initialPage : currentPage}
                setCurrentPage={setCurrentPage}
            />
            {initialPage
                ? pages[initialPage as keyof Pages]
                : pages[currentPage as keyof Pages]}
        </div>
    );
}

export default App;
