import React from 'react'

import {
  Container,
  Row,
  Col,
  Spacer
} from '../../lib'

import Layout from './master'

import Icon from '../components/Icon'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

const Home = () => (
  <Layout>
    <Header />
    <Jumbotron />


    <Spacer my={6} />

    <Container>
      <Row>
        <Col span={12}>

          <h1 className="fs-heading fw-600">
            Guiding Priciples
          </h1>

          <Spacer my={5} />

          <div className="flex flex-top">
            <div className="w-10p">
              <Icon
                icon="reuse"
                className="current-fill c-blue"
              />
            </div>
            <div className="ml-6">
              <p className="fs-body-3 fw-500 mb-2">
                Reuse over reinvent
              </p>
              <p className="fs-body-2 lh-copy c-grey-80">
                All Bento components are built with the intention of reuse. It's flexible api's allow it to be used in various contexts.
              </p>
            </div>
          </div>

          <Spacer my={5} />

          <div className="flex flex-top">
            <div className="w-10p">
              <Icon
                icon="increase"
                className="current-fill c-blue"
              />
            </div>
            <div className="ml-6">
              <p className="fs-body-3 fw-500 mb-2">
                Increase efficiency
              </p>
              <p className="fs-body-2 lh-copy c-grey-80">
                Bento enables complex interfaces to be built rapidly thereby freeing up time for focusing on other critical tasks
              </p>
            </div>
          </div>

          <Spacer my={5} />

          <div className="flex flex-top">
            <div className="w-10p">
              <Icon
                icon="idea"
                className="current-fill c-blue"
              />
            </div>
            <div className="ml-6">
              <p className="fs-body-3 fw-500 mb-2">
                Evolve and adapt
              </p>
              <p className="fs-body-2 lh-copy c-grey-80">
                This system will always be a work in progress. It will evolve and adapt according to the design and development requirements
              </p>
            </div>
          </div>

          <Spacer my={5} />

          <div className="flex flex-top">
            <div className="w-10p">
              <Icon
                icon="speech"
                className="current-fill c-blue"
              />
            </div>
            <div className="ml-6">
              <p className="fs-body-3 fw-500 mb-2">
                Establish Vocabulary
              </p>
              <p className="fs-body-2 lh-copy c-grey-80">
                Bento bridges the gap between designers and developers and allows them to communicate using a shared vocabulary.
              </p>
            </div>
          </div>

        </Col>

        <Col span={8} offset={4}>
          <h1 className="fs-heading fw-600">
            Resources
          </h1>

          <Spacer my={5} />

          <div className="ba bc-grey-20 p-5 br-4 hover:bg-grey-10 c-pointer flex flex-middle">
            <Icon
              icon="sketch"
              className="mr-4 current-fill c-grey-70 w-30 h-30"
            />
            <p className="fs-body-2 fw-500 c-grey-60">
              Download Sketch library
            </p>
          </div>

          <Spacer my={2} />

          <div className="ba bc-grey-20 p-5 br-4 hover:bg-grey-10 c-pointer flex flex-middle">
            <Icon
              icon="bitbucket"
              className="mr-4 current-fill c-slate h-30 w-30"
            />
            <p className="fs-body-2 fw-500 c-grey-60">
              Visit Bitbucket repository
            </p>
          </div>

        </Col>
      </Row>
    </Container>

    <Spacer my={15} />

    <Footer />

  </Layout>
)

export default Home
