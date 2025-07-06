/*
thunk ve custom yazılmış loggerMiddleware ve delayMiddleware isimli middleware'ları birleştir.

- combinedMiddleware isimli bir değişken oluştur.
- applyMiddleware ile middleware'ları bu değişkende birleştir.
- Gerekli import'ları unutma. custom middleware'lar aynı isimli ve .js uzantılı dosyada named export olarak aynı klasörde.*/


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loggerMiddleware, delayMiddleware } from './middleware.js'; // custom middleware'ları import et

const combinedMiddleware = applyMiddleware(thunk, loggerMiddleware, delayMiddleware);

export const store = createStore(rootReducer, combinedMiddleware);