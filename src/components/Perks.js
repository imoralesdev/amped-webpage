import { 
    Perks,
    PerksHeader,
    PerksSubHeader,
    PerksItemsList,
    PerksItems,
    PerksBlock,
    PerksBlockImage,
    PerksBlockText,
    PerksBlockTextItem 
} from '../styles/Perks'

const perksImages = [
    {
        id: 1,
        url: 'https://ampedfitness.s3.amazonaws.com/ampedfitness-perks-2.png',
        text: 'Personal training',
        color: '#69D7FF'
    },{
        id: 2,
        url: 'https://ampedfitness.s3.amazonaws.com/ampedfitness-perks-1.png',
        text: 'Revamped recovery',
        color: '#ABE8FF'
    },{
        id: 3,
        url: 'https://ampedfitness.s3.amazonaws.com/ampedfitness-perks-3.png',
        text: 'Group classes',
        color: '#D7F4FF'
    },
]

export default function() {
    return (
        <Perks>
            <PerksHeader>All the perks</PerksHeader>
            <PerksSubHeader>24/7 access <span /> No contract</PerksSubHeader>
            <PerksItemsList>
                <PerksItems>one</PerksItems>
                <PerksItems>two</PerksItems>
                <PerksItems>three</PerksItems>
                <PerksItems>four</PerksItems>
                <PerksItems>five</PerksItems>
                <PerksItems>six</PerksItems>
            </PerksItemsList>
            {
               perksImages.map(item => {
                   return(
                       <PerksBlock key={item.id}>
                           <PerksBlockImage>
                               <img src={item.url} />
                           </PerksBlockImage>
                           <PerksBlockText style={{ backgroundColor: `${item.color}` }}>
                               <PerksBlockTextItem>{item.text}</PerksBlockTextItem>
                           </PerksBlockText>
                       </PerksBlock>
                   )
               }) 
            }
        </Perks>
    )
}