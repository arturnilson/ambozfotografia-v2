import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

const projects = [
    {
        id: 1,
        photo: "/infantil/infantil01.JPG",
        text: "Foto Infantil 1",
        width: 6000,
        height: 4000
    },
    {
        id: 2,
        photo: "/infantil/infantil02.JPG",
        text: "Foto Infantil 2",
        width: 6000,
        height: 4000
    },
    {
        id: 3,
        photo: "/infantil/infantil03.JPG",
        text: "Foto Infantil 3",
        width: 6000,
        height: 4000
    },
    {
        id: 4,
        photo: "/infantil/infantil04.JPG",
        text: "Foto Infantil 4",
        width: 3961,
        height: 5941,
    },
    {
        id: 5,
        photo: "/infantil/infantil05.JPG",
        text: "Foto Infantil 5",
        width: 3961,
        height: 5941,
    },
    {
        id: 6,
        photo: "/infantil/infantil06.JPG",
        text: "Foto Infantil 6",
        width: 3961,
        height: 5941,
    },
    {
        id: 7,
        photo: "/infantil/infantil07.JPG",
        text: "Foto Infantil 7",
        width: 6000,
        height: 4000
    },
    {
        id: 8,
        photo: "/infantil/infantil08.JPG",
        text: "Foto Infantil 8",
        width: 6000,
        height: 4000
    },
    {
        id: 9,
        photo: "/infantil/infantil09.JPG",
        text: "Foto Infantil 9",
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

const infantil = () => {
    return (
        <div className="container-full container-fluid">
            <h1 className="h1-events">Infantil</h1>
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

export default infantil;