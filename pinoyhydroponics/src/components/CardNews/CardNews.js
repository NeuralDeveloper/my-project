import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import './CardNews.css'


const CardNews = () => {
    return (
        <div className="cardnews">
            <CardDeck className="carddeckcss">
                <div className="row">
                <div className="col-sm">
                    <Card>
                        <Card.Img variant="top" src="https://robohash.org/14" />
                        <Card.Body>
                        <Card.Title>System Bundles</Card.Title>
                        <Card.Text>
                            We offer complete packages of systems and nutrients so you’ll get exactly what you need.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Read More</small>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="col-sm">
                    <Card>
                        <Card.Img variant="top" src="https://robohash.org/15" />
                        <Card.Body>
                        <Card.Title>Custom Designs</Card.Title>
                        <Card.Text>
                            AmHydro System Experts design custom systems, solutions, and business plans.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Read More</small>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="col-sm">
                    <Card>
                        <Card.Img variant="top" src="https://robohash.org/189" />
                        <Card.Body>
                        <Card.Title>Custom Designs</Card.Title>
                        <Card.Text>
                            AmHydro System Experts design custom systems, solutions, and business plans.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Read More</small>
                        </Card.Footer>
                    </Card>
                </div>
                </div>
            </CardDeck>
        </div>
    )
}

export default CardNews;