import React from 'react';
import { renderRoutes } from 'react-router-config'
import { Top } from './style'

const Home = (props) => {
    const { route } = props;
    return (
        <div>
            <Top>
                <span className="iconfont memu">&#xe65c;</span>
                <span className="title">WebApp</span>
                <span className="iconfont search">&#xe62b;</span>
            </Top>
            {renderRoutes(route.routes)}
        </div>
    );
}

export default React.memo(Home);