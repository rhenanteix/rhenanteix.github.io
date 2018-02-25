import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../dashboard'))}
        />
        <Route
          exact
          path={`${url}/blankPage`}
          component={asyncComponent(() => import('../blankPage'))}
        />
        <Route
          exact
          path={`${url}/content`}
          component={asyncComponent((props) => import('../Content/conteudo'))}
        />
        <Route
          exact
          path={`${url}/maps`}
          component={asyncComponent(() => import('../Content/maps'))}
        />
        <Route
          exact
          path={`${url}/contentUpload`}
          component={asyncComponent(() => import('../Content/conteudoUpload'))}
        />
        <Route
          exact
          path={`${url}/contentReview`}
          component={asyncComponent(() => import('../Content/conteudoReview'))}
        />
        <Route
          exact
          path={`${url}/schedule`}
          component={asyncComponent(() => import('../Schedule/schedule'))}
        />
        <Route
          exact
          path={`${url}/trilha`}
          component={asyncComponent(() => import('../Schedule/trilha'))}
        />
        <Route
          exact
          path={`${url}/evento`}
          component={asyncComponent(() => import('../Schedule/evento'))}
        />
         <Route
          exact
          path={`${url}/publish`}
          component={asyncComponent(() => import('../Schedule/publish'))}
        />
      </Switch>
    );
  }
}

export default AppRouter;
