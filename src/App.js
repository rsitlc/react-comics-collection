import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Row, Col } from "antd";
import Footer from "./components/footer/Footer";
import Bonelli from "./components/bonelli/Bonelli";
import Marvel from "./components/marvel/Marvel";
import DcComics from "./components/dcComics/DcComics";
import Home from "./components/main-sections/Home";

/* Stylesheets */
import "./App.css";
import "antd/dist/antd.css";
import { BonelliProvider } from "./contexts/BonelliContext";

function App() {
    return (
        <Router>
            <div className='app'>
                <Redirect to='/' />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/bonelli'>
                        <BonelliProvider>
                            <Bonelli />
                        </BonelliProvider>
                    </Route>
                    <Route exact path='/marvel' component={Marvel} />
                    <Route exact path='/dc' component={DcComics} />
                </Switch>
                {/* Footer */}
                <Row>
                    <Col span={24}>
                        <Footer />
                    </Col>
                </Row>
            </div>
        </Router>
    );
}

export default App;
