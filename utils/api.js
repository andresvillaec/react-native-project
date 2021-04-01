import { AsyncStorage } from 'react-native';

export function getDecks() {
    return AsyncStorage.getAllKeys().then(keys => {
        return AsyncStorage.multiGet(keys).then(stores => {
            return stores.map((result, i, store) => {
                let key = store[i][0];
                let value = JSON.parse(store[i][1]);
                if (value) {
                    return {
                        title: value.title,
                        questions: value.questions
                    };
                }
            }).filter(items => {
                if (items) {
                    return typeof items.questions !== 'undefined'
                }
            });
        });
    });
}

export function getDeck(id) {
    return AsyncStorage.getItem(id);
}

export function saveDeck(title) {
    try {
        return AsyncStorage.setItem(title, JSON.stringify({ 
          title, 
          questions: [] 
        }));
    } catch (error) {
        console.log(error);
    }
}

export function addCard(title, card) {
    try {
        AsyncStorage.getItem(title).then(result => {
            const data = JSON.parse(result);

            let questions = data.questions;
            questions.push(card);

            AsyncStorage.mergeItem(title, JSON.stringify({
                questions
            }));
        });
    } catch (error) {
        console.log(error);
    }
}
