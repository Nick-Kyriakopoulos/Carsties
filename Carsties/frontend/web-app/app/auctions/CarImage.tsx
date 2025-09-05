'use client'

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  imageUrl: string;
}

export default function CarImage({ imageUrl }: Props) {
    const [isLoading, setIsLoading] = useState(true);

    return (
     <Image
        src={imageUrl}
        alt='Image of car'
        fill
        className={`
            object-cover duration-700 ease-in-out
            ${isLoading ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
        `}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        onLoad={() => setIsLoading(false)}
     />
  )
}
