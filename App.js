import React, { Component } from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import imgHeader from './imgHeader.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import product1 from './product1.png'
import product2 from './product2.png'
import product3 from './product3.png'
import product4 from './product4.png'
import product5 from './product5.png'
import product6 from './product6.png'
import ImageSecondBanner from './ImageSecondBanner.png'

const ProductCard = ({ img, name, price }) => (
  <div>
    <img className={'image-header'} alt={'img-header'} src={img} />
    <div className={'text-normal product'}>{name}</div>
    <div className={'text-small product'}>{price}</div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h3 className="brand">Septemberis 12</h3>
          <div className={'bar-button'}>
            <Button color="secondary" className={'button text'}>
              HOME
            </Button>
            <Button className={'button text'}>PRODUCTS</Button>
            <Button className={'button text'}>PROJECTS</Button>
            <Button className={'button text'}>SERVICE</Button>
            <Button className={'button text'}>ARTICLE</Button>
            <Button className={'button text'}>CONTACT</Button>
          </div>
          <div className={'login-button'}>
            <Button className={'button text join'}>JOIN</Button>
            <Button className={'button text'}>LOGIN</Button>
            <ShoppingCartIcon />
          </div>
        </div>
        <Grid container className={'first-container'}>
          <Grid className={'text-bunddle'} item xs={4}>
            <div className={'text-left'}>
              <div className="text-small secondary">Let's Create</div>
              <div className="text-large">Spaces</div>
              <div className="text-large">That inspire.</div>
              <div className="text-small ">
                Transforming living spaces into <br /> award winning homes.
              </div>
              <div className={'button secondary'}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={'button text'}
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <img className={'image-header'} alt={'img-header'} src={imgHeader} />
              </Grid>
              <Grid item xs={4}>
                <div className="text-small">01</div>
                <div className="text-small">
                  Contemporary New Build <br /> With Character.
                </div>
                <div className="text-super-small">London</div>
              </Grid>
              <Grid item xs={4}>
                <div className="text-small">02</div>
                <div className="text-small">
                  Riverside Apartment With <br /> Stunning Views.
                </div>
                <div className="text-super-small">Manchester</div>
              </Grid>
              <Grid item xs={4}>
                <div className="text-small">03</div>
                <div className="text-small">
                  City Living With Country <br /> Character.
                </div>
                <div className="text-super-small">Paris</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className={'text-large title spacing'}>New Arrivals</div>
          </Grid>

          <Grid container spacing={32}>
            {[product1, product2, product3, product4, product5, product6].map(
              number => (
                <Grid item xs={4}>
                  <ProductCard
                    img={number}
                    name="A Style From History"
                    price="USD 200"
                  />
                </Grid>
              )
            )}
            {/* <Grid item xs={4}>
              <ProductCard
                img={product1}
                name="A Style From History"
                price="USD 200"
              />
            </Grid>
            <Grid item xs={4}>
              <img className={'image-header'} src={product2} />
              <div className={'text-normal product'}>A Style From History</div>
              <div className={'text-small product'}>USD 200</div>
            </Grid>
            <Grid item xs={4}>
              <img className={'image-header'} src={product3} />
              <div className={'text-normal product'}>A Style From History</div>
              <div className={'text-small product'}>USD 200</div>
            </Grid>
            <Grid item xs={4}>
              <img className={'image-header'} src={product4} />
              <div className={'text-normal product'}>A Style From History</div>
              <div className={'text-small product'}>USD 200</div>
            </Grid>
            <Grid item xs={4}>
              <img className={'image-header'} src={product5} />
              <div className={'text-normal product'}>A Style From History</div>
              <div className={'text-small product'}>USD 200</div>
            </Grid>
            <Grid item xs={4}>
              <img className={'image-header'} src={product6} />
              <div className={'text-normal product'}>A Style From History</div>
              <div className={'text-small product'}>USD 200</div>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid container className={'second-banner-spacing'}>
          <Grid container className={'second-banner'}>
            <Grid item xs={6}>
              <div className={'text-bundle-second'}>
                <div className="text-small product secondary">5 0 % O F F</div>
                <div className={'text-large title'}>
                  ACCESSORIES <br /> BIG SALE
                </div>
                <div className={'button-promo'}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={'button text'}
                  >
                    GET PROMOCODE
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <img
                className={'image-header second-banner'}
                alt={'img-header second-banner'}
                src={ImageSecondBanner}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App
