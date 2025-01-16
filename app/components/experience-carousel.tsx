import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image"

type PropType = {
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    const examples = [
        {
            exampleTitle: 'CV-Library - Website',
            exampleImage: 'https://i.imgur.com/XckuFPH.png',
            exampleCopy: 'Over three years, I was tasked with updating and maintaining web pages for the CV-Library site. The site has approximately 4.3 unique monthly visitors. My main area of focus was on user facing pages.',
            exampleTech: 'HTML, SASS, JavaScript (jQuery), Perl (TemplateToolkit), Jira, Gerrit, Figma, Adobe XD, Photoshop, Git.',
            linkTitle: 'Links to examples',
            linkATitle: 'CV-Library Homepage',
            linkALink: 'https://www.cv-library.co.uk/',
            linkBTitle: 'Timeline',
            linkBLink: 'https://www.cv-library.co.uk/about/timeline',
            linkCTitle: 'Work for Us',
            linkCLink: 'https://www.cv-library.co.uk/work-for-us',
            linkDTitle: 'About',
            linkDLink: 'https://www.cv-library.co.uk/about',
            linkStyle: 'flex lg:flex-row flex-col',
            linkStyleB: 'flex lg:flex-row flex-col'
        },
        {
            exampleTitle: 'CV-Library - Products',
            exampleImage: 'https://i.imgur.com/ETiFDhs.png',
            exampleCopy: 'During my time at CV-Library, I designed, prototyped and developed products for various clients. These included bespoke branding on job adverts and company profiles, as well as targeted advertisements for the CV-Library site.',
            exampleTech: 'Figma, Adobe Photoshop, Adobe XD, HTML, CSS, JavaScript, phpMyAdmin, Perl (TemplateToolkit).',
            linkStyle: 'hidden',
        },
        {
            exampleTitle: 'Guildford Pyre hot sauce - Design',
            exampleImage: 'https://i.imgur.com/4JsBI2U.png',
            exampleTech: 'Figma, Adobe Photoshop.',
            exampleCopy: 'Created a medieval-themed hot sauce brand and designed its e-commerce store. The project includes a complete branding concept inspired by historical aesthetics. A mock website for the design is planned, with both the design file and prototype currently available below.',
            linkTitle: 'Links to examples',
            linkATitle: 'Design file',
            linkALink: 'https://www.figma.com/design/SKj1N0jIYEnTwW118bp9p9/Design-Ideas?node-id=0-1&t=k8ynkdKUuqVM7xTP-1',
            linkBTitle: 'Prototype',
            linkBLink: 'https://www.figma.com/proto/SKj1N0jIYEnTwW118bp9p9/Design-Ideas?node-id=16-51&p=f&t=kjG1WlLv5xz0OTvA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A51',
            linkStyle: 'flex lg:flex-row flex-col',
            linkStyleB: 'hidden'
        },
        {
            exampleTitle: 'Hockey UI/UX - Design',
            exampleImage: 'https://i.imgur.com/WUsj532.png',
            exampleCopy: 'For a UX/UI for Gaming course, I created a mock-up for a NHL inspired Hockey game.',
            exampleTech: 'Figma, Adobe Photoshop.',
            linkStyle: 'hidden',
        },
        {
            exampleTitle: 'Graps on Film Store (WIP)',
            exampleImage: 'https://i.imgur.com/2UuCRVQ.png',
            exampleCopy: 'Currently working on an e-commerce store for a wrestling film company. The project is still in development, but the mock-up is available below.',
            exampleTech: 'Figma, Adobe Photoshop.',
            linkStyle: 'flex lg:flex-row flex-col',
            linkATitle: 'Design file',
            linkALink: 'https://www.figma.com/design/4iImN3tMFHcGIphC7rtpZZ/Graps-Site?node-id=301-44&t=WUKaMtKBAphNh6fZ-1',
            linkBTitle: 'Prototype',
            linkBLink: 'https://www.figma.com/proto/4iImN3tMFHcGIphC7rtpZZ/Graps-Site?node-id=539-2&p=f&t=3tggRtoFodt3uNGO-1&scaling=scale-down&content-scaling=fixed&page-id=301%3A44&starting-point-node-id=539%3A2',
            linkStyleB: 'hidden'
        },
    ]

    return (
        <section className="embla">
            <h2 className="text-2xl font-bold mb-2 font-mono">Portfolio</h2>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {examples.map((examples) => (
                        <div className="embla__slide mb-2" key={`${examples.exampleTitle}`}>
                            <div>
                                <h2 className="text-2xl font-bold">{`${examples.exampleTitle}`}</h2>
                                <div className="flex justify-center">
                                    <Image src={`${examples.exampleImage}`} key={`${examples.exampleImage}`}
                                           alt={`${examples.exampleTitle}`} width={1000} height={500} unoptimized
                                           className='flex content-center'/>
                                </div>
                                <p>{`${examples.exampleCopy}`}</p>
                                <h3 className="text-2xl mt-3 ">Tech used</h3>
                                <p>{`${examples.exampleTech}`}</p>
                                <h3 className="text-2xl mt-3">{`${examples.linkTitle  || ''}`}</h3>
                                <div className={`${examples?.linkStyle || ''}`}>
                                    <a className="mr-1 mb-2 lg:mb-0 bg-blue-950 bg-opacity-40 p-2 rounded-xl shadow-lg"
                                       target="_blank" href={`${examples.linkALink}`}>{`${examples.linkATitle || ''}`}</a>
                                    <a className="mr-1 mb-2 lg:mb-0 bg-blue-950 bg-opacity-40 p-2 rounded-xl shadow-lg"
                                       target="_blank" href={`${examples.linkBLink}`}>{`${examples.linkBTitle || ''}`}</a>
                                    <div className={`${examples.linkStyleB}`}>
                                        <a className="mr-1 mb-2 lg:mb-0 bg-blue-950 bg-opacity-40 p-2 rounded-xl shadow-lg"
                                           target="_blank"
                                           href={`${examples.linkCLink}`}>{`${examples.linkCTitle || ''}`}</a>
                                        <a className="mr-1 mb-2 lg:mb-0 bg-blue-950 bg-opacity-40 p-2 rounded-xl shadow-lg"
                                           target="_blank"
                                           href={`${examples.linkDLink}`}>{`${examples.linkDTitle || ''}`}</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
