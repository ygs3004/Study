export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    const url =
      mode === 'login'
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTBXRsNzsjnd8CtvHK3IOD-Hghdu-HiW8'
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTBXRsNzsjnd8CtvHK3IOD-Hghdu-HiW8';

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(
        responseData.message || 'Failed to authenticate. Check your login data'
      );
    }

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresId,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null,
      });
    }
  },
  logout(context) {
    context.commit('setUser', {
      tokenExpiration: null,
      token: null,
      userId: null,
    });
  },
};
