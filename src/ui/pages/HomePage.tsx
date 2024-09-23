import { useNavigate } from 'react-router-dom';

// function parseJwt (token: string) {
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
//     return JSON.parse(jsonPayload);
// }

const HomePage = () => {
    const navigate = useNavigate();
    // const idToken = parseJwt(sessionStorage.idToken.toString());
    // const accessToken = parseJwt(sessionStorage.accessToken.toString());

    console.log(sessionStorage.accessToken.toString());

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    };

    return (
        <div>
            <h1>Hello World</h1>
            <p>See console log for Amazon Cognito user tokens.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;