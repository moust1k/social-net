import profileReducer, { addPostActionCreator } from "./profileReducer"

let state = {
    posts: [
        {
            id: 1,
            message: 'asdasd',
            likesCount: 3,
            dislikeCount: 1,
        }
    ]
}

it('lenght of post should be decrement', () => {
    // 1. Инициализация, готовим данные, test data
    let action = addPostActionCreator('Hi hitler')

    // 2. Делаем action
    let newState = profileReducer(state, action)

    // 3. ожидание
    expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
    // 1. Инициализация, готовим данные, test data
    let action = addPostActionCreator('Hi hitler')

    // 2. Делаем action
    let newState = profileReducer(state, action)

    // 3. ожидание
    expect(newState.posts[1].message).toBe('Hi hitler')
})

it('lenght of post should be 5', () => {
    // 1. Инициализация, готовим данные, test data
    let action = addPostActionCreator('Hi hitler')

    // 2. Делаем action
    let newState = profileReducer(state, action)

    // 3. ожидание
    expect(newState.posts.length).toBe(5)
    expect(newState.posts[0].message).toBe('Hi hitler')
})