import { Image, ImageContainer, ImageRow, ImagesContainer } from './ui-elements/Images';
import React, { useEffect, useState } from 'react';
import data from '../json/images.json';

const Home = () => {
    const [ loaded, setLoaded ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ images, setImages ] = useState([]);

    useEffect(() => {
        // fetch('https://www.instagram.com/nicolas2bert/?__a=1')
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         } else {
        //             throw new Error('Something went wrong ...');
        //         }
        //     })
        //     .then(data => {
        //         const edges = data.graphql.user.edge_owner_to_timeline_media.edges;
        //         const images = edges.map(e => {
        //             return {
        //                 source: e.node.thumbnail_resources[3].src,
        //             };
        //         });
        //         setImages(images);
        //     })
        //     .catch(error => setError(error))
        //     .finally(() => setLoaded(true));
        const edges = data.graphql.user.edge_owner_to_timeline_media.edges;
        const images = edges.map(e => {
            return {
                source: e.node.thumbnail_resources[3].src,
            };
        });
        setImages(images);
        setLoaded(true);
    }, []);

    if (!loaded) {
        <div> Loading </div>;
    }

    if (!error) {
        <div> Error </div>;
    }

    return <ImagesContainer>
        {
            images.map((image, key) =>
                <ImageContainer key={key}>
                    <Image src={image.source}/>
                </ImageContainer>)
        }
    </ImagesContainer>;
};

export default Home;
