const fsPromises = require('fs').promises;

const populateArray = async () => {
    const arr = [];
    try {
        for (let i = 1; i < 27; i++) {
            let getPrice = (Math.floor(Math.random() * (200 - 80 + 1) + 80)) - .01;
            let count = Math.floor(Math.random() * (20 - 5 + 1) + 5);

            arr.push({
                name: `Item ${i}`,
                imageUrl: `/img/shop/${i}.jpg`,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
                price: getPrice,
                countInStock: count
            });
        }
    } catch (err) {
        console.err(err);
    }
    return arr;
}

const writeToFile = async () => {
    const data = await populateArray();
    fsPromises.writeFile('./seeds.js', JSON.stringify(data), { encoding: 'utf-8' })
        .then(() => console.log('File successfully written to!'))
        .catch(e => console.error(e));
}

writeToFile();