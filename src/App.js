import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';
import { Fragment } from 'react';
import { DefaultLayout } from './layouts';
import RegisterOnline from './components/RegisterOnline';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        // Set default Layout
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        // Declare Page
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                <div
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '30px',
                        textAlign: 'center',
                    }}
                >
                    <RegisterOnline />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
