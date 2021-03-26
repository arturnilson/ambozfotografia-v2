import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
// import infantil01 from '/infantil01.JPG';
// import infantil02 from '/infantil02.JPG';
// import infantil03 from '/infantil03.JPG';
// import infantil04 from '/infantil04.JPG';
// import infantil05 from '/infantil05.JPG';
// import infantil06 from '/infantil06.JPG';
// import infantil07 from '/infantil07.JPG';
// import infantil08 from '/infantil08.JPG';
// import infantil09 from '/infantil09.JPG';
// import infantil10 from '/infantil10.JPG';


const projects = [
    {
        id: 1,
        photo: "/infantil01.JPG",
        text: "Project number one"
    },
    {
        id: 2,
        photo: "/infantil02.JPG",
        text: "Project number two"
    },
    {
        id: 3,
        photo: "/infantil03.JPG",
        text: "Project number three"
    },
    {
        id: 4,
        photo: "/infantil04.JPG",
        text: "Project number four"
    },
    {
        id: 5,
        photo: "/infantil05.JPG",
        text: "Project number four"
    },
    {
        id: 6,
        photo: "/infantil06.JPG",
        text: "Project number four"
    },
    {
        id: 7,
        photo: "/infantil07.JPG",
        text: "Project number four"
    },
    {
        id: 8,
        photo: "/infantil08.JPG",
        text: "Project number four"
    },
    {
        id: 9,
        photo: "/infantil09.JPG",
        text: "Project number four"
    },
    {
        id: 10,
        photo: "/infantil10.JPG",
        text: "Project number four"
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
}

const infantil = () => {
    return (

        <div className="container-full container-fluid">
            <h1 className="h1-events">Infantil</h1>
            <hr />
            <br />

            <SRLWrapper>
                <div id="content-page-one" className="content">
                    <div className="row">
                        <div className="col-md-4 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil01.JPG"
                                alt="Project number one"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil02.JPG"
                                alt="Project number 2"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil03.JPG"
                                alt="Project number 3"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil04.JPG"
                                alt="Project number 4"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil05.JPG"
                                alt="Project number 5"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil06.JPG"
                                alt="Project number 6"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil07.JPG"
                                alt="Project number 7"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil08.JPG"
                                alt="Project number 8"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil09.JPG"
                                alt="Project number 9"
                            />
                        </div>
                        <div className="col-md-6 col-12 col-image-small">
                            <Image
                                // className="image"
                                width={500}
                                height={500}
                                src="/infantil10.JPG"
                                alt="Project number one"
                            />
                        </div>
                    </div>
                </div>
            </SRLWrapper>



            {/* {projects && projects.map(img => (
                <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div
                        className='col-image-small'
                    >
                        <Image
                            key={img.id}
                            className="image"
                            width={500}
                            height={500}
                            src={img.photo}
                            alt={img.text}
                        />
                    </div>
                </div>
            ))} */}
            {/* <SRLWrapper options={options}>
                    <div className="row" md="3" lg="3" sm="1">
                        {projects && projects.map(img => (
                            <div className="col-xs-12 col-sm-6 col-lg-4">
                                <div
                                    className='col-image-small'
                                    key={img.id}
                                >
                                    <Image
                                        className="image"
                                        width={500}
                                        height={500}
                                        src={img.photo}
                                        alt={img.text}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </SRLWrapper> */}
        </div>

    )
}

export default infantil;