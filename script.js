let formadepagamento = 'pix';
switch (formadepagamento){
    case 'pix':
        console.log('parabens seu pagamento foi aprovado . Em breve enviaremos mais informaçôes.');
        break;
        
        case ' boleto':
            console.log('seu pagamento está em processamento e pode levar até 48 horas para ser confirmado');
                    break;

                    case 'cartão de credito':
                        console.log('pagamento em análise. Um de nossos vendedores poderão entrar em em contato para realizar a confirmação do pagamento com seu banco emissor.');
                        break;
                        
                        default:
                            console.log('formade pagamento inválida. por favor tente novamente.');
                    
    }