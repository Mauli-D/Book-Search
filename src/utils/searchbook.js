import axios from "axios";

export const handleSearch = async ({text, setIsLoading, setMatches}) => {
    // try {
        setIsLoading(true);
        const response = await axios.get(`http://openlibrary.org/search.json?q=${text}`);
        const matches = response.data.docs.filter((book) => {
            const regex = new RegExp(`${text}`, "gi");
            return book.title.match(regex);
        });
        setMatches(matches);
        setIsLoading(false);
    // } catch (error) {
    //     // console.error(error)
    // }
};