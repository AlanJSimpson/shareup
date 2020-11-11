import React, { useEffect, useState } from 'react';
import { Route, withRouter  } from 'react-router-dom';
import getPassport from '../Api/getPassport';


function ProtectedRoute(props) {
    const [user, setUser] = useState('');

    useEffect(() => {
        try {
            const fetcher = async () => {
                const result = await getPassport();
                if (!result.data.passport) {
                    props.history.push('/user/login')
                } else {
                    setUser(result.data.passport.user)
                }

            }
            fetcher()
        } catch (error) {
            console.log(error)
        }

    }, [props.history])
    return (
        <Route
            path={props.path}
            render={data => user ? <props.component user={user} /> : ''}
        >
        </Route>
    )
}

export default withRouter(ProtectedRoute)
