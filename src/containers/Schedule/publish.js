import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import Dropzone from '../../components/uielements/dropzone';
import Image from '../../image/upload.png';
import Form from '../../components/uielements/form';
import Radio, { RadioGroup } from '../../components/uielements/radio';
import Collapse from '../../components/uielements/collapse';
import Alert from '../../components/feedback/alert';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;


class Evento extends Component {
  render() {
       const config = {
      iconFiletypes: ['.img'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
   };

   const PublishLayout = {
    height: '180vh'
};

// BUTTONS 

const ButtonOne = {
  backgroundColor: '#0E2E5D',
  color: '#ffffff',
  marginLeft: '40px',
  marginTop: '10px',
  width:'70%'

}


const ButtonTwo = {
  marginLeft: '40px',
  marginTop: '10px',
   width:'70%'
}

const ButtonThree = {
  backgroundColor: '#FF0000',
  color: '#ffffff',
  marginLeft: '40px',
  marginTop: '10px',
  width:'70%'
}  

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

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    };




    return (
      <LayoutContentWrapper style={PublishLayout}>
        <LayoutContent>
          <Row justify="start" >
            <Col md={24} sm={24} xs={24}>
              <Box 
              title="Drive / Programação do Evento" 
              subtitle=" 5. Visualize, Salve e Publique seu MidiaCode" >
                <ContentHolder>
                  <Col md={12} sm={12} xs={12}>
                    <Form layout="vertical">
                      <FormItem label=""> 

 
                    <Button style={{ margin: '15px 10px 15px 10px', marginLeft: '190px'}}>
                        Adicionar Atividade   
                    </Button>
                      </FormItem>
                    </Form>
                  </Col>
                   
                  
                  <Col md={8} sm={8} xs={8}>
                      <Button type="default" style={ButtonOne}> Atualizar  e Notificar </Button>
                  </Col>
                  <br>
                  </br>
                  <Col md={8} sm={8} xs={8}>
                      <Button type="default" style={ButtonThree}> Salvar e Publicar </Button>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Button  style={ReturnButton}>
                    <Link to="evento">
                        Voltar   
                      </Link>  
                    </Button>
                    <Button disabled style={NextButton}>
                        Próximo   
                    </Button>
                    <h3 align="center">Permissões</h3>

                    <ContentHolder>
                <RadioGroup>
                  <Radio style={radioStyle}>Visualização Publica</Radio>
                  <Radio style={radioStyle}>Permite o compartilhamento</Radio>
                </RadioGroup>

              </ContentHolder>

               
              <Button type="default" style={StyleQR}>
                  Baixe seu QR code
              </Button>
              <br>
              </br>

              <Button  style={{ margin: '15px 10px 15px 10px', marginLeft: '20px'}}>
                        Use no   
                    </Button>
                    <Button>
                        Use no  Digital  
                    </Button>

              <h3>Link e embed no seu site</h3>

              <Button  style={{ margin: '15px 10px 15px 10px', marginLeft: '20px'}}>
                        Link do MidiaCode   
                    </Button>
                    <Button>
                        Use no    
                    </Button>

             <Button type="default" style={{marginLeft: '40px', marginTop: '10px', width:'69%'}}>
                  [Copiar embed HTML]
              </Button>


               <h3>Compartilhar nas redes sociais</h3>

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