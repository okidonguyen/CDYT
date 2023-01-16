import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';
import { Fragment } from 'react';
import { DefaultLayout } from './layouts';

function  App() {
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
            </div>
        </BrowserRouter>
    );
}

export default App;
