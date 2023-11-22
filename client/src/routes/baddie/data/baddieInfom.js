const information = [

]

export const randomizeBaddieInfo = () => {
    const entryToDisplay = Math.floor(Math.random() * information.length);
    return information[entryToDisplay];
};