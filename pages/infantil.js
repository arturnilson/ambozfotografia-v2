const infantil = () => {
    return (
        <>
            <div className="container-full container-fluid">
                <h1 className="h1-events">Infantil</h1>
                <hr />
                <br />

            </div>



            {/* <Container fluid className="container-full">
                <h1 className="h1-events">Infantil</h1>
                <hr />
                <br />
                <SRLWrapper options={options}>
                    <Row md="3" lg="3" sm="1">
                        {projects && projects.map(img => (
                            <Col lg="4" md="4" sm="auto">
                                <motion.div className='col-image-small' key={img.id}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <motion.img className="image" src={img.photo} alt={img.text}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    />
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </SRLWrapper>
            </Container> */}
        </>
    )
}

export default infantil;