The problem is that special characters in the URL path are not correctly handled by the dynamic segment matching in React Router Dom.  The solution is to encode the URL parameters before including them in the URL.  This escapes the special characters. Below is the corrected code:

```javascript
import { useParams, useLocation } from 'react-router-dom';

function UserPage() {
  const params = useParams();
  const location = useLocation();
  const userId = decodeURIComponent(params.userId);

  // ... rest of your component code

  return (
    <div>
      <h1>User Profile: {userId}</h1>
      <p>Location: {JSON.stringify(location, null, 2)}</p>
    </div>
  );
}

export default UserPage;
```
And the navigation should be updated to encode the userId:

```javascript
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  const handleNavigate = (userId) => {
    navigate(`/users/${encodeURIComponent(userId)}`);
  };

  return (
    <div>
      <button onClick={() => handleNavigate('+123')}>Go to User +123</button>
    </div>
  );
}

export default MyComponent;
```