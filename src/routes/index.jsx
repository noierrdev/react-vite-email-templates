import React from 'react'
import { useRoutes } from "react-router-dom";

const IndexPage=React.lazy(()=>import("../pages/index"))
const GithubAccessTokenPage=React.lazy(()=>import("../pages/github-access-token"))
const VercelInviteUserPage=React.lazy(()=>import("../pages/vercel-invite-user"))
const YelpRecentLoginPage=React.lazy(()=>import("../pages/yelp-recent-login"))

const AppRoutes=(props)=>{
    const routes=[
        {
            path:"/",
            element:<IndexPage {...props} />
        },
        {
            path:"/github-access-token",
            element:<GithubAccessTokenPage {...props} />
        },
        {
            path:"/vercel-invite-user",
            element:<VercelInviteUserPage {...props} />
        },
        {
            path:"/yelp-recent-login",
            element:<YelpRecentLoginPage {...props} />
        }
    ]
    return useRoutes(routes);
}
export default AppRoutes;