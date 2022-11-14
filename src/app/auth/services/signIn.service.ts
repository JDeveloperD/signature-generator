const signInService = (credentials: any) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const { email, password } = credentials;

      if (email === 'ing.david1993@gmail.com' && password === 'contra123') {
        const user = {
          _id: 'el1',
          nickname: 'JDsandoval',
          email: 'ing.david1993@gmail.com',
          avatar:
            'https://gravatar.com/avatar/c04980bdfea177f1469b017e2053af53?s=400&d=robohash&r=x',
        };

        resolve({
          user,
          accessToken: 'access-token-string',
        });
      } else {
        resolve(null);
      }
    }, 1000);
  });
};

export default signInService;
