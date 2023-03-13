const searchCharacter = async (character) => {
    try {
        const result = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        const data = result.json()
        return data
    } catch (error) {
        return [`There was an error getting data: ${error}`]
    }
}

const getCharacterById = async (id) => {
    try {
        const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        //console.log(result.json())
        const character = await result.json()
        let formatted = {
            image: character.image,
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            type: character.type,
            origin: character.origin.name,
            location: character.location.name
        }
        return formatted
    } catch (error) {
        return [`There was an error getting data: ${error}`]
    }
}

const getNewPageCharacters = async (url) => {
    try {
        const result = await fetch(`${url}`)
        const newList = result.json()
        return newList
    } catch (error) {
        return [`There was an error getting data: ${error}`]
    }

}

export {
    searchCharacter,
    getCharacterById,
    getNewPageCharacters
}