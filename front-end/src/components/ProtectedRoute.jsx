import React, { useContext, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import getPassport from '../Api/getPassport';
import { ContextConsumer } from '../context/ContextProvider';

function ProtectedRoute(props) {
  const { userNameContext, setUserNameContext } = useContext(ContextConsumer);

  useEffect(() => {
    try {
      const fetcher = async () => {
        const result = await getPassport();
        if (!result.data.passport) {
          props.history.push('/user/login');
        } else {
          setUserNameContext(result.data.passport.user);
        }
      };
      fetcher();
    } catch (error) {
      console.log(error);
    }
  }, [props.history, setUserNameContext]);
  return (
    <Route path={props.path} render={() => (userNameContext ? <props.component user={userNameContext} /> : '')}></Route>
  );
}

export default withRouter(ProtectedRoute);
