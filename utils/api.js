import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_DECKS_KEY = 'mobile-cards: decks';

const decks = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces',
				correctAnswer: false,
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event',
				correctAnswer: true,
			},
		],
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer:
					'The combination of a function and the lexical environment within which that function was declared.',
				correctAnswer: true,
			},
		],
	},
};

export const loadInitialData = async () => {
	try {
		const data = await AsyncStorage.getItem(STORAGE_DECKS_KEY)
		if(data === null || data.length === 0) {
			AsyncStorage.setItem(STORAGE_DECKS_KEY, JSON.stringify(decks))
		}
		return data === null ? decks : JSON.parse(data)
	} catch (error) {
		console.log('_getData error ', error);
	}
};


removeValue = async (id) => {
  try {
    await AsyncStorage.removeItem(id)
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}

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

export function deleteDeck(id) {
  return removeValue(id);
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

export const _getDeckTitle = async (deck) => {
	try {
		const data = await AsyncStorage.getItem(STORAGE_DECKS_KEY)
		return JSON.parse(data)[deck]

	} catch (error) {
		console.log('_getDeckTitle error ', error);
	}
};

export const _addCard = async (title, card) => {
	const deck = await _getDeckTitle(title);
	try {
		await AsyncStorage.mergeItem(
			STORAGE_DECKS_KEY,
			JSON.stringify({
				[deck]: {
					[questions]: [...deck.questions].concat(card),
				},
			})
		);
	} catch (error) {
		console.log('_addCardToDeck error ', error);
	}
};

export async function _removeDeck(id) {
  const results = await AsyncStorage.getItem(STORAGE_DECKS_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[id];

    await AsyncStorage.setItem(STORAGE_DECKS_KEY, JSON.stringify(data));
    return data;
  }
  return {};
}

