/* eslint-disable @typescript-eslint/no-unused-vars */
/*eslint-disable-next-line*/
import React, { useState, useEffect } from 'react';
import KaKaoLogin from 'react-kakao-login';
import axios, { AxiosResponse } from 'axios';

interface State {
    data: any;
}

function KaKaoSignin() {
    const [data, setData] = useState('');

    const isSuccess = (res: any) => {
        setData(res);
        console.log('res', res);
        console.log('data', data);
        console.log(res.response.access_token);
        // alert(JSON.stringify(data));
        axios.get('')
            .then((res: AxiosResponse ) => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    const isFail = (err: any) => {
        alert(err);
    }

    return (
        <div>
            <KaKaoLogin
                jsKey={'30834f13784404b3428737c9fa3d91ce'}
                buttonText='카카오 계정으로 로그인'
                onSuccess={isSuccess}
                onFailure={isFail}
                getProfile={true}
              />
        </div>

    );
}

export default KaKaoSignin;