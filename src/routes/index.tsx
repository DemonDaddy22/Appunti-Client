import { Redirect, Route, Switch } from 'react-router-dom';
import { HOMEPAGE_PATH } from '../resources/constants';
import BooksFinder from '../screens/BooksFinder';
import Main from '../screens/Main';
import RouteTest from '../screens/RouteTest';

// if requirement comes to use history, then directly use the hook useHistory of react-router-dom
// refer - https://www.telerik.com/blogs/programmatically-navigate-with-react-router

const Routes: React.FC<{}> = () => {
    return (
        <Switch>
            <Route
                exact
                path={HOMEPAGE_PATH}
                render={(routeProps) => (
                    <Main router={routeProps}>
                        <BooksFinder router={routeProps} />
                    </Main>
                )}
            />
            <Route
                exact
                path={`${HOMEPAGE_PATH}test`}
                render={(routeProps) => (
                    <Main router={routeProps}>
                        <RouteTest />
                    </Main>
                )}
            />
            <Redirect to="/" from="*" />
        </Switch>
    );
};

export default Routes;
