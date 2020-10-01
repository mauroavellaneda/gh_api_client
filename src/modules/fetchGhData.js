import axios from 'axios'

const fetchGhData = async () => {
    let searches = await axios.get('https://api.github.com/search/users')
    return searches.data.users
}

export { fetchGhData }