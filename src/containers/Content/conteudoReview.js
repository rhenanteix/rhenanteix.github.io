import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import { Col, Row, Icon } from 'antd';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import Image from '../../image/review.png';
import Dropzone from '../../components/uielements/dropzone';
import Button from '../../components/uielements/button';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    const config = {
      iconFiletypes: ['.pdf'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };
    const djsConfig = {
      autoProcessQueue: false 
    };
    const eventHandler = {
      addedfile: (file) => console.log(file)
    };  

    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <Row justify="start" align="middle" >
            <Col md={24} sm={24} xs={24}>
              <Box 
              title="Drive / Criar novo Conteúdo" 
              subtitle="4. Visualize, Salve e Publique seu Midiacode." >
                <ContentHolder>
                  <Col md={12} sm={12} xs={12} style={{textAlign: 'center'}}>
                    <img alt="" src={Image} style={{width: '40%'}}/>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Button type="primary" style={{marginLeft: '10px', width:'69%'}}> Salvar Rascunho </Button>
                    <Button type="primary" style={{marginLeft: '10px', marginTop: '10px', width:'69%'}}> Atualizar e Notificar </Button>
                    <Button type="primary" style={{marginLeft: '10px', marginTop: '10px', width:'69%'}}> Salvar e Publicar </Button>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Button style={{ margin: '15px 10px 15px 10px'}}>
                      <Link to="conteudoUpload">
                        Voltar   
                      </Link>
                    </Button>
                    <Button disabled > 
                        Próximo 
                    </Button>
                  </Col>
                </ContentHolder>
              </Box>
            </Col>
          </Row>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}