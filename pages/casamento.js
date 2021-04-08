import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

const projects = [
    {
        id: 1,
        photo: "/casamento/casamento01.JPG",
        text: "Foto Casamento 1",
        width: 6000,
        height: 4000
    },
    {
        id: 2,
        photo: "/casamento/casamento02.JPG",
        text: "Foto Casamento 2",
        width: 6000,
        height: 4000
    },
    {
        id: 3,
        photo: "/casamento/casamento03.JPG",
        text: "Foto Casamento 3",
        width: 6000,
        height: 4000
    },
    {
        id: 4,
        photo: "/casamento/casamento04.JPG",
        text: "Foto Casamento 4",
        width: 6000,
        height: 4000,
    },
    {
        id: 5,
        photo: "/casamento/casamento05.JPG",
        text: "Foto Casamento 5",
        width: 6000,
        height: 4000,
    },
    {
        id: 6,
        photo: "/casamento/casamento06.JPG",
        text: "Foto Casamento 6",
        width: 6000,
        height: 4000,
    },
    {
        id: 7,
        photo: "/casamento/casamento07.JPG",
        text: "Foto Casamento 7",
        width: 6000,
        height: 4000
    },
    {
        id: 8,
        photo: "/casamento/casamento08.JPG",
        text: "Foto Casamento 8",
        width: 6000,
        height: 4000
    },
    {
        id: 9,
        photo: "/casamento/casamento09.JPG",
        text: "Foto Casamento 9",
        width: 6000,
        height: 4000
    }
];

const options = {
    settings: {
        disablePanzoom: true,
        disableWheelControls: true
    },
    buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '10px',
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: false,
        size: '40px'
    },
    thumbnails: {
        thumbnailsSize: ["120px", "100px"],
        thumbnailsOpacity: 0.4
    },
    caption: {
        showCaption: false
    }
}

const casamento = () => {
    return (
        <div className="container-full container-fluid">
            <h1 className="h1-events">Casamento</h1>
            <br />
            <SRLWrapper options={options}>
                <div id="content-page-one" className="content">
                    <div className="row">
                        {projects && projects.map(img => (
                            <div className="col-md-4 col-12 col-image-small image-div">

                                {img.width === 6000 ?
                                    <Image
                                        key={img.id}
                                        src={img.photo}
                                        alt={img.text}
                                        className="image"
                                        layout="responsive"
                                        quality={10}
                                        width={6000}
                                        height={4000}
                                    />
                                    :
                                    <Image
                                        key={img.id}
                                        src={img.photo}
                                        alt={img.text}
                                        className="image"
                                        layout="responsive"
                                        quality={10}
                                        width={3961}
                                        height={5941}
                                    />}
                            </div>
                        ))}
                    </div>
                </div>
            </SRLWrapper>
        </div>
    )
}

export default casamento;