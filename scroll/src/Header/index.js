import React ,{ useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring'
import './styles.css'
import C1 from '../Img/c1.jpg'
import C2 from '../Img/c2.jpg'

import C3 from '../Img/c3.jpg'
import C4 from '../Img/c4.jpg'



export default function Header() {


    const slides = [
        { id: 0, url: {C1} },
        { id: 1, url: {C2} },
        { id: 2, url: {C3} },
        { id: 3, url: {C4} },
    ]
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })

    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
    return transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            class="bg"
            style={{ ...props, backgroundImage: {C1, C2, C3, C4}}}
        />
    )






    );
}
