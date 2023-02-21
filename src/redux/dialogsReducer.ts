import { PropertiesType } from './store'

type DialogsType = {
	id: number
	name: string
	ava?: string
}
type MessageType = {
	id: number
	message: string | object
}
let initialState = {
	dialogs: [
		{
			id: 1,
			name: 'Sergey G.',
			ava: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'
		},
		{
			id: 2,
			name: 'Dasha B.',
			ava: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
		},
		{
			id: 3,
			name: 'Vlad A.',
			ava: 'https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg'
		},
		{ id: 4, name: 'Andrey S.', ava: 'https://i.yapx.ru/Ra8I0.jpg' },
		{
			id: 5,
			name: 'Masha Z.',
			ava: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large'
		},
		{
			id: 6,
			name: 'Sasha N.',
			ava: 'https://www.meme-arsenal.com/memes/b3c35daf1f22458c56f49a1d3a9613da.jpg'
		}
	] as Array<DialogsType>,
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Me too' }
	] as Array<MessageType>
}
export type InitialStateType = typeof initialState

type ActionType = PropertiesType<typeof dialogsActions>

const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case 'social-net/dialogsReducer/ADD_MESSAGE':
			let newMessage = {
				id: Date.now(),
				message: Object.values(action.message)
			}
			return {
				...state,
				messages: [...state.messages, newMessage]
			}
		default:
			return state
	}
}

export const dialogsActions = {
	addMessageActionCreator: (message: string) => ({ type: 'social-net/dialogsReducer/ADD_MESSAGE', message } as const)
}

export default dialogsReducer
