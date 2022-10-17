import { useState } from "react"
import { Card, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from "reactstrap"
import { DirectionalSection } from "../../../components/directional-section/directional-section"

import BenchMp4 from '../../../assets/mp4s/gym/bench.mp4'
import SquatMp4 from '../../../assets/mp4s/gym/squat.mp4'
import DeadMp4 from '../../../assets/mp4s/gym/deadlift.mp4'

export const PowerliftingInterest = () => {

    const [index, setIndex] = useState(0);

    const carouselVideo = (src: string, title: string, weight: string) => (
        <CarouselItem key={title} >
            <video className="img-fluid" autoPlay loop muted>
                <source height='40%' width='40%' src={src} type="video/mp4" />
            </video>
            <CarouselCaption
                captionHeader={title}
                captionText={weight}
            />
        </CarouselItem>
    )


    const videoCarousel = () => {
        const items = [
            carouselVideo(SquatMp4, 'Squat', '170x2 - 181Kg'),
            carouselVideo(BenchMp4, 'Bench', '120x1 - 124Kg'),
            carouselVideo(DeadMp4, 'Deadlift', '170x5 - 198Kg')
        ]

        const next = () => setIndex((index+1)%items.length)
        const prev = () => setIndex(index-1 >= 0 ? (index-1) : items.length-1)
        return (
            <Carousel
                activeIndex={index}
                next={next}  
                previous={prev}  
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={index}
                    onClickHandler={setIndex}
                />
                {items.map(item => item)}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={prev}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        );
    };
    
    const subTitle = () => (
        <>
            <p>Powerlifting is a strength sport where the goal is to score the highest total weight lifted between a single squat, bench press and deadlift.</p> 
            <p>I enjoy the sport casually as a way to measure my progress and compare against local and global lifters as a means of motivation.</p> 
            <p>Shown is an excerpt of my tracking spreadsheet showing my current max in each lift, along with a graph showing the total.</p> 
        </>
    )

    return <DirectionalSection 
            direction='left'
            title='Powerlifting'
            body={subTitle()}
            altBody={[
                <Card className='powerlifting-spreadsheet'>
                    {/* <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_ArJfuBbNYeL7NMr3T2N82_CUu_74aeNnzCdAmDJwQwUY3k-_Cq8_iCR9vUMlZA_agLS9yd9MiFY6/pubhtml?gid=1675255835&amp;single=true&amp;widget=true&amp;headers=false&amp;chrome=false"></iframe> */}
                </Card>
            ]}
        />
}