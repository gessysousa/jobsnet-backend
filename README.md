# JobsNET

Desafio do programa Start Tech da Ambev em parceria com a Gama Academy.
Desenvolvimento de um site de cadastro de currículos para a empresa fictícia JobsNET.

# Requisitos
Backend
Domínio - Modelagem de Dados

     Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos.
     Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep) NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: https://viacep.com.br/ws/{SEU_CEP}/json/

Regra de Negócio

    Não pode haver 2 cadastros de candidatos com o mesmo cpf
    Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular

Integração entre a Página de Formulário e o Back-end

    Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados.
    Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.