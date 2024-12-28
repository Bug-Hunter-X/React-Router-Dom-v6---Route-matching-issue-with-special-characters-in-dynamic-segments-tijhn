# React Router Dom v6 - Route Matching Issue with Special Characters

This repository demonstrates a bug in React Router Dom v6 where routes with dynamic segments containing special characters (e.g., '+', '?', '/', etc.) may not match correctly, leading to unexpected routing behavior.  The issue and its solution are detailed in the included files.

**Bug:**  Navigation to routes with dynamic segments including special characters fails.

**Solution:** Use URL encoding to escape special characters in the dynamic segments before navigation.