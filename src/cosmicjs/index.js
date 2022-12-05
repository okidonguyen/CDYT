const Cosmic = require('cosmicjs');
const api = Cosmic();

export const bucket = api.bucket({
    slug: 'cdyt-production',
    read_key: 'rzSv8CHChQgYql0xsOZ1igGdXTntjzZZ66LscRJXOJM0uEwZWE',
});

const CosmicAPI = () => {
    // API CONNECT

    // GET ALL POST
    const getAllPosts = async () => {
        const data = await bucket.objects
            .find({
                type: 'trangchu-tintuc',
            })
            .props('slug,title,metadata');
        return data.objects;
    };

    // GET ALL POST FOR NEWS
    const getNewsFeatures = async () => {
        let items = [{}];
        const data = await bucket.objects
            .find({
                type: 'trangchu-tintuc',
                'metadata.bai_viet_noi_bat': true,
            })
            .props('slug,title,metadata');

        console.log(data);
        data.objects.map((item) =>
            items.push({
                src: require('~/assets/images/banner/banner-3.jpg'),
                slug: item['slug'],
                title: item['title'],
                content: item['metadata']['shorttext'].substring(0, 180) + ' ...',
                date: item['metadata']['ngaythang'],
            })
        );

        return items;
    };
};
