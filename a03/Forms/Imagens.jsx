import { useEffect, useState } from "react";

const Imagens = () => {
    const [imagens, setImagens] = useState(null);

    
}

const ImagensContainer = ({imagens}) => {
    return (
        <view>
            {
                imagens.map(imagem => {
                    <Image 
                        source=""
                    />
                })
            }
        </view>
    )
}
export default Imagens;