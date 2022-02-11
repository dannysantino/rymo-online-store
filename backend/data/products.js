const products = [
    {
        name: "T-Shirt - Blue",
        imageUrl: "/img/shop/1.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 173.99,
        countInStock: 12,
    },
    {
        name: "Footsik Sneakers - White",
        imageUrl: "/img/shop/2.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 128.99,
        countInStock: 12,
    },
    {
        name: "Strapped Purse: Women - Blue",
        imageUrl: "/img/shop/3.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 185.99,
        countInStock: 9,
    },
    {
        name: "Casual Shoes: Men - Blue",
        imageUrl: "/img/shop/4.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 172.99,
        countInStock: 18,
    },
    {
        name: "Beanie Hat - Silver",
        imageUrl: "/img/shop/5.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 151.99,
        countInStock: 17,
    },
    {
        name: "Hoodie Jacket: Women - Burgundy",
        imageUrl: "/img/shop/6.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 113.99,
        countInStock: 19,
    },
    {
        name: "Casual Shoes: Men - Blue Sole",
        imageUrl: "/img/shop/7.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 125.99,
        countInStock: 5,
    },
    {
        name: "Hoodie Winter Jacket - Blue",
        imageUrl: "/img/shop/8.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 105.99,
        countInStock: 11,
    },
    {
        name: "Single-strap Backpack - Green",
        imageUrl: "/img/shop/9.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 114.99,
        countInStock: 9,
    },
    {
        name: "Wrist Watch - Brown",
        imageUrl: "/img/shop/10.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 148.99,
        countInStock: 6,
    },
    {
        name: "Cowboy Hat: Men - Blue",
        imageUrl: "/img/shop/11.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 123.99,
        countInStock: 9,
    },
    {
        name: "Sneakers - Plain White",
        imageUrl: "/img/shop/12.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 150.99,
        countInStock: 16,
    },
    {
        name: "Wrist Watch - Silver",
        imageUrl: "/img/shop/13.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 114.99,
        countInStock: 12,
    },
    {
        name: "Hightops: Men - Brown",
        imageUrl: "/img/shop/14.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 83.99,
        countInStock: 15,
    },
    {
        name: "Beanie Hat - Gray",
        imageUrl: "/img/shop/15.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 121.99,
        countInStock: 15,
    },
    {
        name: "T-Shirt - Purple",
        imageUrl: "/img/shop/16.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 103.99,
        countInStock: 19,
    },
    {
        name: "Jacket: Women - Multi-brand Design",
        imageUrl: "/img/shop/17.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 122.99,
        countInStock: 20,
    },
    {
        name: "Baseball Hat - Yellow",
        imageUrl: "/img/shop/18.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 155.99,
        countInStock: 10,
    },
    {
        name: "Hoodie + Beanie: Men - Black",
        imageUrl: "/img/shop/19.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 187.99,
        countInStock: 11,
    },
    {
        name: "Casual Dress + Pants: Women - Multicolored",
        imageUrl: "/img/shop/20.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 104.99,
        countInStock: 17,
    },
    {
        name: "Sweater: Men - Black",
        imageUrl: "/img/shop/21.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 144.99,
        countInStock: 16,
    },
    {
        name: "Backpack - Blue",
        imageUrl: "/img/shop/22.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 198.99,
        countInStock: 10,
    },
    {
        name: "Casual Shirt - Green",
        imageUrl: "/img/shop/23.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 198.99,
        countInStock: 12,
    },
    {
        name: "T-Shirt - White",
        imageUrl: "/img/shop/24.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 148.99,
        countInStock: 7,
    },
    {
        name: "T-Shirt - Red",
        imageUrl: "/img/shop/25.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 118.99,
        countInStock: 14,
    },
    {
        name: "T-Shirt - Green",
        imageUrl: "/img/shop/26.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique quasi exercitationem? Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex tenetur. Maiores fugit veniam ratione quaerat?",
        price: 148.99,
        countInStock: 18,
    }
]

module.exports = products;