import {
    configureStore,
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

// Crée une action asynchrone pour la connexion de l'utilisateur
export const connectUser = createAsyncThunk(
    'connect/connectUser',
    async (payload, { dispatch }) => {
        const { username, password } = payload;
        try {
            const token = await fetchToken({ username, password });
            if (token) {
                const userData = await fetchUser(token);
                return { token, userData };
            }
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            throw error;
        }
    }
);

// Slice de connexion
const connectSlice = createSlice({
    name: 'connect',
    initialState: {
        user: '',
        password: '',
        token: '',
        firstName: '',
        lastName: '',
    },
    reducers: {
        setProfileData: (state, action) => {
            const { firstName, lastName } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
        },
    },
    // ExtraReducers pour gérer l'async
    extraReducers: (builder) => {
        builder.addCase(connectUser.fulfilled, (state, action) => {
            const { token, userData } = action.payload;
            state.user = userData.username;
            state.password = userData.password;
            state.token = token;
            state.firstName = userData.body.firstName;
            state.lastName = userData.body.lastName;
        });
    },
});

export const { setProfileData } = connectSlice.actions;

export const store = configureStore({
    reducer: {
        connectUser: connectSlice.reducer,
    },
});

async function fetchToken(data) {
    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/login',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.username,
                    password: data.password,
                }),
            }
        );
        const dataResp = await response.json();
        return dataResp.body.token;
    } catch (err) {
        console.error('Erreur lors de la récupération du token :', err);
        throw err;
    }
}

async function fetchUser(token) {
    console.log(token);
    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            }
        );
        const dataResp = await response.json();
        return dataResp;
    } catch (err) {
        console.error('Erreur lors de la récupération du profil :', err);
        throw err;
    }
}
