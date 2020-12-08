import * as E from './ui-elements/Experience';
import * as T from './ui-elements/TopLayout';
import { Container, H1, H2 } from './ui-elements/Container';
import { Image, ImageContainer, ImagesContainer, Title } from './ui-elements/Images';
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
                href: e.node.shortcode,
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

    // replace './img/test.png' by { image.source }
    return <div>
        <T.Container>
            <Container>
                <T.Title>
                    <H2> introduction </H2>
                </T.Title>
                <H1> Hi! I am Nicolas Humbert. <br/>
                    Software Engineer. <br/>
                    Based in New York.
                </H1>
            </Container>
        </T.Container>
        <Container>
            <Title> <H2> experience </H2> </Title>
            <E.Container>
                <E.Row>
                    <E.Date> Feb 2020 – Present </E.Date>
                    <E.Description>
                        <E.Role>
                            Technical Lead
                        </E.Role>
                        <E.Location>
                            Scality - New York, USA
                        </E.Location>
                    </E.Description>
                </E.Row>
                <E.Row>
                    <E.Date> Jun 2016 – Present </E.Date>
                    <E.Description>
                        <E.Role>
                            Software Engineer
                        </E.Role>
                        <E.Location>
                            Scality - San Francisco, USA
                        </E.Location>
                    </E.Description>
                </E.Row>
            </E.Container>
            <Title> <H2> about me </H2> </Title>
            <ImagesContainer>
                {
                    images.map((image, key) =>
                        <ImageContainer key={key}>
                            <a href={`https://www.instagram.com/p/${image.href}`} rel='noreferrer' target='_blank'>
                                <Image alt='I am a picture' src={ image.source }/>
                            </a>
                        </ImageContainer>)
                }
            </ImagesContainer>
        </Container>
    </div>;
};

export default Home;
