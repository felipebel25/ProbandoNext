export const getYear = () => {
    let currentTime = new Date();
    let year = currentTime.getFullYear()
    return year
}