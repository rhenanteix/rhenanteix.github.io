import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import BasicMap from '../Map/GoogleMap/maps/basic';
import InputSearch from '../../components/uielements/input';
import InputNumber from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import { Link } from 'react-router-dom';
import Slider from '../../components/uielements/slider';

class Maps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 10,
    };
  }
  
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    return (
      <LayoutContentWrapper style={{ height: '120vh' }}>
        <LayoutContent>
          <Row justify="start" >
            <Col md={24} sm={24} xs={24}>
              <Box 
              title="Drive / Criar novo Conteúdo" 
              subtitle="2. Geolocalização, no app midiacode, digitar seu endereço para compartilhar seu lugar" >   
                <ContentHolder>
                  <Col md={12} sm={12} xs={12}>
                    <InputSearch style={{ width: '60%', marginRight:'5px', marginBottom: '15px' }}placeholder="Digite seu endereço" />
                    <Button type="primary"> Pesquisar </Button>
                    <BasicMap />
                    <Col style={{marginTop: '10px', marginRight: '15px', width: '75%' }} md={10} sm={10} xs={10}>
                      <Slider min={10} max={400} onChange={this.onChange} />
                    </Col>
                    <Col style={{marginTop: '10px' }} md={2} sm={2} xs={2}>
                      <InputNumber
                        min={10}
                        max={400}
                        size="small"
                        value={this.state.inputValue}
                        onChange={this.onChange}
                      />
                    </Col> 
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Button type="primary" style={{width:'69%', marginLeft: '10px', marginBottom: '10px' }}> Salvar e Publicar </Button>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Button style={{ marginRight: '10px', marginLeft: '10px' }}>
                      <Link to="content">
                        Voltar   
                      </Link>
                    </Button>
                    <Button> 
                      <Link to="contentUpload">
                        Próximo 
                      </Link>
                    </Button>
                  </Col>
                  
                  {/* <span> Escolher a distância de 10 a 400 metros. </span> <br /> */}
                  
                  {/* <span> O usuário irá encontrar seu conteúdo pelo Midiacode Explorer </span> */}
                </ContentHolder>
              </Box>
            </Col>
          </Row>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default Maps;
