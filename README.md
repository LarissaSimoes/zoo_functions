## Zoo Information Organizer 🦓🦒🦁

Bem-vindo ao meu projeto de organização de informações do zoológico! Este projeto foi desenvolvido como parte de uma missão dada para organizar dados cruciais sobre os animais do zoológico e as pessoas envolvidas na sua manutenção.

### Funcionalidades Principais

1. **`getSpeciesByIds`**: busca as espécies dos animais por meio de um ID e retorna um array contendo todos os animais dessa espécie.

2. **`getAnimalsOlderThan`**:  recebe uma espécie e uma idade como parâmetro, e então retorna se todos os animais dessa espécie possuem essa idade ou são mais velhos.

3. **`getEmployeeByName`**: busca por pessoas colaboradoras através de seu primeiro ou último nome.

4. **`getRelatedEmployees`**: verifica se uma pessoa colaboradora é gerente e quais pessoas ela lidera.

5. **`countAnimals`**: Retorna a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro ou retorna a quantidade de animais residentes no zoológico da espécie passada por parâmetro.

6. **`100% de cobertura de testes na função handlerElephants`**: foram implementados os testes da função handlerElephants para obter 100% de cobertura. Essa função retorna informações referentes aos elefantes conforme o argumento passado.

7. **`calculateEntry`**: Calcula o valor total da entrada dos visitantes do zoológico.

8. **`getSchedule`**: Disponibiliza um cronograma com os horários de visita da semana disponíveis para cada espécie de animal.

9. **`getOldestFromFirstSpecies`**: Encontra o animal mais velho da espécie gerenciado por uma pessoa colaboradora.

10. **`getEmployeesCoverage`**: Retorna as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.

11. **` 100% de cobertura de testes na função getOpeningHours`**: Foram implementados os testes da função getOpeningHours para obter 100% de cobertura. Esta função recebe como argumentos um dia da semana e um horário, e retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora.

12. **`getAnimalMap`**: Mapeamento geográfico dos animais de cada espécie e realize filtros de localização, nome em ordem alfabética e sexo.

### Desenvolvimento Orientado a Testes 🧪

Este projeto enfatiza o desenvolvimento orientado a testes (TDD), garantindo a confiabilidade e desempenho do código. Os testes foram implementados para cada função, abrangendo diferentes cenários de uso.

### Como Testar o Projeto

1. **Instalação de Dependências**
   ```bash
   npm install
   ```

2. **Executar Testes**
   ```bash
   npm test
   ```

Divirta-se explorando o zoológico virtual! 🐾🌍
