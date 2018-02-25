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
import Datepicker from '../../components/uielements/datePicker';
import Select, { SelectOption } from '../../components/uielements/select';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;
const Option = SelectOption;

class Schedule extends Component {
  render() {

       const config = {
      iconFiletypes: ['.img'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };


     const AddButton = {
      backgroundColor: '#DDDDDD',
      color: '#ffffff',
      marginLeft: '0px',
      marginTop: '-10px',
      width:'40%'
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

    const StyleLayout = {
      height: '120vh'
    };

    const SaveButton = {
       marginLeft: '40px',
       width:'69%'
    };

    const ReturnButton = {
        margin: '15px 10px 15px 10px',
        marginLeft: '40px'
    };


    const NextButton = {
      backgroundColor: '#888888',
      color: '#ffffff'
    };

    return (
      <LayoutContentWrapper style={StyleLayout}>
        <LayoutContent>
          <Row justify="start" >
            <Col md={24} sm={24} xs={24}>
              <Box 
              title="Drive / Programação do Evento" 
              subtitle="1. Criar um evento e selecione as datas do evento" >
                <ContentHolder>
                  <Col md={12} sm={12} xs={12}>
                    <Form layout="vertical">
                      <FormItem label="Título">
                        <Input placeholder="Atribua um nome curto que chame atenção"/>
                        <span> Forneça um nome para o evento </span>
                      </FormItem>
                      <FormItem label="Localização"> 
                        <Input placeholder="Insira o local usando o CEP."/>
                        <span> Evento online. Inserir endereço </span>
                      </FormItem>
                      <FormItem label="Datas"> 
                        <div style={{ border: '1px solid' }} >
                          <Datepicker placeholder="Data" style={{width: '95%', margin: '10px' }} />
                          <Input size="default" style={{width: '46%', marginBottom: '10px', marginLeft:'10px', marginRight: '14px' }} placeholder="Atribua tema"/>
                          <Select size="small" style={{width: '46%', marginBottom: '10px'}} placeholder="Atribua Cor" >
                            <Option value="Cor1" > Cor 1 </Option>
                            <Option value="Cor2" > Cor 2 </Option>
                          </Select>
                          <div style={{textAlign: 'right'}}>  
                            <Icon type="delete" style={{ marginLeft: '10px', marginRight: '10px'}} /> 
                          </div>
                        </div>
                      </FormItem>

                      <Button style={AddButton}>
                        Adicionar Data
                      </Button>
               
                    </Form>
                  </Col>               
                  <Col md={8} sm={8} xs={8}>
                      <Button type="default" style={SaveButton}> Salvar e Publicar </Button>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Button disabled style={ReturnButton}>
                        Voltar   
                    </Button>
                    <Button  style={NextButton}>
                     <Link to="trilha">
                        Próximo   
                      </Link> 
                    </Button>
                    <Box>
               <Col md={20} sm={20} xs={20} >
                  <Dropzone config={config} img="img/upload.png">

              </Dropzone>  
                </Col>

              </Box>
              <Button  type="default" style={StyleQR}>
              <Icon type=""> </Icon>
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

export default Schedule;