import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import Button from '../../components/uielements/button';
import Dropzone from '../../components/uielements/dropzone';
import Image from '../../image/upload.png';
import Form from '../../components/uielements/form';
import Collapse from '../../components/uielements/collapse';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;


class Evento extends Component {
  render() {
       const config = {
      iconFiletypes: ['.img'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };


    const ReturnButton = {
        margin: '15px 10px 15px 10px',
        marginLeft: '40px'
    };


    const NextButton = {
      backgroundColor: '#888888',
      color: '#ffffff'
    };

        const StyleQR = {
      color: '#ffffff',
      backgroundColor: '#BBBBBB',
      marginLeft: '40px',
      marginTop: '10px',
      width:'69%'
    };

    const StyleContent = {
      color: '#ffffff',
      backgroundColor: '#454545',
      marginLeft: '40px',
      marginTop: '15px',
      width:'69%'

    };

    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <Row justify="start" >
            <Col md={24} sm={24} xs={24}>
              <Box 
              title="Drive / Programação do Evento" 
              subtitle=" 3. Selecionar uma data e criar sua Programação" >
                <ContentHolder>
                  <Col md={12} sm={12} xs={12}>
                    <Form layout="vertical">
                      <FormItem label=""> 

                        <Collapse accordion >

                        </Collapse>
                   
 
                    <Button style={{ margin: '15px 10px 15px 10px', marginLeft: '190px'}}>
                        Adicionar Atividade   
                    </Button>
                      </FormItem>
                    </Form>
                  </Col>               
                  <Col md={8} sm={8} xs={8}>
                      <Button type="default" style={{marginLeft: '40px', width:'69%'}}> Salvar e Publicar </Button>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Button style={ReturnButton}>
                        <Link to="trilha">
                        Voltar   
                      </Link>    
                    </Button>

                    <Button style={NextButton}>
                     <Link to="publish">
                        Próximo   
                      </Link> 
                    </Button>
                    <Box>
               <Col md={20} sm={20} xs={20} >
                  <Dropzone config={config}>
                    </Dropzone>  
                </Col>

              </Box>
              <Button type="default" style={StyleQR}>
                  Baixe seu QR code
              </Button>
              <br>
              </br>
              <Button type="default" style={StyleContent}>
                  Vincular conteudo a um canal
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

export default Evento;