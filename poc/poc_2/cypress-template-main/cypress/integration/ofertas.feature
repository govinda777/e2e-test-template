Feature: Ofertas

     Background: Acessar o portal poc_2
          Given acesso o portal poc_2
          And logo com perfil "JEAN"

     Scenario Outline:  Nova Oferta (Compra / <produto> / <moeda>)
          Given acesso a funcionalidade "Ofertas de Compra e Venda"
          When clico em "Nova Oferta"
          And preencho o campo "tipo" com "Compra"
          And preencho o campo "produto" com "<produto>"
          And preencho o campo "modalidade" com "<modalidade>"
          And preencho o campo "preco" com "<preco>"
          And preencho o campo "moeda" com "<moeda>"
          And preencho o campo "medida" com "<medida>"
          And preencho o campo "frete" com "<frete>"
          And preencho o campo "volume_minimo" com "<volume_minimo>"
          And preencho o campo "volume_maximo" com "<volume_maximo>"
          And preencho o campo "safra" com "<safra>"
          And preencho o campo "unidade" com "<unidade>"
          And preencho o campo "descricao" com "<descricao>"
          And clico em "Criar"
          And seleciono a carteira "<carteira>"
          And clico em "<produtores>"
          And clico em "Enviar"
          And clico em "Ok"
          Then a mensagem "Oferta enviada com sucesso!" deve ser mostrada
          Examples:
               | produto | modalidade | preco          | moeda | medida  | frete | volume_minimo | volume_maximo | safra           | unidade         | descricao      | carteira     | produtores                                  |
               | Milho   | Disponível | numeroAletorio | USD   | Saca(s) | CIF   | 9             | 999           | 2022/2023       | Armazem do Lago | textoAleatorio | Nova Preprod | Fernando Suzuki Test; ProdOne JeanSocial |
               | Soja    | Balcão     | numeroAletorio | BRL   | Saca(s) | CIF   | 1             | 111           | 2023 - Safrinha | Armazem do Lago | textoAleatorio | Nova Preprod | Fernando Suzuki Test; Producer Company   |


     Scenario Outline:  Nova Oferta (Fixação / <produto> / <moeda>)
          Given acesso a funcionalidade "Ofertas de Compra e Venda"
          When clico em "Nova Oferta"
          And preencho o campo "tipo" com "Fixação"
          And preencho o campo "produto" com "<produto>"
          And preencho o campo "modalidade" com "<modalidade>"
          And preencho o campo "preco" com "<preco>"
          And preencho o campo "moeda" com "<moeda>"
          And preencho o campo "medida" com "<medida>"
          And preencho o campo "volume_minimo" com "<volume_minimo>"
          And preencho o campo "volume_maximo" com "<volume_maximo>"
          And preencho o campo "safra" com "<safra>"
          And preencho o campo "unidade" com "<unidade>"
          And preencho o campo "descricao" com "<descricao>"
          And clico em "Criar"
          And seleciono a carteira "<carteira>"
          And clico em "<produtores>"
          And clico em "Enviar"
          And clico em "Ok"
          Then a mensagem "Oferta enviada com sucesso!" deve ser mostrada
          Examples:
               | produto | modalidade | preco          | moeda | medida  | frete | volume_minimo | volume_maximo | safra           | unidade         | descricao      | carteira     | produtores                                |
               | Milho   | Disponível | numeroAletorio | USD   | Saca(s) | CIF   | 3             | 3333          | 2022/2023       | Armazem do Lago | textoAleatorio | Nova Preprod | Selecionar todos                       |
               | Soja    | Balcão     | numeroAletorio | BRL   | Saca(s) | CIF   | 10            | 101010        | 2022 - Safrinha | Armazem do Lago | textoAleatorio | Nova Preprod | Fernando Suzuki Test; Producer Company |
     
     Scenario Outline: Nova Oferta (Compra / 1 produtor / <tipo_oferta>)
          Given acesso a funcionalidade "Ofertas de Compra e Venda"
          When clico em "Nova Oferta"
          And preencho o campo "tipo" com "Compra"
          And preencho o campo "produto" com "Milho"
          And preencho o campo "modalidade" com "Disponível"
          And preencho o campo "preco" com "numeroAletorio"
          And preencho o campo "moeda" com "USD"
          And preencho o campo "medida" com "Saca(s)"
          And preencho o campo "frete" com "CIF"
          And preencho o campo "volume_minimo" com "222"
          And preencho o campo "volume_maximo" com "222"
          And preencho o campo "safra" com "2021/2022"
          And preencho o campo "unidade" com "Armazem do Lago"
          And preencho o campo "descricao" com "Compra com 1 produtor."
          And clico em "Criar"
          And seleciono a carteira "Nova Preprod"
          And clico em "ProdOne JeanSocial"
          And clico em "Enviar"
          And clico em "Ok"
          And clico em "<tipo_oferta>"
          Then a mensagem "Oferta enviada com sucesso!" deve ser mostrada
          Examples:
               | tipo_oferta            |
               | Oferta Confirmada      |
               | Oferta para Negociação |